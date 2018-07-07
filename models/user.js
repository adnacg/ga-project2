let createUserModel = db => {
    class User {

        constructor(id, name, email, passwordHash, bio, is_deleted) {
            this.id = id;
            this.name = name;
            this.email = email;
            this.passwordHash = passwordHash;
            this.bio = bio;
            this.is_deleted = is_deleted;
        }

        static login(enteredEmail, enteredPasswordHash, errorCallback, successCallback) {
            let queryText = 'SELECT * FROM users WHERE email = $1 AND password_hash = $2';
            let values = [enteredEmail, enteredPasswordHash];
            db.query(queryText, values, (error, result) => {
                if (error) {
                    errorCallback(error);
                } else {
                    successCallback(result.rows[0].id);
                }
            })
        }

        static create(userInfo, errorCallback, successCallback) {
            let queryText = 'INSERT INTO users (name, email, password_hash, bio, is_deleted) VALUES ($1, $2, $3, $4, $5) RETURNING *';
            let values = [userInfo.name, userInfo.email, userInfo.passwordHash, userInfo.bio, userInfo.is_deleted];
            db.query(queryText, values, (error, result) => {
                if (error) {
                    errorCallback(error);
                } else {
                    successCallback(result.rows[0].id);
                }
            })
        }

        static read(currentUserId, errorCallback, successCallback) {
            let queryString = 'SELECT * FROM users WHERE id = $1;'
            let values = [currentUserId];
            db.query(queryString, values, (error, result) => {
                if (error) {
                    errorCallback(error);
                } else {
                    if (result.rows.length > 0) {
                        let queryText2 = 'SELECT * FROM post INNER JOIN user_post ON post.id = user_post.post_id WHERE user_id = $1';
                        let values2 = [currentUserId];
                        db.query(queryText2, values2, (error2, result2) => {
                            if (error2) {
                                errorCallback(error2);
                            } else {
                                let queryText3 = 'SELECT post.location, users.name, request.status FROM request INNER JOIN post ON request.post_id = post.id INNER JOIN users ON request.poster_id = users.id WHERE request.requester_id = $1';
                                let values3 = [currentUserId];
                                db.query(queryText3, values3, (error3, result3) => {
                                    if (error3) {
                                        errorCallback(error3);
                                    } else {
                                        successCallback(result, result2, result3);
                                    }
                                });
                            }
                        });
                    }
                }
            });
        }

        static update(userInfo, errorCallback, successCallback) {
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

        static delete(user_id, errorCallback, successCallback) {
            let queryText = 'UPDATE user SET is_deleted = $1 WHERE id = $2';
            let values = ['true', user_id];
            db.query(queryText, values, (error, result) => {
                if (error) {
                    errorCallback(error);
                } else {
                    successCallback();
                }
            });
        }





    }

    return User;
}

module.exports = createUserModel;