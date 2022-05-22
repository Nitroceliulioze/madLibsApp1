"use strict"
console.log("hi");

let originalStory = `It was pizza day at school, and Jamie was super excited for lunch. But when she went outside to eat, a bird stole her pizza! Jamie chased the bird all over school. She climbed, jumped, and ran through the playground. Then she tripped on her shoelace and the bird escaped! Luckily, Jamie ’s friends were willing to share their pizza with her.`

let userInputs = ["Food", "Girls' name", "Adjective", "Noun1", "Verb1", "Verb2", "Verb3", "Noun2"];
// console.log(userInputs[0]);

let arrayStory = originalStory.split(" ");
console.log(arrayStory);

// Finding all changable words 

//console.log(arrayStory.indexOf("pizza"));
console.log(arrayStory.splice(2, 1, userInputs[0]));

// console.log(arrayStory.indexOf("Jamie"));
console.log(arrayStory.splice(7, 1, userInputs[1]));

// console.log(arrayStory.indexOf("excited"));
console.log(arrayStory.splice(10, 1, userInputs[2]));

//console.log(arrayStory.indexOf("bird"));
console.log(arrayStory.splice(21, 1, userInputs[3]));

//console.log(arrayStory.indexOf("bird"));
console.log(arrayStory.splice(21, 1, userInputs[3]));

//console.log(arrayStory.indexOf("pizza")); 
console.log(arrayStory.splice(24, 1, userInputs[0]));

//console.log(arrayStory.indexOf("Jamie")); 
console.log(arrayStory.splice(25, 1, userInputs[1]));

//console.log(arrayStory.indexOf("bird")); 
console.log(arrayStory.splice(28, 1, userInputs[3]));

//console.log(arrayStory.indexOf("climbed"));
console.log(arrayStory.splice(33, 1, userInputs[4]));

//console.log(arrayStory.indexOf("jumped"));
console.log(arrayStory.splice(34, 1, userInputs[5]));

//console.log(arrayStory.indexOf("ran"));
console.log(arrayStory.splice(36, 1, userInputs[6]));

//console.log(arrayStory.indexOf("shoelace"));
console.log(arrayStory.splice(45, 1, userInputs[7]));

//console.log(arrayStory.indexOf("bird"));
console.log(arrayStory.splice(48, 1, userInputs[3]));

//console.log(arrayStory.indexOf("Jamie"));
console.log(arrayStory.splice(51, 1, userInputs[1]));

//console.log(arrayStory.indexOf("pizza"));
console.log(arrayStory.splice(59, 1, userInputs[0]));
console.log(arrayStory);



// numberOfQuestions 


// originalStory It was pizza day at school, and Jamie was super excited for lunch. But when she went outside to eat, a bird stole her pizza! Jamie chased the bird all over school. She climbed, jumped, and ran through the playground. Then she tripped on her shoelace and the bird escaped! Luckily, Jamie’s friends were willing to share their pizza with her.

// It was ___(FOOD)___ day at school, and ___(NAME)___ was super ___(ADJECTIVE)___ for lunch. But when she went outside to eat, a ___(NOUN)___ stole her ___(FOOD)___! ___(NAME)___ chased the ___(NOUN)___ all over school. She ___(VERB1)___, ___(VERB2)___, and ___(VERB3)___ through the playground. Then she tripped on her ___(NOUN2)___ and the ___(NOUN)___ escaped! Luckily, ___(NAME)___’s friends were willing to share their ___(FOOD)___ with her.