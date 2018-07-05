const createUserRouter = db => {
    const express = require('express');
    const router = express.Router();
    const uc = require("../controllers/user.js")(db);

    router.get('/register', uc.showRegForm);
    router.post('/register', uc.userCreate);

    router.get('/login', uc.showLoginForm);

    router.get('/:id', uc.profileRead);
    router.put('/:id', uc.profileUpdate);
    router.delete('/:id', uc.profileDelete);

    return router;
}

// export router to be used in app.js
module.exports = createUserRouter;