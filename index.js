///method 1 length



lengthInput = document.querySelector('.length-inp');
let btnLength = document.querySelector('.btn-length').addEventListener('click', () => {
    // assign the values 
    let value = lengthInput.value;
    const output = value.length;

    // display 
    const demo = document.querySelector('.demo');
    const result = document.querySelector('.result');
    demo.innerHTML = `<div> const str = ${value};</div><div>console.log(str.length);</div>`;
    result.innerHTML = `output: ${output}`;


    //clear inputs
    int();

});









///// method 2 trim()

let trimInput = document.querySelector('.trim-inp');
const btnTrim = document.querySelector('.btn-trim').addEventListener('click', () => {
    //assign
    let value = trimInput.value;
    let output = value.trim(); // remove a whitespaces

    //display

    const demo = document.getElementById('demo1');
    const result = document.getElementById('result1');
    demo.innerHTML = `<div> const str =<span class = 'span-space'>space</span>${value}<span class = 'span-space'>space</span>;</div><div>console.log(str.trim());</div>`;
    result.innerHTML = `output: ${output}`;

    //clear the input
    int();

});







//// method 3 includes()


const inclInputStr = document.getElementById('incl-inp-str');
const inclTerm1 = document.getElementById('incl-inp-term1');
const inclTerm2 = document.getElementById('incl-inp-term2');

const btnInc = document.querySelector('.btn-incl').addEventListener('click', () => {
    // assing values 
    let valueStr = inclInputStr.value;
    let valueTerm1 = inclTerm1.value;
    let valueTerm2 = inclTerm2.value;


    // display


    const demo = document.getElementById('demo2');
    const result = document.getElementById('result2');
    demo.innerHTML = `<div> const str =${valueStr};</div><div>const term1 =${valueTerm1};</div></div>const term2 =${valueTerm2};</div>`
    result.innerHTML = `<div>console.log(valueStr.includes(valueTerm1)) // ${valueStr.includes(valueTerm1)}</div> <div>console.log(valueStr.includes(valueTerm2)) // ${valueStr.includes(valueTerm2)}</div> `;


    //clear 
    int();


});














////////// method 4 IndexOf


const inxlInputStr = document.getElementById('inx-inp-str');
const inxterm1 = document.getElementById('inx-inp-term1');
const inxterm2 = document.getElementById('inx-inp-term2');

const btnInx = document.querySelector('.btn-inx').addEventListener('click', () => {
    // assing values 
    let valueStr = inxlInputStr.value;
    let valueTerm1 = inxterm1.value;
    let valueTerm2 = inxterm2.value;


    // display


    const demo = document.getElementById('demo3');
    const result = document.getElementById('result3');
    demo.innerHTML = `<div> const str =${valueStr};</div><div>const term1 =${valueTerm1};</div></div>const term2 =${valueTerm2};</div>`
    result.innerHTML = `<div>console.log(valueStr.indexOf(valueTerm1)) // ${valueStr.indexOf(valueTerm1)}</div> <div>console.log(valueStr.indexOf(valueTerm2)) // ${valueStr.indexOf(valueTerm2)}</div> `;


    //clear 
    int();


});







////////// method 5 UpperCase //////

const capInputStr = document.getElementById('cap-inp-str');


const btnCap = document.querySelector('.btn-cap').addEventListener('click', () => {
    // assing values 
    let valueStr = capInputStr.value;



    // display


    const demo = document.getElementById('demo4');
    const result = document.getElementById('result4');
    demo.innerHTML = `<div> const str =${valueStr};</div>`;
    result.innerHTML = `<div>console.log(valueStr.toUpperCase()) </br>// ${valueStr.toUpperCase()} `;


    //clear 

    int();


});


////////// method 6 LowerCase //////

const lowInputStr = document.getElementById('low-inp-str');


const btnLow = document.querySelector('.btn-low').addEventListener('click', () => {
    // assing values 
    let valueStr = lowInputStr.value;



    // display


    const demo = document.getElementById('demo5');
    const result = document.getElementById('result5');
    demo.innerHTML = `<div> const str =${valueStr};</div>`;
    result.innerHTML = `<div>console.log(valueStr.toLowerCase()) </br>// ${valueStr.toLowerCase()} `;


    //clear 

    int();


});





















////////// method 6 replace //////


const repInputStr = document.getElementById('rep-inp-str');
const pattInputStr = document.getElementById('str-patt-inp-str');
const regexInputStr = document.getElementById('regex-inp-str');
const replacInputStr = document.getElementById('replac-inp-str');


const btnRep = document.querySelector('.btn-rep').addEventListener('click', () => {
    // assing values 
    let valueStr = repInputStr.value;
    let valuePatt = pattInputStr.value;
    let valueregex = regexInputStr.value;
    let valueReplac = replacInputStr.value;

    // Dynamically creating RegExp objects ---- we don't know what is the exact pattern
    let regexp = new RegExp("\\b(" + valueregex + ")\\b", "gi");

    // display
    const demo = document.getElementById('demo6');
    const result = document.getElementById('result6');
    demo.innerHTML = `<div> const str = ${valueStr};</div> <div> const stringPattern =  ${valuePatt};</div><div> const regexPattern =  /${valueregex}/ig;</div><div> const replacement = ${valueReplac};</div>`;
    result.innerHTML = `<div>console.log(valueStr.replace(stringPattern, repalecment)) </br>// ${valueStr.replace(valuePatt, valueReplac)} </div> <div>console.log(valueStr.replace(regexPattern, repalecment)) </br>// ${valueStr.replace(regexp, valueReplac)} </div>`;

    //clear 
    int();
});


////////// method 7 slice()//////

const sli1InputStr = document.getElementById('sli1-inp-str');
const sliceNumber = document.getElementById('sliceFrom-inp-str');

const btnSli = document.querySelector('.btn-sli').addEventListener('click', () => {
    // assing values 
    let valueSli1 = sli1InputStr.value;
    let valueSli2 = sli2InputStr.value;
    let numberSlice = sliceNumber.value;

    // display
    const demo = document.getElementById('demo7');
    const result = document.getElementById('result7');
    demo.innerHTML = `<div> const str1 = ${valueSli1};</div> <div> const str2 =  ${valueSli2};</div>`;
    result.innerHTML = `<div>console.log(str1.slice(number To Start Slice From)) </br>// ${valueSli1.slice(numberSlice)} `;

    //clear 
    int();


});
////////// method 8 slice() with indexOf//////


const sli2InputStr = document.getElementById('sli2-inp-str');
const sli2IndexOfInputStr = document.getElementById('sli2-indexOF-inp-str');


const btnSli2 = document.querySelector('.btn-sli2').addEventListener('click', () => {
    // assing values 
    let valueSli1 = sli2InputStr.value;
    let valueSli2IndexOf = sli2IndexOfInputStr.value;
    const userInputPrefixIndex = valueSli1.indexOf(valueSli2IndexOf) + 1; // accunt for the character itself with +1
    const inputResult = valueSli1.slice(userInputPrefixIndex);
    console.log(inputResult);






    // display
    const demo = document.getElementById('demo8');
    const result = document.getElementById('result8');
    demo.innerHTML = `<div> const str2 = ${valueSli1};</div> <div> const where to start the slice = ${valueSli2IndexOf};</div>
    <div> const prefixIndexOf = str2.indexOf(where to slice from) + 1 ;</div>`;
    result.innerHTML = `<div>console.log(str2.slice(prefixIndexOf)); // ${inputResult}`;

    //clear 
    int();


});







////////// method 9 split() //////

const splitInputStr = document.getElementById('split-inp-str');
const btnSplit = document.querySelector('.btn-split').addEventListener('click', () => {
    // assing values 
    let value = splitInputStr.value;
    let wordArr = value.split(' ');
    let wordLen = wordArr.length;

    // display
    const demo = document.getElementById('demo9');
    const result = document.getElementById('result9');
    demo.innerHTML = `<div> const str = ${value};
    <div>const wordsInArr = str.split ('   ')</div>`;
    result.innerHTML = `<div> console.log(wordInArr); // [ ${wordArr} ]</div><div> console.log(wordInArr.length); // [ ${wordLen} ]</div>`;

    //clear 
    int();


});


////////// method 10 repeat() //////

const repeatInputStr = document.getElementById('repeat-inp-str');
const repeatNumInputStr = document.getElementById('repeatNum-inp-str');

const btnrepeat = document.querySelector('.btn-repeat').addEventListener('click', () => {
    // assing values 
    let value = repeatInputStr.value;
    let valueNum = repeatNumInputStr.value;
    let repeat = value.repeat(valueNum);




    // display
    const demo = document.getElementById('demo10');
    const result = document.getElementById('result10');
    demo.innerHTML = `<div> const str = ${value};
    <div>const repeat = str.repeat(${repeat})</div>`;
    result.innerHTML = `<div> console.log(str.repeat(number)); // ${repeat} </div>`;

    //clear 
    int();


});



////////// method 11 startsWith() //////


const startWithInputStr = document.getElementById('stWiht-inp-str');
const stWithUInputStr = document.getElementById('stWithU-inp-str');

const btnstWith = document.querySelector('.btn-stWith').addEventListener('click', () => {
    // assing values 
    let value = startWithInputStr.value;
    let valueU = stWithUInputStr.value;
    let startW = value.startsWith(valueU);

    // display
    const demo = document.getElementById('demo11');
    const result = document.getElementById('result11');
    demo.innerHTML = `<div> const str = ${value};
                    <div>const starts = ${valueU}</div>`;
    result.innerHTML = `<div> console.log(str.startsWith(${valueU})); // ${startW} </div>`;

    //clear 
    int();


});










////////// method 12 endsWith() //////

const endWithInputStr = document.getElementById('endWiht-inp-str');
const endWithUInputStr = document.getElementById('endWithU-inp-str');

const btnendWith = document.querySelector('.btn-endWith').addEventListener('click', () => {
    // assing values 
    let value = endWithInputStr.value;
    let valueU = endWithUInputStr.value;
    let endW = value.endsWith(valueU);






    // display
    const demo = document.getElementById('demo12');
    const result = document.getElementById('result12');
    demo.innerHTML = `<div> const str = ${value};
                    <div>const ends = ${valueU}</div>`;
    result.innerHTML = `<div> console.log(str.endsWith(${valueU})); // ${endW} </div>`;

    //clear 
    int();


});


////////// method 13 toString() //////

const toStrInputStr = document.getElementById('toStr-inp-str');
const toStrBInputStr = document.getElementById('toStrB-inp-str');

const btntoStr = document.querySelector('.btn-toStr').addEventListener('click', () => {
    // assing values 
    let value = parseInt(toStrInputStr.value);
    let valueU = parseInt(toStrBInputStr.value);
    let toString = value.toString(valueU);

    //console.log(typeof(toString))

    // display
    const demo = document.getElementById('demo13');
    const result = document.getElementById('result13');
    demo.innerHTML = `<div> const num = ${value};
                    <div>const base = ${valueU}</div>`;
    result.innerHTML = `<div> console.log(str.toString(${valueU})); // ${toString} </div>`;

    //clear 
    int();


});













function int() {
    lengthInput.value = '';
    trimInput.value = '';
    inclInputStr.value = '';
    inclTerm1.value = '';
    inclTerm2.value = '';
    inxlInputStr.value = '';
    inxterm1.value = '';
    inxterm2.value = '';
    capInputStr.value = '';
    lowInputStr.value = '';
    repInputStr.value = '';
    pattInputStr.value = '';
    regexInputStr.value = '';
    replacInputStr.value = '';
    sli1InputStr.value = '';
    sli2InputStr.value = '';
    sliceNumber.value = '';
    sli2InputStr.value = '';
    sli2IndexOfInputStr.value = '';
    splitInputStr.value = '';
    repeatInputStr.value = '';
    repeatNumInputStr.value = '';
    startWithInputStr.value = '';
    stWithUInputStr.value = '';
    endWithInputStr.value = '';
    endWithUInputStr.value = '';
    toStrInputStr.value = '';
    toStrBInputStr.value = '';
}

int();


///////////////////bar side movements with pages design //////////









