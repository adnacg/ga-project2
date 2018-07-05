const createPostRouter = db => {
    const express = require('express');
    const router = express.Router();
    const pc = require("../controllers/post.js")(db);

    router.get('/', pc.postRead);

    router.get('/new', pc.formRead);
    router.post('/new', pc.postCreate);

    router.get('/:id', pc.postReadMore);
    router.post('/:id', pc.postRequest);

    return router;
}

// export router to be used in app.js
module.exports = createPostRouter;