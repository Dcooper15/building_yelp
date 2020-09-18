const db = require("./conn");

class restaurantsList {
    constructor (name, location, reviews) {
        this.name = name;
        this.location = location;
        this.review = review;
    }

    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM restaurants;`);
            //console.log(response);
            
            return response;
        } catch (error) {
            return error.message;
        }
    }


}


module.exports = restaurantsList;