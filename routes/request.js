const createRequestRouter = db => {
    const express = require('express');
    const router = express.Router();

    router.get('/', (request, response) => {
        response.render('home');
    });

    return router;
}

// export router to be used in app.js
module.exports = createRequestRouter;