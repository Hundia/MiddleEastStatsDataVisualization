/**
 * Created by elihundia on 27/05/2017.
 */

// var years = JSON.parse('../Datasets/CountryInfo.json');
// var metaData = JSON.parse('../Datasets/meta.json');

var metaJson = require('../../Datasets/test.json');
var metaApi = require('./MetaDataApi.js');

console.log('Name of ISR: ' + metaApi.countryCodeToName('ISR'));

// //  Dictionaries and variables
// var countryCodeToNameDict = {};
//


// var queryRes = getCountryInfoByYear('SP.DYN.IMRT.IN', 2012, 'ISR');
// var queryRes = getCountryInfoByYear('TX.VAL.TECH.MF.ZS', 1989, 'ISR');

// console.log(queryRes);

// Given a query indicator code ,year and a country code, return the corresponding value
function getCountryInfoByYear(indicatorCode, year, countryCode) {
    //  TODO - Perhaps validate stuff in the future...
    var res = {};

    for (var i = 0; i < metaJson.length; i++) {
        // console.log(i);
        var line = metaJson[i];

        if(line['Indicator Code'] == indicatorCode && line['Country Code'] == countryCode)
        {
            console.log(line);
            // res['Country'] = line['Country Name'];
            res['Year'] = year;
            res['Val'] = parseInt(line[year]);

        }

        // console.log(line);
        // countryCodeToNameDict[line['Country Code']] = line.TableName;
        // console.log('key: ' +  line['Country Code'] + ' Val: ' + countryCodeToNameDict[line['Country Code']]);
    }
    // console.log(res);
    return res;
}

// Given a query indicator code ,year and a country code, return the corresponding value
function getHiTechInfoByYear(indicatorCode, year) {
    //  TODO - Perhaps validate stuff in the future...
    var res = [];

    for (var i = 0; i < metaJson.length; i++) {
        // console.log(i);
        var line = metaJson[i];

        if(line['Indicator Code'] == 'TX.VAL.TECH.CD')
        {
            // console.log('Country:' + line['Country Name'] + year + ': ' + line[year]);
            var tmp = {};
            tmp['Country'] = line['Country Name'];
            tmp[year] = line[year];
            res.push(tmp);
        }

        // console.log(line);
        // countryCodeToNameDict[line['Country Code']] = line.TableName;
        // console.log('key: ' +  line['Country Code'] + ' Val: ' + countryCodeToNameDict[line['Country Code']]);
    }
    // console.log(res);
    return res;
}

// USAGE Example
// for (var i = 2010; i < 2016; i++) {
//         getCountryHiTechInfoByYear('TX.VAL.TECH.CD', i, 'ISR');
//     }


module.exports = {
    getHiTechInfoByYear: function (indicatorCode, year) {
        return getHiTechInfoByYear(indicatorCode, year);
    },
    getCountryInfoByYear: function (indicatorCode, year, countryCode) {
        return getCountryInfoByYear(indicatorCode, year, countryCode);
    }
};