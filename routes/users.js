const express = require("express");
const router = express.Router();
const bcrpyt = require("bcryptjs");

const UsersModel = require("../models/usersModel");

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

router.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
})


router.post("/signup", (req, res) => {
    const {first_name, last_name, email, password} = req.body;
    
    // Salt and Hash our passwords
    const salt = bcrpyt.genSaltSync(10);
    const hash = bcrpyt.hashSync(password, salt);
    const userInstance = new UsersModel(null, first_name, last_name, email, hash);

    userInstance.signup().then(response => {
        if (response.id !== undefined) {
            res.redirect('/users/login');
        } else {
            res.redirect('/users/signup');
        }
        console.log("response is: ", response);
        res.sendStatus(200);
    })
    
    
  })
  
  router.post("/login", (req, res) => {
    const { email, password } = req.body;
    const userInstance = new UsersModel(null, null, null, email, password);
    userInstance.login().then(response => {
        req.session.is_logged_in = response.isValid;
        if (!!response.isValid) {
            const {first_name, last_name, user_id} = response;
            req.session.first_name = first_name;
            req.session.last_name = last_name;
            req.session.user_id = user_id;
            res.redirect("/")
        } else {
            res.sendStatus(401);
        }
    })
   
})



module.exports = router;