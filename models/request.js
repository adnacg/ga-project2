let createRequestModel = db => {
  class Request {
    constructor(id, requester_id, post_id, status) {
      this.id = id;
      this.requester_id = requester_id;
      this.post_id = post_id;
      this.status = status;
    }

    static async show(post_id, errorCallback, successCallback) {
      let queryText =
        "SELECT users.name, post.location, request.id, request.post_id, request.requester_id FROM request INNER JOIN post ON request.post_id = post.id INNER JOIN users ON request.requester_id = users.id WHERE request.post_id = $1 AND request.status != 'declined'";
      let values = [post_id];
      try {
        const result = await db.query(queryText, values);
        successCallback(result);
      } catch (error) {
        errorCallback(error);
      }
    }

    static async accept(requestId, errorCallback, successCallback) {
      let queryText =
        "UPDATE request SET status = $1 WHERE id = $2 RETURNING *";
      let values = ["accepted", requestId];
      try {
        await db.query(queryText, values);
        successCallback();
      } catch (error) {
        errorCallback(error);
      }
    }

    static async decline(requestId, errorCallback, successCallback) {
      let queryText =
        "UPDATE request SET status = $1 WHERE id = $2 RETURNING *";
      let values = ["declined", requestId];
      try {
        await db.query(queryText, values);
        successCallback();
      } catch (error) {
        errorCallback(error);
      }
    }

    static async delete(requestId, errorCallback, successCallback) {
      let queryText =
        "UPDATE request SET status = $1 WHERE id = $2 RETURNING *";
      let values = ["declined_deleted", requestId];
      try {
        await db.query(queryText, values);
        successCallback();
      } catch (error) {
        errorCallback(error);
      }
    }

    static async contact(posterId, errorCallback, successCallback) {
      let queryText = "SELECT name, email, bio FROM users WHERE id = $1";
      let values = [posterId];
      try {
        const result = await db.query(queryText, values);
        successCallback(result);
      } catch (error) {
        errorCallback(error);
      }
    }
  }

  return Request;
};

module.exports = createRequestModel;
