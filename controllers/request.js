let createControllers = db => {
    const Request = require("../models/request")(db);

    return {

        showRequest: (request, response) => {
            response.render('request');
        },

        acceptRequestQ: (request, response) => {
            response.render('requestaccept');
        },

        acceptRequest: (request, response) => {
            response.send('accepted');
        },

        declineRequestQ: (request, response) => {
            response.render('requestdecline');
        },

        declineRequest: (request, response) => {
            response.send('declined');
        },





    }
}

module.exports = createControllers;