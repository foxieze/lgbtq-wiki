import express from 'express';
import cors from 'cors';
const PORT = process.env.PORT || 3003

import sequelize from './config/database.js';

import { 
    getWords,
    getWordById,
    createWord,
    updateWord,
    deleteWord,
    getWordBySlug
} from './controllers/Word.js';

import Word from './models/Word.js'

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

Word.sync({ alter: true });

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/words', getWords);

app.get('/api/word/:wordslug', getWordBySlug);

app.post('/api/word', createWord);

app.delete('/api/word/:wordslug', deleteWord);

app.put('/api/word/:wordslug', updateWord);

app.listen(PORT, () => {
    console.log("App listening on port " + PORT);
});