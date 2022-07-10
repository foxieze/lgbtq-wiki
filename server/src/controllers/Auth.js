import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import crypto from 'crypto';
import 'dotenv/config';

export async function loginUser(req, res) {
    let hashedPassword = crypto.createHash('sha256').update(req.body.password).digest('base64');
    let user = await User.findAll({
        where: {
            username: req.body.username
        }
    });
    if (!user[0]) {
        res.cookie('token', token, { httpOnly: true });
        res.status(401).send("User not found!");
    }
    else if (user[0].password == hashedPassword) {
        const payload = {
            username: req.body.username
        }
        jwt.sign(payload, "secret", { algorithm: 'HS256'}, (err, token) => {
            res.cookie('token', token, { httpOnly: true });
            res.status(200).send('Authorised!');
        });
    }
    else {
        res.status(401).send("Unauthorised!");
    }
}

export async function validateLogin(req, res) {
    let token = req.cookies.token;
    var decoded;
    try {
        decoded = jwt.verify(token, "secret", { algorithm: 'HS256'});
    }
    catch (err) {
        res.clearCookie('token');
        res.status(401).send('Invalid token');
    }
    if (decoded != undefined) {
        res.status(200).send('Authorised');
    }
}

export async function logoutUser(req,res) {
    res.clearCookie('token');
    res.status(200).send("Logged out");
}

export async function serverValidate(req) {
    let token = req.cookies.token;
    var decoded;
    try {
        decoded = jwt.verify(token, "secret", { algorithm: 'HS256'});
    }
    catch (err) {
        return false;
    }
    if (decoded != undefined) {
        return true;
    }
    return false;
} 