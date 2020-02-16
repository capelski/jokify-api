const getExpressApp = require('./get-express-app');

const app = getExpressApp();
app.listen(3000, (error) => {
    if (error) {
        // eslint-disable-next-line no-console
        console.error(error);
    } else {
        // eslint-disable-next-line no-console
        console.log('Express server listening on port 3000');
    }
});
