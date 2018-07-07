const createRequestRouter = db => {
    const express = require('express');
    const router = express.Router();
    const rc = require("../controllers/request.js")(db);

    router.post('/:id', rc.showRequest); // id refers to the post_id

    router.get('/:id/accept', rc.acceptRequestQ); // id refers to the request id
    router.post('/:id/accept', rc.acceptRequest);

    router.get('/:id/decline', rc.declineRequestQ);
    router.post('/:id/decline', rc.declineRequest);

    return router;
}

// export router to be used in app.js
module.exports = createRequestRouter;