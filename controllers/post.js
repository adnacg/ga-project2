let createControllers = db => {
    const Post = require("../models/post")(db);
    const sha256 = require('js-sha256');

    return {
        postRead: (request, response) => {
            let errorCallback = (error) => {
                console.log("Error:", error);
                response.status(401);
            }
            let successCallback = (result, result2, result3) => {
                let context = {
                    posts: result.rows,
                    // genres:
                    // instruments:
                };
                response.render('post', context);
            }
            Post.read(errorCallback, successCallback);
        },

        formRead: (request, response) => {
            if (request.cookies.user_id) {
                response.render('postform');
            } else {
                request.flash('info', 'Please login to continue.');
                response.redirect('/user/login');
            }
        },

        postCreate: (request, response) => {
            let currentUserId = request.cookies.user_id;
            let postInfo = {
                location: request.body.location,
                pax: request.body.pax,
                availability: request.body.availability,
                skill: request.body.skill,
                message: request.body.message,
                status: "active",
                is_deleted: "false"
            };
            let instrumentInfo = {
                1: request.body.guitar,
                2: request.body.bass,
                3: request.body.ukulele,
                4: request.body.drums,
                5: request.body.piano,
                6: request.body.keyboard,
                7: request.body.xylophone,
                8: request.body.percussion,
                9: request.body.banjo,
                10: request.body.violin,
                11: request.body.cello,
                12: request.body.trumpet,
                13: request.body.saxophone,
                14: request.body.vocal,
                15: request.body.other
            };
            let genreInfo = {
                1: request.body.jazz,
                2: request.body.blues,
                3: request.body.soul,
                4: request.body.reggae,
                5: request.body.indie,
                6: request.body.classical,
                7: request.body.country,
                8: request.body.hiphop,
                9: request.body.rb,
                10: request.body.latin,
                11: request.body.rock,
                12: request.body.metal,
                13: request.body.altrock,
                14: request.body.pop,
                15: request.body.other
            };
            let errorCallback = (error) => {
                console.log("Error:", error);
                request.flash('error', 'Error creating new post.');
                response.status(401).redirect('/post/new');
            }
            let successCallback = () => {
                request.flash('success', 'Successfully created post.');
                response.redirect('/post');
            }
            if (request.cookies.user_id) {
                Post.create(postInfo, instrumentInfo, genreInfo, currentUserId, errorCallback, successCallback);
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
            let successCallback = (result, result2, result3) => {
                let context = {
                    post: result.rows[0],
                    genres: result2.rows, // array of genre obj
                    instruments: result3.rows // array of instru obj
                };
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