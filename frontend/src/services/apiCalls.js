import axios from "axios";

export async function getAllWordsFromAPI() {
    let response = await axios.get(process.env.VUE_APP_BASE_API_URL + '/api/words');
    return response;
}

export async function createWord(word) {
    let url = process.env.BASE_API_URL + '/api/word';
    let response = await axios.post(url, word);
    return response;
}

export async function getWordFromSlug(wordslug) {
    let response = await axios.get(process.env.VUE_APP_BASE_API_URL + '/api/word/' + wordslug);
    return response;
}

export async function deleteWord(wordslug) {
    let url = process.env.VUE_APP_BASE_API_URL + '/api/word/' + wordslug;
    let response = await axios.delete(url);
    return response;
}

export async function editWord(word) {
    let url = process.env.VUE_APP_BASE_API_URL + '/api/word/' + word.wordslug;
    let response = await axios.put(url, word);
    return response;
}