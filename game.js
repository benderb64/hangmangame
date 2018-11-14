//Varibales to Define
    //Wins
    let wins=0; 
    //Losses
    let losses=0; 
    //Number of Guesses
    let numberofGuesses=10; 
    //Words Array
    let wordArray = [
        "trout",
        "pike",
        "muskie",
        "walleye",
        "perch",
        "bluegill",
        "catfish"
    ];
    let blankWord = [];
    let currentWord = "";

    function randomWord(){

        return( wordArray[ Math.floor(Math.random() * wordArray.length) ] );
    }

    //Current Word


    //Number of Guesses Remaining
    //Random Word Generator

//New Game

function newGame() {
    blankWord=[];
    currentWord=randomWord(); 
    for (let i = 0; i < currentWord.length; i++) {
        blankWord.push="_";
        console.log(blankWord, "blankWord");
    }

}

document.addEventListener("keypress", function(event){
    let letter = String.fromCharCode(event.keyCode);
    console.log(letter, "letter");
    insertLetter(letter);
    console.log(blankWord.join(""), "blankWord");
});

function checkWord(word) {
    if (currentWord === word) {
        return true; 
    } else {
        return false; 
    }
}

function insertLetter(c) {
   let position = 0;
   console.log(c, position, "c position");
    do {
        position = currentWord.indexOf(c, position);
        if (position > -1) {
            blankWord[position] = c; 
        }
        console.log(c, position, "c position");
    } while (position != -1);

}

window.onload=newGame(); 

    //Generate new word
    //Empty underscore array
    //When user enters a letter, compare with the current word
        //Fill in the blank if there is a letter match
        //No letter match, guesses to go down
        //Add letter to already guessed letters

console.log(currentWord, "currentWord");
    