"use strict";
const db = require("./conn");
const bcrypt = require("bcryptjs");


class UsersModel {
    constructor(id, first_name, last_name, email, password) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }
    // Private (instance) Method to Check Password Validity
    async checkPassword(hashedPassword) {
        // Returns true or false
        return bcrypt.compareSync(this.password, hashedPassword);
    }


    //Instance Method. Not passing arguments
    async signup() {
        try {
            const response = await db.one(`INSERT INTO reviewers (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING id;`, [this.first_name, this.last_name, this.email, this.password]);
            console.log("User was created with ID:", response.id);
            return response;
        } catch(error) {
            console.error("ERROR: ", error.message);
            return error.message;
        }
    }

    //Instance Method. Not passing arguments
    async login() {
        try {
            const response = await db.one(`SELECT id, first_name, last_name, email, password FROM reviewers WHERE email = $1;` [this.email]);
            const isValid = await this.checkPassword(response.password);
            if (!!isValid) {
                // (!!IsValid) = if (isValid === absolutely, completely, 100% TRUE)
                const { first_name, last_name, id } = response;
                return { isValid, first_name, last_name, user_id: id}
            } else {
                return { isValid }
            }
        } catch (error) {
            console.error("ERROR:", error.message);
            return error.message;
        }
    }
}


module.exports = UsersModel;