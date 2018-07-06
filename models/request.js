let createRequestModel = db => {
    class Request {

        constructor(id, name, email, passwordHash, bio, is_deleted) {
            this.id = id;
            this.name = name;
            this.email = email;
            this.passwordHash = passwordHash;
            this.bio = bio;
            this.is_deleted = is_deleted;
        }

        static accept(errorCallback, successCallback) {
            let queryText = '';
            let values = [];
            db.query(queryText, values, (error, result) => {
                if (error) {
                    errorCallback(error);
                } else {
                    successCallback();
                }
            })
        }

        static decline(errorCallback, successCallback) {
            let queryText = '';
            let values = [];
            db.query(queryText, values, (error, result) => {
                if (error) {
                    errorCallback(error);
                } else {
                    successCallback();
                }
            })
        }







    }

    return Request;
}

module.exports = createRequestModel;