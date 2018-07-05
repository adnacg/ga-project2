let createPostModel = db => {
    class Post {

        constructor(id, location, post_date, pax, availability, skill, instrument, genre, message, status, is_deleted) {
            this.id = id;
            this.location = location;
            this.post_date = post_date;
            this.pax = pax;
            this.availability = availability;
            this.skill = skill;
            this.instrument = instrument;
            this.genre = genre;
            this.message = message;
            this.status = status;
            this.is_deleted = is_deleted;
        }

        static create(postInfo, currentUserId, errorCallback, successCallback) {
            let queryText = 'INSERT INTO post (location, pax, availability, skill, message, status, is_deleted) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
            let values = [postInfo.location, postInfo.pax, postInfo.availability, postInfo.skill, postInfo.message, postInfo.status, postInfo.is_deleted];
            db.query(queryText, values, (error, result) => {
                if (error) {
                    errorCallback(error);
                } else {
                    if (result.rows.length > 0) {
                        let currentPostId = result.rows[0].id;
                        let currentPostInstrument = postInfo.instrument;
                        let currentPostGenre = postInfo.genre;
                        let queryText2 = 'INSERT INTO user_post (user_id, post_id) VALUES ($1, $2) RETURNING *';
                        let values2 = [currentUserId, currentPostId];
                        db.query(queryText2, values2, (error2, result2) => {
                            if (error2) {
                                errorCallback(error2);
                            } else {
                                if (result2.rows.length > 0) {
                                    let queryText3 = 'INSERT INTO post_instrument (post_id, instrument_id) VALUES ($1, $2) RETURNING *';
                                    let values3 = [currentPostId, currentPostInstrument];
                                    db.query(queryText3, values3, (error3, result3) => {
                                        if (error3) {
                                            errorCallback(error3);
                                        } else {
                                            if (result3.rows.length > 0) {
                                                let queryText4 = 'INSERT INTO post_genre (post_id, genre_id) VALUES ($1, $2) RETURNING *';
                                                let values4 = [currentPostId, currentPostGenre];
                                                db.query(queryText4, values4, (error4, result4) => {
                                                    if (error4) {
                                                        errorCallback(error4);
                                                    } else {
                                                        successCallback();
                                                    }
                                                });
                                            } else {
                                                errorCallback("Error creating post!");
                                            }
                                        }
                                    });
                                } else {
                                    errorCallback("Error creating post!");
                                }
                            };
                        });
                    } else {
                        errorCallback("Error creating post!");
                    };
                };
            });
        }




    }

    return Post;
}

module.exports = createPostModel;