
// console.log("hi");

// let originalStory = `It was pizza day at school, and Jamie was super excited for lunch. But when she went outside to eat, a bird stole her pizza! Jamie chased the bird all over school. She climbed, jumped, and ran through the playground. Then she tripped on her shoelace and the bird escaped! Luckily, Jamie ’s friends were willing to share their pizza with her.`

// // let userInputs = ["Food", "Girls' name", "Adjective", "Noun1", "Verb1", "Verb2", "Verb3", "Noun2"];
// // console.log(userInputs[0]);

// //let arrayStory = originalStory.split(" ");
// //console.log(arrayStory);

// // Finding all changable words 

// // //console.log(arrayStory.indexOf("pizza"));
// // console.log(arrayStory.splice(2, 1, userInputs[0]));

// // // console.log(arrayStory.indexOf("Jamie"));
// // console.log(arrayStory.splice(7, 1, userInputs[1]));

// // // console.log(arrayStory.indexOf("excited"));
// // console.log(arrayStory.splice(10, 1, userInputs[2]));

// // //console.log(arrayStory.indexOf("bird"));
// // console.log(arrayStory.splice(21, 1, userInputs[3]));

// // //console.log(arrayStory.indexOf("bird"));
// // console.log(arrayStory.splice(21, 1, userInputs[3]));

// // //console.log(arrayStory.indexOf("pizza")); 
// // console.log(arrayStory.splice(24, 1, userInputs[0]));

// // //console.log(arrayStory.indexOf("Jamie")); 
// // console.log(arrayStory.splice(25, 1, userInputs[1]));

// // //console.log(arrayStory.indexOf("bird")); 
// // console.log(arrayStory.splice(28, 1, userInputs[3]));

// // //console.log(arrayStory.indexOf("climbed"));
// // console.log(arrayStory.splice(33, 1, userInputs[4]));

// // //console.log(arrayStory.indexOf("jumped"));
// // console.log(arrayStory.splice(34, 1, userInputs[5]));

// // //console.log(arrayStory.indexOf("ran"));
// // console.log(arrayStory.splice(36, 1, userInputs[6]));

// // //console.log(arrayStory.indexOf("shoelace"));
// // console.log(arrayStory.splice(45, 1, userInputs[7]));

// // //console.log(arrayStory.indexOf("bird"));
// // console.log(arrayStory.splice(48, 1, userInputs[3]));

// // //console.log(arrayStory.indexOf("Jamie"));
// // console.log(arrayStory.splice(51, 1, userInputs[1]));

// // //console.log(arrayStory.indexOf("pizza"));
// // console.log(arrayStory.splice(59, 1, userInputs[0]));
// // console.log(arrayStory);



// let numberOfQuestions = 7;

// let questionArray = ["Whats is your favorite food?", "Enter girls' name", "Enter an adjective", "Enter a noun", "Enter a verb1 (present tense)", "Enter a verb2 (present tense)", "Enter a verb3 (present tense)", "Enter a noun2"]

// for (let i = questionArray.length; i > 0; i--) {
//     console.log(userInputs = prompt(`questionArray[0]`));
// }

window.onload = () => {
  // Total questions
  let questionTotal = 7;

  // Question Counter (which question are we on)
  let questionCounter = 0;

  // Test logic:
  let questionArray = ["Whats is your favorite food?", "Enter girls' name", "How are you feeling now? (Enter an adjective)", "What's your first pet?", "Enter a verb1 (present tense)", "Enter a verb2 (present tense)", "Enter a verb3 (present tense)", "The last object you've lost"]

  let userInputs = [];
  for (let i = questionTotal; i >= 0; i--) {
    // console.log(`The "i" of our "for" loop `);
    // console.log(i);
    // console.log("What question (of questionArray) is accessed (using questionCounter):");
    console.log(
      questionArray[questionCounter] + `... (${questionTotal} questions left)`
    );
    userInputs.push(
      prompt(
        questionArray[questionCounter] + `... (${questionTotal} questions left)`
      )
    );
    console.log(userInputs);
    questionCounter++;
    // console.log(`This is the current "questionCounter" variable (it should go up):`);
    // console.log(questionCounter);
    questionTotal--;
    // questionsLeft = `; (${questions} questions left)`;
    // console.log(`This is the current "Questions" variable (it should go down ... and be the same as the next "i"`);
    // console.log(questionTotal);
  }

  // The User's not-drunk history of computer bugs
  let originalStory = `<h2 style="margin: 20%;"> It was ${userInputs[0]} day at school, and ${userInputs[1]} was super ${userInputs[2]} for lunch. But when she went outside to eat, a ${userInputs[3]} stole her ${userInputs[0]}! ${userInputs[1]} chased the ${userInputs[3]} all over school. She ${userInputs[4]}, ${userInputs[5]}, and ${userInputs[6]} through the playground. Then she tripped on her ${userInputs[7]} and the ${userInputs[3]} escaped! Luckily, ${userInputs[1]}’s friends were willing to share their ${userInputs[0]} with her.</h2>`;
  console.log(originalStory);

  // End of User Inputs
  alert(
    "All done! Relax and enjoy the story..."
  );

  // Output
  console.log(originalStory);
  document.write(originalStory);
};

// // originalStory It was pizza day at school, and Jamie was super excited for lunch. But when she went outside to eat, a bird stole her pizza! Jamie chased the bird all over school. She climbed, jumped, and ran through the playground. Then she tripped on her shoelace and the bird escaped! Luckily, Jamie’s friends were willing to share their pizza with her.

// // It was ___(FOOD)___ day at school, and ___(NAME)___ was super ___(ADJECTIVE)___ for lunch. But when she went outside to eat, a ___(NOUN)___ stole her ___(FOOD)___! ___(NAME)___ chased the ___(NOUN)___ all over school. She ___(VERB1)___, ___(VERB2)___, and ___(VERB3)___ through the playground. Then she tripped on her ___(NOUN2)___ and the ___(NOUN)___ escaped! Luckily, ___(NAME)___’s friends were willing to share their ___(FOOD)___ with her.
