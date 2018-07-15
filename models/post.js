let createPostModel = db => {
  class Post {
    constructor(
      id,
      location,
      post_date,
      pax,
      availability,
      skill,
      message,
      status,
      is_deleted
    ) {
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

    static async create(
      postInfo,
      instrumentInfo,
      genreInfo,
      currentUserId,
      errorCallback,
      successCallback
    ) {
      let queryText =
        "INSERT INTO post (location, pax, availability, skill, message, status, is_deleted) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
      let values = [
        postInfo.location,
        postInfo.pax,
        postInfo.availability,
        postInfo.skill,
        postInfo.message,
        postInfo.status,
        postInfo.is_deleted
      ];
      try {
        const { rows } = await db.query(queryText, values);
        let currentPostId = rows[0].id;
        queryText =
          "INSERT INTO user_post (user_id, post_id) VALUES ($1, $2) RETURNING *";
        values = [currentUserId, currentPostId];
        await db.query(queryText, values);

        for (var key in instrumentInfo) {
          if (instrumentInfo[key]) {
            queryText =
              "INSERT INTO post_instrument (post_id, instrument_id) VALUES ($1, $2) RETURNING *";
            values = [currentPostId, key];
            await db.query(queryText, values);
          }
        }
        for (var keyGenre in genreInfo) {
          if (genreInfo[keyGenre]) {
            queryText =
              "INSERT INTO post_genre (post_id, genre_id) VALUES ($1, $2) RETURNING *";
            values = [currentPostId, keyGenre];
            await db.query(queryText, values);
          }
        }
        successCallback();
      } catch (error) {
        errorCallback(error);
      }
    }

    static async read(errorCallback, successCallback) {
      let queryText =
        "SELECT post.id, post.location, users.name FROM post INNER JOIN user_post ON user_post.post_id = post.id INNER JOIN users ON user_post.user_id = users.id WHERE post.is_deleted = 'false' ORDER BY post.post_time DESC";
      try {
        const result = await db.query(queryText);
        queryText =
          "SELECT post_genre.post_id, genre.name FROM genre INNER JOIN post_genre ON post_genre.genre_id = genre.id";
        const result2 = await db.query(queryText);
        queryText =
          "SELECT post_instrument.post_id, instrument.name FROM instrument INNER JOIN post_instrument ON post_instrument.instrument_id = instrument.id";
        const result3 = await db.query(queryText);
        successCallback(result, result2, result3);
      } catch (error) {
        errorCallback(error);
      }
    }

    static async readmore(postId, errorCallback, successCallback) {
      let queryText =
        "SELECT post.id, post.location, post.pax, post.skill, post.message, post.post_time, users.name, users.bio FROM post INNER JOIN user_post ON user_post.post_id = post.id INNER JOIN users ON user_post.user_id = users.id WHERE post.id = $1";
      let values = [postId];
      try {
        const result = await db.query(queryText, values);
        queryText =
          "SELECT genre.name FROM genre INNER JOIN post_genre ON post_genre.genre_id = genre.id INNER JOIN post ON post_genre.post_id = post.id WHERE post.id = $1";
        const result2 = await db.query(queryText, values);
        queryText =
          "SELECT instrument.name FROM instrument INNER JOIN post_instrument ON post_instrument.instrument_id = instrument.id INNER JOIN post ON post_instrument.post_id = post.id WHERE post.id = $1";
        const result3 = await db.query(queryText, values);
        successCallback(result, result2, result3);
      } catch (error) {
        errorCallback(error);
      }
    }

    static async request(postReqInfo, errorCallback, successCallback) {
      let queryText =
        "SELECT user_post.user_id FROM user_post WHERE user_post.post_id = $1";
      let values = [postReqInfo.postId];
      try {
        const { rows } = await db.query(queryText, values);
        if (rows[0].user_id === postReqInfo.requester_id) {
          errorCallback("Why are you joining your own jam?");
        } else {
          queryText =
            "INSERT INTO request (post_id, requester_id, status) VALUES ($1, $2, $3) RETURNING *";
          values = [
            postReqInfo.postId,
            postReqInfo.requester_id,
            postReqInfo.status
          ];
          await db.query(queryText, values);
          successCallback();
        }
      } catch (error) {
        errorCallback(error);
      }
    }

    static async updateform(postId, errorCallback, successCallback) {
      let queryText = "SELECT * FROM post WHERE id = $1";
      let values = [postId];
      try {
        const { rows } = await db.query(queryText, values);
        successCallback(rows[0]);
      } catch (error) {
        errorCallback(error);
      }
    }

    static async update(postId, newDetails, errorCallback, successCallback) {
      let queryText =
        "UPDATE post SET location = $1, pax = $2, availability = $3, skill = $4, message = $5 WHERE id = $6 RETURNING *";
      let values = [
        newDetails.location,
        newDetails.pax,
        newDetails.availability,
        newDetails.skill,
        newDetails.message,
        postId
      ];
      try {
        await db.query(queryText, values);
        successCallback();
      } catch (error) {
        errorCallback(error);
      }
    }

    static async delete(postId, errorCallback, successCallback) {
      let queryText =
        "UPDATE post SET is_deleted = $1 WHERE id = $2 RETURNING *";
      let values = ["true", postId];
      try {
        await db.query(queryText, values);
        successCallback();
      } catch (error) {
        errorCallback(error);
      }
    }
  }

  return Post;
};

module.exports = createPostModel;
