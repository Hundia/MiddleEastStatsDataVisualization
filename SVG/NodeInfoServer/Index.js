var express = require("express");
var app = express();

var serverInfoApi = require('./DataApi/countryInfoApi.js');



app.use(express.static('../D3Htmls'));
/* serves main page */
app.get("/", function(req, res) {
    res.sendFile('../D3Htmls/Index.html', { root: '../D3Htmls' });
});


//  Example HTTP Request - http://localhost:5000/getCountryHiTechInfo?country=ISR&year=2014
app.get('/getCountryHiTechInfo', function (req, res) {
    // console.log(req);
    var country = req.query.country;
    var year = req.query.year;

    console.log('Got request for Hi Tech info for country: ' + country + ' in year: ' + year);
    var queryRes = serverInfoApi.getCountryHiTechInfoByYear('TX.VAL.TECH.CD', year, country);
    var queryResStr = JSON.stringify(queryRes);
    console.log("Res: " + queryResStr)
    res.end(queryResStr);

})

// /* serves all the static files */
// app.get(/^(.+)$/, function(req, res){
//     console.log('static file request : ' + req.params);
//     res.sendfile( '../' + req.params[0]);
// });

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});