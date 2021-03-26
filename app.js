const express = require('express');
const {findMean, findMedian, findMode, createFrequencyCounter, convertAndValidateNumsArray} = require('./helpers');
const ExpressError = require('./expressError');

const app = express();


app.get('/mean', (req, res, next) =>{
    
    // Validate the input. 
    if(!req.query.nums){
        throw new ExpressError('Query be a list of numbers separated by commas.', 400);
    }
    
    // Take out the commas!
    let numberAsStrings = req.query.nums.split(',');
    console.log(numberAsStrings)

    // Convert it into an integer array.
    let nums = convertAndValidateNumsArray(numberAsStrings);
    
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let results = {
        operation: 'mean',
        result: findMean(nums)
    }

    return res.send(results);
});

app.get('/median', (req, res, next) =>{
    
    // Validate the input. 
    if(!req.query.nums){
        throw new ExpressError('Query be a list of numbers separated by commas.', 400);
    }

    // Take out the commas!
    let numberAsStrings = req.query.nums.split(',');

    // Convert it into an integer array.
    let nums = convertAndValidateNumsArray(numberAsStrings);

    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let results = {
        operation: 'median',
        result: findMode(nums)
    }

    return res.send(results);
});

app.get('/mode', (req, res, next) =>{

    // Validate the input. 
    if(!req.query.nums){
        throw new ExpressError('Query be a list of numbers separated by commas.', 400);
    }

    // Take out the commas!
    let numberAsStrings = req.query.nums.split(',');

    // Convert it into an integer array.
    let nums = convertAndValidateNumsArray(numberAsStrings);

    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let results = {
        operation: 'mode',
        result: findMode(nums)
    }

    return res.send(results);
});

/** General Error Handlers */

app.use(function(req, res, next){
    const err = new ExpressError('Page not found.', 404);
    
    // Pass the error to next middleware. 
    return next(err);
});

app.use(function(err, req, res, next){

    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.message
    })

});



app.listen(3000, () =>{
    console.log("Server starting at port 3000");
});