var express = require("express");
var app = express();

var serverInfoApi = require('./DataApi/countryInfoApi.js');




app.use(express.static('../D3Htmls'));
/* serves main page */
app.get("/", function(req, res) {
    res.sendFile('../D3Htmls/Index.html', { root: '../D3Htmls' });
});


// var data = [ { label: "Data Set 1",
//     x: [0, 1, 2, 3, 4],
//     y: [0, 1, 2, 3, 4] },
//     { label: "Data Set 2",
//         x: [0, 1, 2, 3, 4],
//         y: [0, 1, 4, 9, 16] } ] ;
//

//  Example HTTP Request - http://localhost:5000/getCountryHiTechInfo?country=ISR&year=2014
app.get('/getCountryHiTechInfo', function (req, res) {
    // console.log(req);
    var country = req.query.country;
    var year = req.query.year;

    console.log('Got request for Hi Tech info for country: ' + country + ' in year: ' + year);
    var queryRes = serverInfoApi.getCountryHiTechInfoByYear('TX.VAL.TECH.CD', year, country);
    var queryResStr = JSON.stringify(queryRes);
    // console.log("Res: " + queryResStr);
    res.end(queryResStr);

})

//  Example HTTP Request - http://localhost:5000/getCountryHiTechInfo?yearStart=2014&yearEnd=2018
app.get('/getCountriesHiTechInfoLineCharted', function (req, res) {
    // console.log(req);
    var yearStart = req.query.yearStart;
    var yearEnd = req.query.yearEnd;
    var country = req.query.country;
    console.log('Got request for Hi Tech info for country: ' + country + ' from year: ' + yearStart + ' to year:' + yearEnd);

    var finalRes = {'countryLabel': country, 'x':[],'y':[]};

    for (var i = yearStart; i <= yearEnd; i++) {
        var queryRes = serverInfoApi.getCountryHiTechInfoByYear('TX.VAL.TECH.CD', i, country);
        console.log(queryRes);

        finalRes['y'].push(queryRes.Val/1000000);
        finalRes['x'].push(queryRes.Year);
        // var queryResStr = JSON.stringify(queryRes);
        // console.log("Res: " + queryResStr);
    }

    var queryResStr = JSON.stringify(finalRes);
    // console.log("Res: " + queryResStr);
    res.end(queryResStr);

})

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});