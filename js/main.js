 window.addEventListener('load', init);

 // Global Variables

 const level = {
     easy: 5,
     medium: 3,
     hard: 2
 };

 // To change levels
 const currentLevel = level.easy;

 // Availbale levels
 let time = currentLevel;
 let score = 0;
 let isPlaying;

 // Dom Elements
 const wordInput = document.querySelector('#word-input');
 const currentWord = document.querySelector('#current-word');
 const scoreDisplay = document.querySelector('#score');
 const timeDisplay = document.querySelector('#time');
 const message = document.querySelector('#message');
 const seconds = document.querySelector('#seconds');

 const words = [
     'hat',
     'river',
     'lucky',
     'statue',
     'generate',
     'cocktail',
     'runway',
     'joke',
     'developer',
     'establishment',
     'oppertunity',
     'javascript',
     'nutrition',
     'revolver',
     'symptom',
     'laughter',
     'magic',
     'master',
     'space',
     'hero',
     'siblings',
     'definition'

 ];

 // Initialize Game
 function init() {
     //console.log('init');

     // show number of seconds in UI
     seconds.innerHTML = currentLevel;
     //load word from array
     showWord(words);

     // Start matching on word input
     wordInput.addEventListener('input', startMatch);

     // Call countdown every second
     setInterval(countdown, 1000);

     // Check game status
     setInterval(checkStatus, 50);
 }

 // Start match
 function startMatch() {
     if (matchWords()) {
         isPlaying = true;
         time = currentLevel + 1;
         showWord(words);
         wordInput.value = '';
         score++;
     }

     // if score is -1 display 0
     if (score === -1) {
         scoreDisplay.innerHTML = 0;
     } else {
         scoreDisplay.innerHTML = score;
     }

 }

 // Match currentWord to wordInput
 function matchWords() {
     if (wordInput.value === currentWord.innerHTML) {
         message.innerHTML = 'Correct!!';
         return true;
     } else {
         message.innerHTML = '';
         return false;
     }
 }

 // Pick & show random words
 function showWord(words) {
     // Generate random array index
     const ranIndex = Math.floor(Math.random() * words.length);
     // Output random word
     currentWord.innerHTML = words[ranIndex];
 }

 // Countdown timer
 function countdown() {
     // Make sure time is not run out
     if (time > 0) {
         time--;
     } else if (time === 0) {
         //Game is over
         isPlaying = false;
     }
     // Show time
     timeDisplay.innerHTML = time;
 }

 // Check game status
 function checkStatus() {
     if (!isPlaying && time === 0) {
         message.innerHTML = 'Game Over!!';
         score = -1;
     }
 }