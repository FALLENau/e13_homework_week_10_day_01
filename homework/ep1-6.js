//ep1
var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

//output: My name is Keith
//how?: the var name takes Keith as a string, the var printName creates a
//function that will create a console.log and "puts out" 'My name is '
//plus the string var of name, equalling "My name is Keith"

//ep2
score = 5;//was of line of code

var result = function() {
  var score = 3;
  return score;
};

console.log(result());
//output: 3
//how?: 'score' is created to equals 5 however; when the function 'result' is made the
// var 'score' is defined with in the scope of the function and ignroes the global
// 'score' which is equal to 5. hench 3 is returned

//ep3
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();
//output: 0: Ducks 1: Dogs 2: Lions
//how?: 


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
//
// //ep5
// var detective = {
//   name : 'Ace Ventura',
//   pet : 'monkey'
// };
//
// var printName = function(detective) {
//   return detective.name
// };
//
// var detectiveInfo = function() {
//   detective['name'] = 'Poirot'
//   return printName(detective);
// };
//
// console.log(detectiveInfo());
// //output: Poirot
//
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

//ep7
var person = "Morty"
var action = "and I killed rick!" + (murdererder = person)
var portalgun = "'as he steps out'"
var action2 = "'Morty shoots rick'"

function names(portalgun, person, action){
  return "My name is " + person + " " + portalgun + " " + (action.replace(/Morty/, ''))
}

console.log(names(portalgun, person, action))
console.log(action2)
console.log(murdererder, " is now the murdererder", '\n', "rick is dead")
