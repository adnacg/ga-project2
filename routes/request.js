const createRequestRouter = db => {
    const express = require('express');
    const router = express.Router();
    const rc = require("../controllers/request.js")(db);

    router.get('/:id', rc.showRequest);

    router.get('/:id/accept', rc.acceptRequestQ);
    router.post('/:id/accept', rc.acceptRequest);

    router.get('/:id/decline', rc.declineRequestQ);
    router.post('/:id/decline', rc.declineRequest);

    return router;
}

// export router to be used in app.js
module.exports = createRequestRouter;