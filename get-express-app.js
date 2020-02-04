const express = require('express');
const session = require('express-session');
const jokesRepository = require('./repositories/joke-repository');

const defaultConfig = {
    SESSION_SECRET: 'to be replaced with environment variables',
};

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
    
	app.get('/jokes', (req, res, next) => {
        const { filter } = req.query;
        const jokes = filter ? jokesRepository.getFilteredJokes(filter) : [];
        res.json(jokes);
    });

    app.get('/joke/:id?', (req, res, next) => {
        const { id } = req.params;
        if (id) {
            const joke = jokesRepository.getByIndex(parseInt(id));
            const status = joke ? 200 : 404;
            res.status(status).json(joke || 'Not found');
        }
        else {
            req.session.excludedIndexes = req.session.excludedIndexes || [];
            const randomJoke = jokesRepository.getRandomJoke(req.session.excludedIndexes);
            res.json(randomJoke);
        }
    });
    
    return app;
};
