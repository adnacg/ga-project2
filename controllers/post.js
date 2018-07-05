let createControllers = db => {
    const Post = require("../models/post")(db);
    const sha256 = require('js-sha256');

    return {
        postRead: (request, response) => {
            response.render('post');
        },

        formRead: (request, response) => {
            response.render('postform');
        },

        postCreate: (request, response) => {
            let currentUserId = request.cookies.user_id;
            let postInfo = {
                location: request.body.location,
                pax: request.body.pax,
                availability: request.body.availability,
                skill: request.body.skill,
                instrument: request.body.instrument,
                genre: request.body.genre,
                message: request.body.message,
                status: "active",
                is_deleted: "false"
            };
            let errorCallback = (error) => {
                console.log("Error:", error);
                response.status(401);
            }
            let successCallback = () => {
                request.flash('success', 'Successfully created post.');
                response.redirect('/post');
            }
            Post.create(postInfo, currentUserId, errorCallback, successCallback);
        },

        postReadMore: (request, response) => {
            let context = {
                id: 1
            };
            response.render('readmore', context);
        },

        postRequest: (request, response) => {
            response.send("ok");
        },

    }
}

module.exports = createControllers;