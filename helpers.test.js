
const{
    findMean,
    findMode,
    findMedian
} = require('./helpers');


describe('#findMean', () =>{
    
    it('find the median of an even set.', ()=>{
        expect(findMean([1, 2, 3, 3, 3, 6])).toEqual(3);
    })
    it('find the median of an odd set.', ()=>{
        expect(findMean([1, 2, 3, 3, 3])).toEqual(2.4);
    })
});

describe('#findMedian', () =>{
    
    it('find the median of an even set.', ()=>{
        expect(findMedian([1, 2, 3, 3, 3, 6])).toEqual(3);
    })
    it('find the median of an odd set.', ()=>{
        expect(findMedian([1, 2, 3, 3, 3])).toEqual(3);
    })
});

describe('#findMode', () =>{
    
    it('find the mode of an even set.', ()=>{
        expect(findMode([1, 2, 3, 3, 3, 6])).toEqual("3");
    })
    it('find the mode of an odd set.', ()=>{
        expect(findMode([1, 2, 3, 3, 3])).toEqual("3");
    })
});

