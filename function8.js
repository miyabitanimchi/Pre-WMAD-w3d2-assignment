// write a function that splits the string into an array with an item for each word.
// console log this array
let sentence = "I am a sentence"



const splitSentence= function (str) {
    str = 'I,am,a,sentence';
    arr = str.split(',');
    console.log(arr);
};

splitSentence(sentence);