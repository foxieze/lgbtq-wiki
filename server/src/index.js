import express from 'express';
import cors from 'cors';
const PORT = process.env.PORT || 3003

import cookieParser from 'cookie-parser';
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
import User from './models/User.js'
import { loginUser, logoutUser, validateLogin } from './controllers/Auth.js';

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

Word.sync({ alter: true });
User.sync({ alter: true });

const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:8080",
    credentials: true
}));

app.get('/api/words', getWords);

app.get('/api/word/:wordslug', getWordBySlug);

app.post('/api/word', createWord);

app.delete('/api/word/:wordslug', deleteWord);

app.put('/api/word/:wordslug', updateWord);

app.post('/api/login', loginUser);

app.get('/api/validate', validateLogin);

app.get('/api/logout', logoutUser);

app.listen(PORT, () => {
    console.log("App listening on port " + PORT);
});