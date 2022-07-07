// Import Word Model
import Word from "../models/Word.js";
 
// Get all words
export const getWords = async (req, res) => {
    try {
        const words = await Word.findAll({
            order: [
                ['word', 'ASC']
            ]
        });
        res.send(words);
    } catch (err) {
        console.log(err);
    }
}
 
// Get word by id
export const getWordById = async (req, res) => {
    try {
        const word = await Word.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(word[0]);
    } catch (err) {
        console.log(err);
    }
}

// Get word by word slug
export const getWordBySlug = async (req, res) => {
    try {
        const word = await Word.findAll({
            where: {
                wordslug: req.params.wordslug
            }
        });
        res.send(word[0]);
    } catch (err) {
        console.log(err);
    }
}
 
// Create a new word
export const createWord = async (req, res) => {
    console.log('Attempting to create word.');
    try {
        await Word.create(req.body);
        res.json({
            "message": "Word Created"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Update word by id
export const updateWord = async (req, res) => {
    try {
        await Word.update(req.body, {
            where: {
                wordslug: req.params.wordslug
            }
        });
        res.json({
            "message": "Word Updated"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Delete word by id
export const deleteWord = async (req, res) => {
    try {
        await Word.destroy({
            where: {
                wordslug: req.params.wordslug
            }
        });
        res.json({
            "message": "Word Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}