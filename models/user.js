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

    static async login(
      enteredEmail,
      enteredPasswordHash,
      errorCallback,
      successCallback
    ) {
      let queryText =
        "SELECT * FROM users WHERE email = $1 AND password_hash = $2";
      let values = [enteredEmail, enteredPasswordHash];
      try {
        const { rows } = await db.query(queryText, values);
        let currentUser = rows[0];
        if (currentUser.is_deleted == "false") {
          successCallback(currentUser.id);
        } else {
          errorCallback("No such user");
        }
      } catch (error) {
        errorCallback(error);
      }
    }

    static async create(
      userInfo,
      instrumentInfo,
      genreInfo,
      errorCallback,
      successCallback
    ) {
      let queryText =
        "INSERT INTO users (name, email, password_hash, bio, is_deleted) VALUES ($1, $2, $3, $4, $5) RETURNING *";
      let values = [
        userInfo.name,
        userInfo.email,
        userInfo.passwordHash,
        userInfo.bio,
        userInfo.is_deleted
      ];
      try {
        const { rows } = await db.query(queryText, values);
        const currentUserId = rows[0].id;
        for (var key in instrumentInfo) {
          if (instrumentInfo[key]) {
            queryText =
              "INSERT INTO user_instrument (user_id, instrument_id) VALUES ($1, $2) RETURNING *";
            values = [currentUserId, key];
            await db.query(queryText, values);
          }
        }
        for (var keyGenre in genreInfo) {
          if (genreInfo[keyGenre]) {
            queryText =
              "INSERT INTO user_genre (user_id, genre_id) VALUES ($1, $2) RETURNING *";
            values = [currentUserId, keyGenre];
            await db.query(queryText, values);
          }
        }
        successCallback(currentUserId);
      } catch (error) {
        errorCallback(error);
      }
    }

    static async read(currentUserId, errorCallback, successCallback) {
      let queryText = "SELECT * FROM users WHERE id = $1;";
      let values = [currentUserId];
      try {
        const result = await db.query(queryText, values);
        queryText =
          "SELECT * FROM post INNER JOIN user_post ON post.id = user_post.post_id WHERE user_id = $1 AND is_deleted = 'false'";
        const result2 = await db.query(queryText, values);
        queryText =
          "SELECT user_post.user_id, users.name, post.location, request.status, request.id FROM users INNER JOIN user_post ON users.id = user_post.user_id INNER JOIN request ON request.post_id = user_post.post_id INNER JOIN post ON post.id = user_post.post_id WHERE request.requester_id = $1 AND request.status != 'declined_deleted'";
        const result3 = await db.query(queryText, values);
        queryText =
          "SELECT genre.name FROM genre INNER JOIN user_genre ON user_genre.genre_id = genre.id INNER JOIN users ON user_genre.user_id = users.id WHERE users.id = $1";
        const result4 = await db.query(queryText, values);
        queryText =
          "SELECT instrument.name FROM instrument INNER JOIN user_instrument ON user_instrument.instrument_id = instrument.id INNER JOIN users ON user_instrument.user_id = users.id WHERE users.id = $1";
        const result5 = await db.query(queryText, values);
        successCallback(result, result2, result3, result4, result5);
      } catch (error) {
        errorCallback(error);
      }
    }

    static async updateform(userId, errorCallback, successCallback) {
      let queryText = "SELECT * FROM users WHERE id = $1";
      let values = [userId];
      try {
        const { rows } = await db.query(queryText, values);
        const userInfo = {
          name: rows[0].name,
          email: rows[0].email,
          bio: rows[0].bio
        };
        successCallback(userInfo);
      } catch (error) {
        errorCallback(error);
      }
    }

    static async update(userId, newDetails, errorCallback, successCallback) {
      let queryText =
        "UPDATE users SET name = $1, email = $2, bio = $3 WHERE id = $4 RETURNING *";
      let values = [newDetails.name, newDetails.email, newDetails.bio, userId];
      try {
        await db.query(queryText, values);
        successCallback();
      } catch (error) {
        errorCallback(error);
      }
    }

    static async delete(userId, errorCallback, successCallback) {
      let queryText = "UPDATE users SET is_deleted = $1 WHERE id = $2";
      let values = ["true", userId];
      try {
        await db.query(queryText, values);
        successCallback();
      } catch (error) {
        errorCallback(error);
      }
    }
  }

  return User;
};

module.exports = createUserModel;
