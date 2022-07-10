import axios from "axios";

export async function loginUser(username, password) {
    const payload = {
        username: username,
        password: password
    };
    let res = await axios.post('http://localhost:3003/api/login', payload);
    return res;
}

export async function validateLogin() {
    try {
        await axios.get('http://localhost:3003/api/validate');
    }
    catch (err) {
        return false;
    }
    return true;
}

export async function logoutUser() {
    try {
        await axios.get('http://localhost:3003/api/logout');
    }
    catch (err) {
        console.log("Error!");
    }
}