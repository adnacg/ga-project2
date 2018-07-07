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
                postId: request.params.id,
                requester_id: request.cookies.user_id,
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

        postUpdateQ: (request, response) => {
            let postId = request.params.id;
            let errorCallback = (error) => {
                console.log("Error:", error);
                response.status(401);
            }
            let successCallback = (currentPost) => {
                let context = {post: currentPost};
                response.render('postupdate', context);
            }
            Post.updateform(postId, errorCallback, successCallback);
        },

        postUpdate: (request, response) => {
            let postId = request.params.id;
            let newDetails = {
                location: request.body.location,
                pax: request.body.pax,
                availability: request.body.availability,
                skill: request.body.skill,
                message: request.body.message
            }
            let errorCallback = (error) => {
                console.log("Error:", error);
                response.status(401);
            }
            let successCallback = (currentPost) => {
                request.flash('success', 'Successfully updated.');
                response.redirect('/user/' + request.cookies.user_id);
            }
            Post.update(postId, newDetails, errorCallback, successCallback);
        },

        postDeleteQ: (request, response) => {
            let postId = request.params.id;
            let context = {postId: postId};
            response.render('postdelete', context);
        },

        postDelete: (request, response) => {
            let postId = request.params.id;
            let errorCallback = (error) => {
                console.log("Error:", error);
                response.status(401);
            }
            let successCallback = () => {
                request.flash('success', 'Successfully deleted post.');
                response.redirect('/user/' + request.cookies.user_id);
            }
            Post.delete(postId, errorCallback, successCallback);
        },


    }
}

module.exports = createControllers;