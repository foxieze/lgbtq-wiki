import axios from "axios";

export async function getAllWordsFromAPI() {
    let response = await axios.get('http://localhost:3003/api/words');
    return response;
}

export async function createWord(word) {
    let url = 'http://localhost:3003/api/word';
    let response = await axios.post(url, word);
    return response;
}

export async function getWordFromSlug(wordslug) {
    let response = await axios.get('http://localhost:3003/api/word/' + wordslug);
    return response;
}

export async function deleteWord(wordslug) {
    let url = 'http://localhost:3003/api/word/' + wordslug;
    let response = await axios.delete(url);
    return response;
}

export async function editWord(word) {
    let url = 'http://localhost:3003/api/word/' + word.wordslug;
    let response = await axios.put(url, word);
    return response;
}