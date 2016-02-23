//-----------------------------------------------------------------
//26. Existence and Booleans

//var a;
//
//if(a || a === 0){ //a if (a == 0) return false
//    console.log("Something is there");
//}



//-----------------------------------------------------------------
// 25 Comparison Operation
//console.log(3 < 2 < 1); // 3 < 2 = false => false < 1 => false = 0 => 0< 1 = true
//console.log(1<2<2);
//Number(true); // 1
//Number(false); // 0
////null == 0 => false
////nul < 1 => true
////"" == 0 => true && "" == false => true
//var a = 0 ;
//var b = false;
//if (a === b){
//    console.log('They are equal!');
//}else {
//    console.log('Nope, not equal!');
//}
//if (a == b){
//    console.log('They are equal!');
//}else {
//    console.log('Nope, not equal!');
//}

//-----------------------------------------------------------------
// 24 Conceptual Aside

//var a = 1+'2';
//console.log(a);// 12

//-----------------------------------------------------------------
// 22. Operator Precedence and Associatinity

//var aa = 3 + 4 * 5;
//console.log(aa);
//var a = 2, b = 3, c = 4;
//a = b = c;
//console.log(a);
//console.log(b);
//console.log(c);

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
