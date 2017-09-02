/**
 * Created by elihundia on 27/05/2017.
 */

// var years = JSON.parse('../Datasets/CountryInfo.json');
// var metaData = JSON.parse('../Datasets/meta.json');

var metaJson = require('../Datasets/meta.json');

//  Dictionaries and variables
var countryCodeToNameDict = {};

for (var i = 0; i < metaJson.length; i++) {
    // console.log(i);
    var line = metaJson[i];
    // console.log(line);
    countryCodeToNameDict[line['Country Code']] = line.TableName;
    //console.log('key: ' +  line['Country Code'] + ' Val: ' + countryCodeToNameDict[line['Country Code']]);
}

// console.log(parsedJSON);
// console.log(js);

function hiTechExports(code) {
    //  TODO - Perhaps validate code in the future...
    return countryCodeToNameDict[code];
}

// for (var i = 0; i < parsedJSON.length; i++) {
//     // console.log(i);
//     var line = parsedJSON[i];
//     // console.log(line);
//     console.log(line.Region + ' ' + line.IncomeGroup);
//
// }

module.exports = {
    countryCodeToName: function (code) {
        return countryCodeToName(code);
    },
    bar: function () {
        // whatever
    }
};