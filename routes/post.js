const createPostRouter = db => {
    const express = require('express');
    const router = express.Router();

    router.get('/', (request, response) => {
        response.render('list');
    });

    return router;
}

// export router to be used in app.js
module.exports = createPostRouter;