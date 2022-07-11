import axios from "axios";

export async function loginUser(username, password) {
    const payload = {
        username: username,
        password: password
    };
    let res = await axios.post(process.env.VUE_APP_BASE_API_URL + '/login', payload);
    return res;
}

export async function validateLogin() {
    try {
        await axios.get(process.env.VUE_APP_BASE_API_URL + '/validate');
    }
    catch (err) {
        return false;
    }
    return true;
}

export async function logoutUser() {
    try {
        await axios.get(process.env.VUE_APP_BASE_API_URL + '/logout');
    }
    catch (err) {
        console.log("Error!");
    }
}