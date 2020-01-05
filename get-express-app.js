const express = require('express');
const session = require('express-session');
const jokesRepository = require('./repositories/joke-repository');

const defaultConfig = {
    SESSION_SECRET: 'to be replaced with environment variables',
};

module.exports = (environmentConfig = {}) => {
    const app = express();
    
    app.use(session({
        secret: environmentConfig.SESSION_SECRET || defaultConfig.SESSION_SECRET,
        resave: false,
        saveUninitialized: true
    }));
    
	app.get('/filter', (req, res, next) => {
        var filter = req.query && req.query.text;
        var jokes = [];
        if (filter) {
            jokes = jokesRepository.getFilteredJokes(filter);
        }
        res.json(jokes);
    });

	app.get('/random', (req, res, next) => {
        req.session.excludedIndexes = req.session.excludedIndexes || [];
        const randomJoke = jokesRepository.getRandomJoke(req.session.excludedIndexes);
        res.json(randomJoke);
    });
    
    return app;
};
