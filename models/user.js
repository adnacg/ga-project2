let createUserModel = db => {
    class User {

        constructor(id, name, email, passwordHash, bio) {
            this.id = id;
            this.name = name;
            this.email = email;
            this.passwordHash = passwordHash;
            this.bio = bio;
        }

        static create(userInfo, errorCallback, successCallback) {
            let queryText = 'INSERT INTO user (name, email, password_hash, bio) VALUES ($1, $2, $3, $4) RETURNING *';
            let values = [userInfo.name, userInfo.email, userInfo.passwordHash, userInfo.bio];
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