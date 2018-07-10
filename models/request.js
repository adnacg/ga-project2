let createRequestModel = db => {
    class Request {

        constructor(id, requester_id, post_id, status) {
            this.id = id;
            this.requester_id = requester_id;
            this.post_id = post_id;
            this.status = status;
        }

        static show(post_id, errorCallback, successCallback) {
            let queryText = "SELECT users.name, post.location, request.id, request.post_id, request.requester_id FROM request INNER JOIN post ON request.post_id = post.id INNER JOIN users ON request.requester_id = users.id WHERE request.post_id = $1 AND request.status != 'declined'";
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
            let queryText = 'UPDATE request SET status = $1 WHERE id = $2 RETURNING *';
            let values = ['accepted', requestId];
            db.query(queryText, values, (error, result) => {
                if (error) {
                    errorCallback(error);
                } else {
                    if (result.rows.length > 0) {
                        successCallback();
                    } else {
                        errorCallback(error);
                    }
                }
            })
        }

        static decline(requestId, errorCallback, successCallback) {
            let queryText = 'UPDATE request SET status = $1 WHERE id = $2 RETURNING *';
            let values = ['declined', requestId];
            db.query(queryText, values, (error, result) => {
                if (error) {
                    errorCallback(error);
                } else {
                    if (result.rows.length > 0) {
                        successCallback();
                    } else {
                        errorCallback(error);
                    }
                }
            })
        }

        static delete(requestId, errorCallback, successCallback) {
            let queryText = 'UPDATE request SET status = $1 WHERE id = $2 RETURNING *';
            let values = ['declined_deleted', requestId];
            db.query(queryText, values, (error, result) => {
                if (error) {
                    errorCallback(error);
                } else {
                    if (result.rows.length > 0) {
                        successCallback();
                    } else {
                        errorCallback(error);
                    }
                }
            })
        }

        static contact(posterId, errorCallback, successCallback) {
            let queryText = 'SELECT name, email, bio FROM users WHERE id = $1';
            let values = [posterId];
            db.query(queryText, values, (error, result) => {
                if (error) {
                    errorCallback(error);
                } else {
                    if (result.rows.length > 0) {
                        successCallback(result);
                    } else {
                        errorCallback(error);
                    }
                }
            })
        }

    }

    return Request;
}

module.exports = createRequestModel;