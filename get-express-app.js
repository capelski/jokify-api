const express = require('express');
const session = require('express-session');
const jokesRepository = require('./repositories/joke-repository');

const defaultConfig = {
    SESSION_SECRET: 'to be replaced with environment variables'
};

const getRandomNumber = (maxValue, excludedNumbers) => {
    let randomNumber = Math.round(Math.random() * Number.MAX_SAFE_INTEGER) % maxValue;
    while (excludedNumbers.indexOf(randomNumber) > -1) {
        randomNumber = (randomNumber + 1) % maxValue;
    }
    return randomNumber;
};

const getAlreadyServedJoke = (requestSession, filter, filteredJokes) => {
    if (!requestSession.searches) {
        // eslint-disable-next-line no-param-reassign
        requestSession.searches = {};
    }
    const { searches } = requestSession;

    searches[filter] =
        (requestSession.searches[filter] &&
            requestSession.searches[filter].length < filteredJokes.length &&
            requestSession.searches[filter]) ||
        [];
    const joke = filteredJokes.find(j => requestSession.searches[filter].indexOf(j.id) === -1);
    requestSession.searches[filter].push(joke.id);
    return joke;
};

const jokesCount = jokesRepository.count();

module.exports = (environmentConfig = {}) => {
    const app = express();

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.header('Access-Control-Allow-Methods', '*');
        res.header('Access-Control-Allow-Headers', '*');
        next();
    });

    app.use(
        session({
            secret: environmentConfig.SESSION_SECRET || defaultConfig.SESSION_SECRET,
            resave: false,
            saveUninitialized: true
        })
    );

    app.get('/limits', (req, res) => {
        res.status(200).json({
            oldest: jokesRepository.getOldest().id,
            newest: jokesRepository.getNewest().id
        });
    });

    app.get('/joke/:id', (req, res) => {
        if (!req.session.excludedIndexes) {
            req.session.excludedIndexes = [];
        }
        const { excludedIndexes } = req.session;

        if (excludedIndexes.length === jokesCount) {
            excludedIndexes.length = 0;
        }

        const { id } = req.params;

        let joke;

        if (id === 'newest') {
            joke = jokesRepository.getNewest();
        } else if (id === 'oldest') {
            joke = jokesRepository.getOldest();
        } else if (id === 'random') {
            const randomId = getRandomNumber(jokesCount, excludedIndexes);
            joke = jokesRepository.getByIndex(randomId);
        } else if (id === 'filter') {
            const text = req.query.text || '';
            const filteredJokes = jokesRepository.getAll(text);
            joke =
                filteredJokes.find(j => excludedIndexes.indexOf(j.id) === -1) ||
                (filteredJokes.length > 0 &&
                    getAlreadyServedJoke(req.session, text, filteredJokes));
        } else {
            joke = jokesRepository.getByIndex(parseInt(id, 10));
        }

        if (joke) {
            excludedIndexes.push(joke.id);
        }

        const status = joke ? 200 : 404;
        res.status(status).json(joke || 'Not found');
    });

    return app;
};
