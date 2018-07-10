let createControllers = db => {
    const Request = require("../models/request")(db);

    return {

        showRequest: (request, response) => {
            let post_id = request.params.id ;
            let errorCallback = (error) => {
                console.log("Error showing profile:", error);
                response.status(401);
            }
            let successCallback = (result) => {
                let requestInfo = result.rows;
                let context = {requests: requestInfo};
                response.render('request', context);
            }
            Request.show(post_id, errorCallback, successCallback);
        },

        acceptRequestQ: (request, response) => {
            let requestId = request.params.id;
            let context = {requestId: requestId};
            response.render('requestaccept', context);
        },

        acceptRequest: (request, response) => {
            let requestId = request.params.id;
            let currentUserId = request.cookies.user_id;
            let errorCallback = (error) => {
                console.log("Error accepting request:", error);
                response.status(401);
                request.flash('error', 'Error accepting request.');
                response.redirect('/user/' + currentUserId);
            }
            let successCallback = () => {
                response.redirect('/user/' + currentUserId);
            }
            Request.accept(requestId, errorCallback, successCallback);
        },

        declineRequestQ: (request, response) => {
            let requestId = request.params.id;
            let context = {requestId: requestId};
            response.render('requestdecline', context);
        },

        declineRequest: (request, response) => {
            let requestId = request.params.id;
            let currentUserId = request.cookies.user_id;
            let errorCallback = (error) => {
                console.log("Error declining request:", error);
                response.status(401);
                request.flash('error', 'Error declining request.');
                response.redirect('/user/' + currentUserId);
            }
            let successCallback = () => {
                response.redirect('/user/' + currentUserId);
            }
            Request.decline(requestId, errorCallback, successCallback);
        },

        deleteRequestQ: (request, response) => {
            let requestId = request.params.id;
            let context = {requestId: requestId};
            response.render('requestdelete', context);
        },

        deleteRequest: (request, response) => {
            let requestId = request.params.id;
            let currentUserId = request.cookies.user_id;
            let errorCallback = (error) => {
                console.log("Error deleting request:", error);
                response.status(401);
                request.flash('error', 'Error deleting request.');
                response.redirect('/user/' + currentUserId);
            }
            let successCallback = () => {
                response.redirect('/user/' + currentUserId);
            }
            Request.delete(requestId, errorCallback, successCallback);
        },

        contactRequest: (request, response) => {
            let posterId = request.params.id;
            let currentUserId = request.cookies.user_id;
            let errorCallback = (error) => {
                console.log("Error showing profile:", error);
                response.status(401);
                request.flash('error', 'Error showing profile.');
                response.redirect('/user/' + currentUserId);
            }
            let successCallback = (result) => {
                let contactInfo = result.rows;
                let context = {contactInfo: contactInfo};
                response.render('requestcontact', context);
            }
            Request.contact(posterId, errorCallback, successCallback);
        },

    }
}

module.exports = createControllers;