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

        userLogin: (request, response) => {
            let enteredEmail = request.body.email;
            let enteredPasswordHash = sha256(request.body.password);
            let errorCallback = (error) => {
                console.log("Error logging in:", error);
                response.status(401);
            }
            let successCallback = (userId) => {
                response.cookie('logged_in', 'true');
                response.cookie('user_id', userId);
                request.flash('success', 'Successfully created account.');
                response.redirect('/post');
            }
            User.login(enteredEmail, enteredPasswordHash, errorCallback, successCallback);
        },

        showLogoutForm: (request, response) => {
            response.render('logout');
        },

        userLogout: (request, response) => {
            response.clearCookie('logged_in');
            response.clearCookie('user_id');
            request.flash('success', 'Successfully logged out!');
            response.redirect('/post');
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
            let currentUserId = request.cookies.user_id;
            let errorCallback = (error) => {
                console.log("Error showing profile:", error);
                response.status(401);
            }
            let successCallback = (result, result2, result3) => {
                let userInfo = result.rows.map( user => {
                    return {
                        "id": user.id,
                        "name": user.name,
                        "email": user.email,
                        "bio": user.bio,
                    }
                });
                let postInfo = result2.rows; // array of potentially my many posts
                let requestInfo = result3.rows; // array of potentially my many requests
                let context = {user: userInfo, post: postInfo, request: requestInfo};
                response.render('profile', context);
            }
            User.read(currentUserId, errorCallback, successCallback);
        },

        profileUpdate: (request, response) => {
            response.send('ok');
            // User.update(userInfo, errorCallback, successCallback);
        },

        profileDelete: (request, response) => {
            let user_id = request.cookies.user_id;
            User.delete(user_id, errorCallback, successCallback);
        },






    }
}

module.exports = createControllers;