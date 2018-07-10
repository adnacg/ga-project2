let createControllers = db => {
    const Post = require("../models/post")(db);
    const sha256 = require('js-sha256');

    return {
        postRead: (request, response) => {
            let errorCallback = (error) => {
                console.log("Error:", error);
                response.status(401);
            }
            let successCallback = (result) => {
                let context = {posts: result.rows};
                response.render('post', context);
            }
            Post.read(errorCallback, successCallback);
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
                request.flash('error', 'Error creating new post.');
                response.redirect('/post/new');
            }
            let successCallback = () => {
                request.flash('success', 'Successfully created post.');
                response.redirect('/post');
            }
            if (request.cookies.user_id) {
                Post.create(postInfo, currentUserId, errorCallback, successCallback);
            } else {
                request.flash('info', 'Please login to continue.');
                response.redirect('/user/login');
            }
        },

        postReadMore: (request, response) => {
            let postId = request.params.id;
            let errorCallback = (error) => {
                console.log("Error:", error);
                response.status(401);
            }
            let successCallback = (result) => {
                let context = {post: result.rows[0]};
                response.render('readmore', context);
            }
            Post.readmore(postId, errorCallback, successCallback);
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
                request.flash('error', 'Error requesting jam.');
                response.redirect('/post/' + request.params.id);
            }
            let successCallback = () => {
                request.flash('success', 'Successfully requested to join.');
                response.redirect('/post');
            }
            if (request.cookies.user_id) {
                Post.request(postReqInfo, errorCallback, successCallback);
            } else {
                request.flash('info', 'Please login to continue.');
                response.redirect('/user/login');
            }
        },

        postUpdateQ: (request, response) => {
            let postId = request.params.id;
            let errorCallback = (error) => {
                console.log("Error:", error);
                response.status(401);
                request.flash('error', 'Error retrieving jam info.');
                response.redirect('/');
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
                request.flash('error', 'Error updating jam info.');
                response.redirect('/');
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
                request.flash('error', 'Error deleting jam.');
                response.redirect('/');
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