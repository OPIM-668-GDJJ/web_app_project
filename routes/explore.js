var fetch = require('node-fetch');
var express = require('express');
var router = express.Router();

const API_KEY = process.env.EDAMAM_API_KEY;
const APP_ID = process.env.EDAMAM_APP_ID;


router.get('/', function (req, res, next) {
    var requestUrl = `https://api.edamam.com/search?q=breakfast&app_id=${APP_ID}&app_key=${API_KEY}&mealType=breakfast` // using string interpolation here, but you could alternatively do concatenation with + operators
    console.log("REQUEST URL", requestUrl)

    fetch(requestUrl)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log("API DATA SUCCESS", Object.keys(data))            
            req.flash("success", "API Data Request Success!")
            res.render("explore", { hits: data.hits });
        })
        .catch(function (err) {
            console.log("API DATA ERROR:", err)
            req.flash("danger", "OOPS, Please check your inputs and try again.")
            res.redirect("error")
        })
});

module.exports = router;