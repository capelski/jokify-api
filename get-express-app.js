const express = require('express');
const session = require('express-session');
const jokesRepository = require('./repositories/joke-repository');

const defaultConfig = {
    SESSION_SECRET: 'to be replaced with environment variables',
};

const getRandomNumber = (maxValue, excludedNumbers) =>{
    let randomNumber = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) % maxValue;
	while(excludedNumbers.indexOf(randomNumber) > -1) {
		randomNumber = (randomNumber + 1) % maxValue;
    }
    return randomNumber;
}
const jokesCount = jokesRepository.count();

module.exports = (environmentConfig = {}) => {
    const app = express();

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "http://localhost:8080");
        res.header("Access-Control-Allow-Methods", "*");
        res.header("Access-Control-Allow-Headers", "*");
        next();
    });

    app.use(session({
        secret: environmentConfig.SESSION_SECRET || defaultConfig.SESSION_SECRET,
        resave: false,
        saveUninitialized: true
    }));

    app.get('/joke/:id?', (req, res, next) => {
        const excludedIndexes = req.session.excludedIndexes = req.session.excludedIndexes || [];
        if (excludedIndexes.length === jokesCount) {
            excludedIndexes.length = 0;
        }

        const { id } = req.params;
        const { filter } = req.query;

        let joke;

        if (id) {
            joke = jokesRepository.getByIndex(parseInt(id));
        }
        else if (filter) {
            const filteredJokes = jokesRepository.getAll(filter);
            joke = filteredJokes.find(j => excludedIndexes.indexOf(j.id) === -1);
        }
        else {
            const randomId = getRandomNumber(jokesCount, excludedIndexes);
            joke = jokesRepository.getByIndex(randomId);
        }

        if (joke) {
            excludedIndexes.push(joke.id);
        }

        const status = joke ? 200 : 404;
        res.status(status).json(joke || 'Not found');
    });
    
    return app;
};
