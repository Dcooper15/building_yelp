const host = "lallah.db.elephantsql.com";
const database = "cpgdfzot";
const user = "cpgdfzot";
const password = "gHYHc6euJdYcPXcEm19k3KKPCVpBrmby";

// can use this for almost all pgp's
const pgp = require('pg-promise') ({
    query: function (event) {
        console.log("QUERY:", event.query);
    }
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password,
}

const db = pgp(options);
module.exports = db;