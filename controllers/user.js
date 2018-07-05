let createControllers = db => {
    const User = require("../models/user")(db);
    const sha256 = require('js-sha256');

    return {
        showRegForm: (request, response) => {
            response.render('register');
        },

        showLoginForm: (request, response) => {
            response.render('login');
        },

        userCreate: (request, response) => {
            let userInfo = {
                name: request.body.name,
                email: request.body.email,
                passwordHash: sha256(request.body.password),
                bio: request.body.bio,
                is_deleted: "false"
            };
            let errorCallback = (error) => {
                console.log("Error creating user:", error);
                response.status(401);
            }
            let successCallback = (createdUserId) => {
                response.cookie('logged_in', 'true');
                response.cookie('user_id', createdUserId);
                request.flash('success', 'Successfully created account.');
                response.redirect('/post');
            }
            User.create(userInfo, errorCallback, successCallback);
        },

        profileRead: (request, response) => {
            response.send('ok');
        },

        profileUpdate: (request, response) => {
            response.send('ok');
        },

        profileDelete: (request, response) => {
            response.send('ok');
        },






    }
}

module.exports = createControllers;