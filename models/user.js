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
    }

    return User;
}

module.exports = createUserModel;