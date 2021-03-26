
function findMean(nums){
    return nums.reduce(function(acc, next){
        return acc + next;
    }) / nums.length;
}

function findMedian(nums){
    nums.sort();

    let middleIndex = Math.floor(nums.length / 2);
    let median;

    if (nums.length % 2 === 0){
        median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
    } else{
        median = nums[middleIndex];
    }

    return median;
}

function findMode(nums){
    let frequencies = createFrequencyCounter(nums);

    let count = 0;
    let mostFrequent; 

    for(let key in frequencies){
        if(frequencies[key] > count){
            mostFrequent = key;
            count = frequencies[key];
        }
    }

    return mostFrequent;
}

function createFrequencyCounter(nums){
    return nums.reduce(function(acc, next){
        acc[next] = (acc[next] || 0) + 1;
        return acc;
    }, {});
}

function convertAndValidateNumsArray(numsAsStrings){
    let results = [];

    for(let i = 0; i < numsAsStrings.length; i++){
        let temp = numsAsStrings[i];

        if(isNaN(temp)){
            // throw error
        }
        results.push(parseInt(temp));
    }
    return results;
}


module.exports = {
    findMean,
    findMedian,
    findMode,
    createFrequencyCounter,
    convertAndValidateNumsArray,
}