const express = require('express');
const app = express();

//Addition
app.get('/add/:num1/:num2', (req, res) => {
    try {
        //convert strings to float
        const number1 = parseFloat(req.params.num1);
        const number2 = parseFloat(req.params.num2);

        if(number1 !== number1) {//check if number1 is valid number
            console.log('Number 1 is not a valid number');
            res.send('Number 1 is not a valid number');
        }

        else if (number2 !== number2) {//check if number2 is valid number
            console.log('Number 2 is not a valid number');
            res.send('Number 2 is not a valid number');
        }

        else {
        const result = number1 + number2; //calculate result using addition

        res.send(result.toString()); //send result after converting to string

        console.log(number1 + '+' + number2 + '=' + result); //write to console
        }
    } catch (error) {
        res.send(error);
    }
})

//subtraction
app.get('/subtract/:num1/:num2', (req, res) => {
    try {
        //convert string to float
        const number1 = parseFloat(req.params.num1);
        const number2 = parseFloat(req.params.num2);

        if(number1 !== number1) {//check if number1 is valid number
            console.log('Number 1 is not a valid number');
            res.send('Number 1 is not a valid number');
        }

        else if (number2 !== number2) {//check if number2 is valid number
            console.log('Number 2 is not a valid number');
            res.send('Number 2 is not a valid number');
        }

        else {

        const result = number1 - number2; //calculate result using subtraction

        res.send(result.toString()); //send result after converting to string

        console.log(number1 + '-' + number2 + '=' + result); //write to console
        }
    } catch (error) {
        res.send(error);
    }
})

//multiplication
app.get('/multiply/:num1/:num2', (req, res) => {
    try {
        //convert string to float
        const number1 = parseFloat(req.params.num1);
        const number2 = parseFloat(req.params.num2);

        if(number1 !== number1) {//check if number1 is valid number
            console.log('Number 1 is not a valid number');
            res.send('Number 1 is not a valid number');
        }

        else if (number2 !== number2) {//check if number2 is valid number
            console.log('Number 2 is not a valid number');
            res.send('Number 2 is not a valid number');
        }

        else {

        const result = number1 * number2; //calculate result using multiplication

        res.send(result.toString()); //send result after converting to string

        console.log(number1 + '*' + number2 + '=' + result); //write to console
        }
    } catch (error) {
        res.send(error);
    }
})

//division
app.get('/divide/:num1/:num2', (req, res) => {
    try {
        //convert string to float
        const number1 = parseFloat(req.params.num1);
        const number2 = parseFloat(req.params.num2);
        
        if(number1 !== number1) {//check if number1 is valid number
            console.log('Number 1 is not a valid number');
            res.send('Number 1 is not a valid number');
        }

        else if (number2 !== number2) {//check if number2 is valid number
            console.log('Number 2 is not a valid number');
            res.send('Number 2 is not a valid number');
        }

        else {

        if(number2 == 0) { //check if denominator is a zero
            console.log('Cannot divide by zero'); //write to console
            res.send('Cannot divide by zero'); //send result as string
        }
        else { //if denominator is not zero
        const result = number1 / number2; //calculate result using division

        res.send(result.toString()); //send result after converting to string

        console.log(number1 + '*' + number2 + '=' + result); //write to console
        }
    }
    } catch (error) {
        res.send(error);
    }
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});