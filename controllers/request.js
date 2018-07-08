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
                console.log("Error showing profile:", error);
                response.status(401);
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
                console.log("Error showing profile:", error);
                response.status(401);
            }
            let successCallback = () => {
                response.redirect('/user/' + currentUserId);
            }
            Request.decline(requestId, errorCallback, successCallback);
        },
    }
}

module.exports = createControllers;