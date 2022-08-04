const Country = require('../models/country').CountryModel;

exports.getHomePage = (req, res) => {
    res.render('index');
}

exports.postSendData = (req, res) => {

    const Data = {
        countryName: req.body.country,
        population: req.body.population,
        urlflag: req.body.urlflag
    }

    let country = new Country({
        name: Data.countryName,
        flagURL: Data.urlflag,
        population: Data.population
    })

    country.save();

    res.send("Dades rebudes:" + JSON.stringify(Data));
}