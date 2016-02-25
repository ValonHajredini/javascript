//-----------------------------------------------------------------
//35. Function Statments and Function Expression
greet();
function greet(){
    console.log('hi');
}
var ananumisGreet = function (){
    console.log('hi');
}
ananumisGreet();
var funk = {};
funk.setName = function(){
    return "Valon";
}
funk.greet = function(name){
    console.log("Hello "+name);
}

console.log(funk.setName());
funk.greet(funk.setName());
function log(a){
    console.log(function(){
        alert("Hello");
    });
}
log(3);
//-----------------------------------------------------------------
// 34. Functiones are Object
//function greet (){
//    console.log('hi');
//}
//greet.languige = "English";
//console.log(greet);
//console.log(greet.languige);
//-----------------------------------------------------------------
//33. JSON Object Literals
//var objectLiteral ={
//    firstname: 'Mary',
//    isAprogramer: true
//}
//var json = '{"firstName": "Valon", "isAProgramer": true}';
//console.log(JSON.stringify(objectLiteral));
//var jsonValue = JSON.parse(json)
//console.log(jsonValue);
//-----------------------------------------------------------------
//32. Framework aside
//var greet = "Hello";
//var greet = "Hola";
//var english ={};
//var spanish = {};
//english = {greating: {greet: "hello "}}
//english.greet = "Hello";
//spanish.greet = "Hola";
//
//
//console.log(english.greating.greet);


//-----------------------------------------------------------------
////31. Object and object Literals
//var person = {
//    firstname: 'Valon',
//    lastname: 'Hajredini',
//    address:{
//        street: "111 MAin St.",
//        city: "New Yourk",
//        state: "NY"
//    }
//};
//function greet(person){
//    console.log('HI '+ person.firstname);
//}
//greet(person);
//greet({
//    firstname: "Vali",
//    lastname: "hajd"
//});
//person.address2 = {
//    street: "333 Second St."
//}
//
//console.log(person);
//console.log(person.address.city);
//


//-----------------------------------------------------------------
//30. Objektet and de dot
//var person = new Object();
//person["firstname"] = "Tony";
//person["lastname"] = "Alicea";
//var firstNameProperty = "firstname";
//
//console.log(person);
//console.log(person[firstNameProperty]);
//
//console.log(person.firstname);
//console.log(person.lastname);
//person.address = new Object();
//person.address.street = "11 MainSt.";
//person.address.city = "New yourk";
//person.address.state = "NY";
//console.log(person.address.street);
//-----------------------------------------------------------------
//29. Framework Aside

//console.log(libraryName);

//-----------------------------------------------------------------
//28. Default value

//function greet(name){
//    name = name || '<Your name here>' // merr vleren ecila nuk asht null nese nuk ka name vler
//    console.log("Hello "+name);
//};
//greet();


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
