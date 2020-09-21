const db = require("./conn");


class restaurantsList {
    constructor (name, location, reviews, slug) {
        this.name = name;
        this.location = location;
        this.review = reviews;
        this.slug = slug;
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

    static async getOneRestaurant(slug) {
        try {
            const response = await db.one(`SELECT * FROM restaurants WHERE slug = $1;`, [slug]);
            console.log(response);
            
            return response;
        } catch (error) {
            return error.message;
        }
    }


}






module.exports = restaurantsList;