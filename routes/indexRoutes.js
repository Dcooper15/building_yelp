const express = require("express");
const router = express.Router();

const restaurantsModel = require("../models/indexModel");

const renderPage = async res => {
    const restaurantsData = await restaurantsModel.getAll();

    return res.render("template", {
        locals: {
            title: "Restaurants",
            data: restaurantsData
        },
        partials: {
            partial: "partial-index"
        }
    });
}

router.get("/", async (req, res, next) => {
    renderPage(res);
});






module.exports = router;