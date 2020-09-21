const express = require("express");
const router = express.Router();
const restaurantsDetailModel = require("../models/indexModel");



const renderPage = async res => {
    const restaurantsDetailData = await restaurantsDetailModel.getOneRestaurant(req.params.slug);

    return res.render("template", {
        locals: {
            title: "Restaurant Details",
            restaurantData: restaurantsDetailData
        },
        partials: {
            partial: "partial-details"
        }
    });


}

router.get("/:slug?", async (req, res) => {
    renderPage(res);
});






module.exports = router;