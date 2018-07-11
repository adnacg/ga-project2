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
                    if (result.rows.length > 0 ) {
                        let currentUser = result.rows[0];
                        if (currentUser.is_deleted == 'false') {
                            successCallback(currentUser.id);
                        } else {
                            errorCallback(error);
                        }
                    } else {
                        errorCallback(error);
                    }
                }
            })
        }

        static create(userInfo, instrumentInfo, genreInfo, errorCallback, successCallback) {
            let queryText = 'INSERT INTO users (name, email, password_hash, bio, is_deleted) VALUES ($1, $2, $3, $4, $5) RETURNING *';
            let values = [userInfo.name, userInfo.email, userInfo.passwordHash, userInfo.bio, userInfo.is_deleted];
            db.query(queryText, values, (error, result) => {
                if (error) {
                    errorCallback(error);
                } else {
                    if (result.rows.length > 0) {
                        let currentUserId = result.rows[0].id;
                        let toRun = (_callback) => {
                            for (var key in instrumentInfo) {
                                if (instrumentInfo[key]) {
                                    let queryText2 = 'INSERT INTO user_instrument (user_id, instrument_id) VALUES ($1, $2) RETURNING *';
                                    let values2 = [currentUserId, key];
                                    db.query(queryText2, values2, (error2, result2) => {if (error2) {errorCallback(error2);}});
                                }
                            };
                            for (var keyGenre in genreInfo) {
                                if (genreInfo[keyGenre]) {
                                    let queryText3 = 'INSERT INTO user_genre (user_id, genre_id) VALUES ($1, $2) RETURNING *';
                                    let values3 = [currentUserId, keyGenre];
                                    db.query(queryText3, values3, (error3, result3) => {if (error3) {errorCallback(error3);}});
                                }
                            };
                            _callback();
                        }
                        toRun(() => successCallback(result.rows[0].id));
                    } else {
                        errorCallback(error);
                    }
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
                        let queryText2 = "SELECT * FROM post INNER JOIN user_post ON post.id = user_post.post_id WHERE user_id = $1 AND is_deleted = 'false'";
                        db.query(queryText2, values, (error2, result2) => {
                            if (error2) {
                                errorCallback(error2);
                            } else {
                                let queryText3 = "SELECT user_post.user_id, users.name, post.location, request.status, request.id FROM users INNER JOIN user_post ON users.id = user_post.user_id INNER JOIN request ON request.post_id = user_post.post_id INNER JOIN post ON post.id = user_post.post_id WHERE request.requester_id = $1 AND request.status != 'declined_deleted'";
                                db.query(queryText3, values, (error3, result3) => {
                                    if (error3) {
                                        errorCallback(error3);
                                    } else {
                                        let queryText4 = "SELECT genre.name FROM genre INNER JOIN user_genre ON user_genre.genre_id = genre.id INNER JOIN users ON user_genre.user_id = users.id WHERE users.id = $1";
                                        db.query(queryText4, values, (error4, result4) => {
                                            if (error4) {
                                                errorCallback(error4);
                                            } else {
                                                let queryText5 = "SELECT instrument.name FROM instrument INNER JOIN user_instrument ON user_instrument.instrument_id = instrument.id INNER JOIN users ON user_instrument.user_id = users.id WHERE users.id = $1";
                                                db.query(queryText5, values, (error5, result5) => {
                                                    if (error5) {
                                                        errorCallback(error5);
                                                    } else {
                                                        successCallback(result, result2, result3, result4, result5);
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                }
            });
        }

        static updateform(userId, errorCallback, successCallback) {
            let queryText = 'SELECT * FROM users WHERE id = $1';
            let values = [userId];
            db.query(queryText, values, (error, result) => {
                if (error) {
                    errorCallback(error);
                } else {
                    let userInfo = {
                        name: result.rows[0].name,
                        email: result.rows[0].email,
                        bio: result.rows[0].bio
                    }
                    successCallback(userInfo);
                }
            });
        }

        static update(userId, newDetails, errorCallback, successCallback) {
            let queryText = 'UPDATE users SET name = $1, email = $2, bio = $3 WHERE id = $4 RETURNING *';
            let values = [newDetails.name, newDetails.email, newDetails.bio, userId];
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

        static delete(userId, errorCallback, successCallback) {
            let queryText = 'UPDATE users SET is_deleted = $1 WHERE id = $2';
            let values = ['true', userId];
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
            });
        }
    }

    return User;
}

module.exports = createUserModel;