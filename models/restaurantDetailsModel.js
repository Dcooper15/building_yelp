const db = require("./conn");

class restaurantsDetailsList {
    constructor (name, location, reviews) {
        this.name = name;
        this.location = location;
        this.reviews = reviews;
    }

    static async getBySlug(slug) {
    try {
       const response = await db.any(`SELECT * FROM restaurants;`);
       console.log(response);
       return response;
    } catch (error) {
        console.error("error:", error);
        return error;
    }
    }
}


module.exports = restaurantsDetailsList;

//const response = await db.any(`SELECT * FROM restaurants WHERE slug = $1;`, ['slug']);