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

        static show(post_id, errorCallback, successCallback) {
            let queryText = 'SELECT users.name, post.location, request.id, request.post_id, request.requester_id FROM request INNER JOIN post ON request.post_id = post.id INNER JOIN users ON request.requester_id = users.id WHERE request.post_id = $1';
            let values = [post_id];
            db.query(queryText, values, (error, result) => {
                if (error) {
                    errorCallback(error);
                } else {
                    successCallback(result);
                }
            })
        }

        static accept(requestId, errorCallback, successCallback) {
            let queryText = 'UPDATE request SET status = $1 WHERE id = $2';
            let values = ['Accepted', requestId];
            db.query(queryText, values, (error, result) => {
                if (error) {
                    errorCallback(error);
                } else {
                    successCallback();
                }
            })
        }

        static decline(requestId, errorCallback, successCallback) {
            let queryText = 'UPDATE request SET status = $1 WHERE id = $2';
            let values = ['Declined', requestId];
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