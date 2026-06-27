const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/bmicalculator', (req, res) => {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var BMI = weight / height;
    res.send('Your BMI is ' + BMI);
})
app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html');

})

app.listen(4000, () =>{
 console.log('server running on 4000');
});