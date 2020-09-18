const express = require("express");
const router = express.Router();

const restaurantsDetailsModel = require("../models/restaurantDetailsModel");

router.get("/:slug?", async (req, res, next) => {
    renderPage(res);
    const restaurantsDetailsData = await restaurantsDetailsModel.getBySlug();
        //console.log(req.params.id);


        return res.render("template", {
            locals: {
                title: "Restaurants Details",
                data: restaurantsDetailsData
            },
            partials: {
                partial: "partial-details"
            }
        });
    


});



module.exports = router;