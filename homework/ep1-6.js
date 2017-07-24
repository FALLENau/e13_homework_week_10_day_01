// //ep1
// var name = 'Keith';
//
// var printName = function() {
//   console.log('My name is ' + name );
// };
//
// printName();
//
// //output: My name is Keith
// //how?: the var name takes Keith as a string, the var printName creates a
// //function that will create a console.log and "puts out" 'My name is '
// //plus the string var of name, equalling "My name is Keith"
//
// //ep2
// score = 5;//was of line of code
//
// var result = function() {
//   var score = 3;
//   return score;
// };
//
// console.log(result());
// //output: 3
// //how?: 'score' is created to equals 5 however; when the function 'result' is made the
// // var 'score' is defined with in the scope of the function and ignroes the global
// // 'score' which is equal to 5. hench 3 is returned
//
////ep3
//var myAnimals = ['Chickens', 'Cats', 'Rabbits'];
//
//var listAnimals = function() {
//   myAnimals = ['Ducks', 'Dogs', 'Lions'];
//   for(var i=0;i<myAnimals.length; i++){
//     console.log(i + ": " + myAnimals[i]);
//   }
// }
//
// listAnimals();
//// output: 0: Ducks 1: Dogs 2: Lions
//// how?: an array of strings is made of 'Chickens', 'Cats', 'Rabbits', then a
////function is made called 'listAnimals' which loops over the 'myAnimals' array
//// one by one replacing each, then printsout a loop that goes over each index of
//// the new array.
//
//
//
// //ep4
// var suspectOne = 'Jay';
// var suspectTwo = 'Val';
// var suspectThree = 'Keith';
// var suspectFour = 'Rick';
//
// var allSuspects = function() {
//   var suspectThree = 'Harvey'
//   console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
// };
//
// allSuspects();
// console.log( 'Suspect three is:' + suspectThree );
// //output: Suspects include: Jay, Val, Harvey, Rick Suspect three is:Keith
// //how?: 4 var strings are made, these are taken in to a function called
// // 'allSuspects', this function changes one of the strings to 'Harvey' then
// // console.logs out a strings plus all the Suspects var strings this function
// // is called just before console.log at the end of the script which prints out
// // the adjusted Suspect list. separate from that console.log prints the origional
// suspectThree becuz it cannot see the var change within the allSuspects function.

//
//ep5
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());
//output: Poirot
//how?: var detective holds a name and a pet, becuz the function 'printName'
// comes in the function of 'detectiveInfo' the detective name gets changed
// before the console.log takes in detectiveInfo, which prints the name of the
// var detective(i.e is now Poirot instead of Ace Ventura)

//ep6
var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);
//output: the murderer is  rick
// the var murderer is made with the string 'rick', then a function called
// outerFunction is created, which then turns the var murderer string into
// 'merc'. Then anouther function is called within called innerFunction, which
// then changes the var murderer to 'valerie' then exits the innerFunction
// to the outerFunction, finially the the innerFunction is called within the
// outerFunction function... once out side the function the and just before the
// console.log() the outerFunction function is called... however; this doen't do
// a thing becuz the function never returns anything! and thus the console.log
// puts out a string "the murderer is " and the var string murderer 'rick'

//ep7
var person = "Morty"
var action = "and I killed rick!" + (murdererder = person)
var portalgun = "'as he steps out'"
var action2 = "'Morty shoots rick'"

function names(portalgun, person, action){
  return "My name is " + person + " " + portalgun + " \n" + (action.replace(/Morty/, ''))
}

console.log(names(portalgun, person, action))
console.log(action2)
console.log(murdererder, " is now the murdererder", '\n', "rick is dead")
