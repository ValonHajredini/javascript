//-----------------------------------------------------------------
// 22. Operator Precedence and Associatinity

var aa = 3 + 4 * 5;
console.log(aa);
var a = 2, b = 3, c = 4;
a = b = c;
console.log(a);
console.log(b);
console.log(c);

//-----------------------------------------------------------------
//21. Conceptual Aside
//var a = 3 > 4;
//console.log(a);



//-----------------------------------------------------------------
//20 Primitive types.
//...
//Javascript ka vetem ni tim numerik edhe asht floating point number


//-----------------------------------------------------------------
//19 Conceptual Aside (Types and javascript)
//...
// Javascript ka dinamik tipet e variablave


//-----------------------------------------------------------------
//18. What about Asynchronous Callback
//function waitTheeSeconds(){
//    var ms = 3000 + new Date().getTime();
//    while(new Date() < ms){}
//    console.log("Finished f unciton");
//}
//
//function clickHendler(){
//    console.log('Click event!');
//
//}
//// Listening for the click event
//document.addEventListener('click', clickHendler);
//
//
//waitTheeSeconds();
//console.log('finished execution');

//-----------------------------------------------------------------
////17. Scope, ES6 and let
//var a = 2;
//var b = 5;
//if(a< b){
//    let c = true;
//}
//// let asht pothuaj si var ne javascript es6
//console.log(c);// Returns error
//let d = 11;
//console.log(d); // kthen vler

//-----------------------------------------------------------------
//16. The Scope Chain
//function b(){
//    console.log(myVar);
//}
//function a(){
//
//    var myVar =2;
//    b();
//}
//var myVar = 1;
//a();

//----------------------------------------------------------------

// Lesen 15 Functions, Context and Variable
//function b(){
//    var myVar;
//    console.log(myVar);
//}
//function a(){
//    var myVar = 2;
//    console.log(myVar);
//    b();
//}
//var myVar = 1;
//
//console.log(myVar);
//a();
//console.log(myVar);

//---------------------------------------------------------------

// Lesen 14.
//function b(){
//    console.log("Called me!");
//}
//b();
//
//
//function a(){
//    b();
//};
//a();
//----------------------------------------------------------------
