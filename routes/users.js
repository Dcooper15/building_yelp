const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.redirect("/users/signup");
  });
  
  router.get("/login", (req, res) => {
    res.render("template", {
      locals: {
        title: "Login Page",
      },
      partials: {
        partial: "partial-user-login",
      },
    });
  });
  
  router.get("/signup", (req, res) => {
    res.render("template", {
      locals: {
        title: "Sign Up Page",
      },
      partials: {
        partial: "partial-signup",
      },
    });
  });

  router.post("/signup", (req, res) => {
    const {first_name, last_name, email, password} = req.body;
    console.log("form submission is; ", req.body)
    res.sendStatus(200);
  })
  
  router.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log("Login Form Submission:", req.body);
    res.sendStatus(200);
})



module.exports = router;