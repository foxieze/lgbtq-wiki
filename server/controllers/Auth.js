import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import crypto from 'crypto';

export async function loginUser(req, res) {
    let hashedPassword = crypto.createHash('sha256').update(req.body.password).digest('base64');
    console.log("Hashed: " + hashedPassword);
    
    let user = await User.findAll({
        where: {
            username: req.body.username
        }
    });
    console.log("Received: " + user[0].password);
    
    if (!user[0]) {
        res.cookie('token', token, { httpOnly: true });
        res.status(401).send("User not found!");
    }
    else if (user[0].password == hashedPassword) {
        const payload = {
            username: req.body.username
        }
        jwt.sign(payload, process.env.JWT_SECRET, { algorithm: 'HS256'}, (err, token) => {
            res.cookie('token', token, { httpOnly: true });
            res.status(200).send('Authorised!');
            console.log(err);
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
        decoded = jwt.verify(token, process.env.JWT_SECRET, { algorithm: 'HS256'});
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
        decoded = jwt.verify(token, process.env.JWT_SECRET, { algorithm: 'HS256'});
    }
    catch (err) {
        return false;
    }
    if (decoded != undefined) {
        return true;
    }
    return false;
} 