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
                id: request.params.id
            };
            response.render('readmore', context);
        },

        postCreateRequest: (request, response) => {
            let postReqInfo = {
                post_id: request.params.id,
                requester_id: request.cookie.user_id,
                status: "pending"
            };
            let errorCallback = (error) => {
                console.log("Error:", error);
                response.status(401);
            }
            let successCallback = () => {
                request.flash('success', 'Successfully requested to join.');
                response.redirect('/post');
            }
            Post.request(postReqInfo, errorCallback, successCallback);
        },

        postUpdate: (request, response) => {
            let post_id = request.params.id;
            let errorCallback = (error) => {
                console.log("Error:", error);
                response.status(401);
            }
            let successCallback = () => {
                request.flash('success', 'Successfully reposted.');
                response.redirect('/post');
            }
            Post.update(post_id, errorCallback, successCallback);
        },

        postDeleteQ: (request, response) => {
            let post_id = request.params.id;
            let context = {post_id: post_id, cookies: request.cookies};
            response.render('postdelete', context);
        },

        postDelete: (request, response) => {
            let post_id = request.params.id;
            let errorCallback = (error) => {
                console.log("Error:", error);
                response.status(401);
            }
            let successCallback = () => {
                request.flash('success', 'Successfully deleted post.');
                response.redirect('/user/' + request.cookies.user_id);
            }
            Post.delete(post_id, errorCallback, successCallback);
        },


    }
}

module.exports = createControllers;