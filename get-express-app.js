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
        const filter = req.query && req.query.text;
        let jokes = [];
        if (filter) {
            jokes = jokesRepository.getFilteredJokes(filter);
        }
        res.json(jokes);
    });

    app.get('/joke/:id', (req, res, next) => {
        const { id } = req.params;
        const joke = jokesRepository.getByIndex(id);
        const status = joke ? 200 : 404;
        res.status(status).json(joke || 'Not found');
    });

	app.get('/random', (req, res, next) => {
        req.session.excludedIndexes = req.session.excludedIndexes || [];
        const randomJoke = jokesRepository.getRandomJoke(req.session.excludedIndexes);
        res.json(randomJoke);
    });
    
    return app;
};
