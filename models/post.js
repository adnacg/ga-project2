let createPostModel = db => {
    class Post {

        constructor(id, location, post_date, pax, availability, skill, message, status, is_deleted) {
            this.id = id;
            this.location = location;
            this.timestamp = timestamp;
            this.pax = pax;
            this.availability = availability;
            this.skill = skill;
            this.message = message;
            this.status = status;
            this.is_deleted = is_deleted;
        }

        static create(postInfo, instrumentInfo, genreInfo, currentUserId, errorCallback, successCallback) {
            let queryText = 'INSERT INTO post (location, pax, availability, skill, message, status, is_deleted) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
            let values = [postInfo.location, postInfo.pax, postInfo.availability, postInfo.skill, postInfo.message, postInfo.status, postInfo.is_deleted];
            db.query(queryText, values, (error, result) => {
                if (error) {
                    errorCallback(error);
                } else {
                    if (result.rows.length > 0) {
                        let currentPostId = result.rows[0].id;
                        let queryText2 = 'INSERT INTO user_post (user_id, post_id) VALUES ($1, $2) RETURNING *';
                        let values2 = [currentUserId, currentPostId];
                        db.query(queryText2, values2, (error2, result2) => {
                            if (error2) {
                                errorCallback(error2);
                            } else {
                                if (result2.rows.length > 0) {
                                    let toRun = (_callback) => {
                                        for (var key in instrumentInfo) {
                                            if (instrumentInfo[key]) {
                                                let queryText3 = 'INSERT INTO post_instrument (post_id, instrument_id) VALUES ($1, $2) RETURNING *';
                                                let values3 = [currentPostId, key];
                                                db.query(queryText3, values3, (error3, result3) => {if (error3) {errorCallback(error3);}});
                                            }
                                        };
                                        for (var keyGenre in genreInfo) {
                                            if (genreInfo[keyGenre]) {
                                                let queryText4 = 'INSERT INTO post_genre (post_id, genre_id) VALUES ($1, $2) RETURNING *';
                                                let values4 = [currentPostId, keyGenre];
                                                db.query(queryText4, values4, (error4, result4) => {if (error4) {errorCallback(error4);}});
                                            }
                                        };
                                        _callback();
                                    }
                                    toRun(() => successCallback());
                                } else {
                                    errorCallback("Error creating post!");
                                };
                            };
                        });
                    };
                };
            });
        }

        static read(errorCallback, successCallback) {
            let queryText = "SELECT post.id, post.location, users.name FROM post INNER JOIN user_post ON user_post.post_id = post.id INNER JOIN users ON user_post.user_id = users.id WHERE post.is_deleted = 'false' ORDER BY post.post_time DESC";
            db.query(queryText, (error, result) => {
                if (error) {
                    errorCallback(error);
                } else {
                    successCallback(result);
                }
            });
        }

        static readmore(postId, errorCallback, successCallback) {
            let queryText = 'SELECT post.id, post.location, post.pax, post.skill, post.message, post.post_time, users.name, users.bio FROM post INNER JOIN user_post ON user_post.post_id = post.id INNER JOIN users ON user_post.user_id = users.id WHERE post.id = $1';
            let values = [postId];
            db.query(queryText, values, (error, result) => {
                if (error) {
                    errorCallback(error);
                } else {
                    if (result.rows.length > 0) {
                        let queryText2 = 'SELECT genre.name FROM genre INNER JOIN post_genre ON post_genre.genre_id = genre.id INNER JOIN post ON post_genre.post_id = post.id WHERE post.id = $1';
                        db.query(queryText2, values, (error2, result2) => {
                            let queryText3 = 'SELECT instrument.name FROM instrument INNER JOIN post_instrument ON post_instrument.instrument_id = instrument.id INNER JOIN post ON post_instrument.post_id = post.id WHERE post.id = $1';
                            db.query(queryText3, values, (error3, result3) => {
                                successCallback(result, result2, result3);
                            });
                        });
                    }
                }
            });
        }

        static request(postReqInfo, errorCallback, successCallback) {
            if (postReqInfo.requester_id = postReqInfo.postId) {
                errorCallback("Why are you joining your own jam?");
            } else {
                let queryText = 'INSERT INTO request (post_id, requester_id, status) VALUES ($1, $2, $3) RETURNING *';
                let values = [postReqInfo.postId, postReqInfo.requester_id, postReqInfo.status];
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

        static updateform(postId, errorCallback, successCallback) {
            let queryText = 'SELECT * FROM post WHERE id = $1';
            let values = [postId];
            db.query(queryText, values, (error, result) => {
                if (error) {
                    errorCallback(error);
                } else {
                    if (result.rows.length > 0) {
                        successCallback(result.rows[0]);
                    } else {
                        errorCallback(error);
                    }
                }
            });
        }

        static update(postId, newDetails, errorCallback, successCallback) {
            let queryText = 'UPDATE post SET location = $1, pax = $2, availability = $3, skill = $4, message = $5 WHERE id = $6 RETURNING *';
            let values = [newDetails.location, newDetails.pax, newDetails.availability, newDetails.skill, newDetails.message, postId];
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

        static delete(postId, errorCallback, successCallback) {
            let queryText = 'UPDATE post SET is_deleted = $1 WHERE id = $2 RETURNING *';
            let values = ['true', postId];
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

    return Post;
}

module.exports = createPostModel;