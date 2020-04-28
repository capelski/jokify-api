const express = require('express');
const session = require('express-session');
const jokesRepository = require('./repositories/joke-repository');

const defaultConfig = {
    SESSION_SECRET: 'to be replaced with environment variables'
};

const addJokeToServedJokes = (jokeId, servedJokesId) => {
    if (servedJokesId.indexOf(jokeId) === -1) {
        servedJokesId.push(jokeId);
    }
};

const getNonServedId = (min, max, servedJokesId) => {
    let randomId = getRandomId(min, max);

    while (servedJokesId.indexOf(randomId) > -1) {
        randomId = randomId === max ? min : randomId + 1;
    }

    return randomId;
};

const getRandomId = (min, max) => Math.round(Math.random() * (max - min) + min);

// Values that don't change during execution time
const jokesCount = jokesRepository.count();
const newestJoke = jokesRepository.getNewest();
const oldestJoke = jokesRepository.getOldest();

module.exports = (environmentConfig = {}) => {
    const app = express();

    // Allow CORS for development purposes
    app.use((_req, res, next) => {
        res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
        res.header('Access-Control-Allow-Methods', '*');
        res.header('Access-Control-Allow-Headers', '*');
        next();
    });

    app.use(
        session({
            resave: false,
            saveUninitialized: true,
            secret: environmentConfig.SESSION_SECRET || defaultConfig.SESSION_SECRET
        })
    );

    app.get('/limits', (_req, res) => {
        res.status(200).json({
            oldest: oldestJoke.id,
            newest: newestJoke.id
        });
    });

    app.use((req, _res, next) => {
        if (!req.session.servedJokesId) {
            req.session.servedJokesId = [];
            req.session.searches = {};
        }
        next();
    });

    app.get('/joke/newest', (req, res) => {
        addJokeToServedJokes(newestJoke.id, req.session.servedJokesId);
        res.status(200).json(newestJoke);
    });

    app.get('/joke/oldest', (req, res) => {
        addJokeToServedJokes(oldestJoke.id, req.session.servedJokesId);
        res.status(200).json(oldestJoke);
    });

    app.get('/joke/random', (req, res) => {
        if (req.session.servedJokesId.length === jokesCount) {
            req.session.servedJokesId.length = 0;
        }

        const randomId = getNonServedId(oldestJoke.id, newestJoke.id, req.session.servedJokesId);
        const randomJoke = jokesRepository.getByIndex(randomId);

        addJokeToServedJokes(randomJoke.id, req.session.servedJokesId);
        res.status(200).json(randomJoke);
    });

    app.get('/joke/filtered', (req, res) => {
        const text = req.query.text || '';
        const filteredJokes = jokesRepository.getAll(text);

        if (filteredJokes.length > 0) {
            if (
                req.session.searches[text] === undefined ||
                req.session.searches[text] === filteredJokes.length
            ) {
                req.session.searches[text] = 0;
            }

            const filteredJoke = filteredJokes[req.session.searches[text]];
            req.session.searches[text]++;

            addJokeToServedJokes(filteredJoke.id, req.session.servedJokesId);
            res.status(200).json(filteredJoke);
        } else {
            res.status(404).send(`There are no jokes containing "${text}"`);
        }
    });

    app.get('/joke/:id', (req, res) => {
        const { id } = req.params;
        const joke = jokesRepository.getByIndex(parseInt(id, 10));

        if (joke) {
            addJokeToServedJokes(joke.id, req.session.servedJokesId);
            res.status(200).json(joke);
        } else {
            res.status(404).send('Not found');
        }
    });

    return app;
};
