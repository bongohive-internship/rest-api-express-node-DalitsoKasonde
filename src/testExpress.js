const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());


app.get('/country/provinces', function (req, res) {
    let provinces = ['Lusaka', 'Southern', 'Northern', 'Copperbelt', 'Eastern', 'Western', 'Muchinga', 'Laupula', 'Central', 'North Western'];
        res.send(provinces);
});
app.get('/countries', function (req,res){
   let countries = [
        {
            "Country name": "Zambia",
            "Country capital": "Lusaka",
            "people": "Zambian"
        },
        {
            "Country name": "France",
            "Country capital": "Paris",
            "people": "French"
        },
        {
            "Country name": "Canada",
            "Country capital": "Lusaka",
            "people": "Canadian"
        },
        {
            "Country name": "Australia",
            "Country capital": "Canberra",
            "people": "Australian"
        },
        {
            "Country name": "Nigeria",
            "Country capital": "Abuja",
            "people": "Zambians"
        },
        {
            "Country name": "USA",
            "Country capital": "Washington DC",
            "people": "American"
        },
        {
            "Country name": "United Kongdom",
            "Country capital": "London",
            "people": "British"
        },
        {
            "Country name": "Togo",
            "Country capital": "Lome",
            "people": "Togolese"
        },
        {
            "Country name": "South Africe",
            "Country capital": "Pretoria, Cape Town, Bloemfontein",
            "people": "South African"
        },
        {
            "Country name": "Niger",
            "Country capital": "Niamey",
            "people": "Nigerien or Nigerious"
        },
    ]

    res.send(countries);

});
app.post('/country/provinces', function(req,res){
    var provinces = new provinces(req.body);
    provinces.save();
    // then(function(province){
    //     res.send(province)
    // });   
});
app.post('/countries', function (req, res) {
    console.log(req.body);
    res.send({
        name: req.body
    });
});

app.delete('/delete/provinces', function (req, res) {
    res.send({});
});
app.delete('/delete/country', function (req, res) {
    res.send({});
});
app.put('/countries/edit', function (req, res) {
    res.send({});
});

app.listen(3000);
