const express = require('express')
const app = express();

app.get('/', function (req, res) {

    res.send('Express says hello').end();

})

app.listen(3000, function () {
    console.log('Server started and listening on port 3000')
})