const http = require("http");
const path = require("path");
const hostname = "127.0.0.1";
const port = 3000;

const express = require('express');
const es6Renderer = require("express-es6-template-engine");
const app = express();


app.engine("html", es6Renderer);
app.set("views", "./views");
app.set("view engine", "html");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server Running at http://${hostname}:${port}`)
});

const indexController = require("./routes/indexRoutes");
const restaurantController = require("./routes/restaurantDetails");

app.use("/", indexController);
app.use("/restaurantDetails", restaurantController);