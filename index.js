
//------------------------ Question 1---------------------------
//Write a function that ask the user for two numbers and return the product of them. But the challenge here is that you can't use the operator * (you can't make the product)
//hint: multiplication is a sequence of sums

 //@param {number} number1
 //@param {number} number2
 //@return {number} product
const multiplication = (num1=7,num2=6) => {
  let product = 0;
  for (let i = 0; i < num1; i++) {
    product += num2;
  }
  return product;
}

const answer1 = multiplication()
console.log('answer1', answer1)

const htmlTarget = document.getElementById('a-1')
htmlTarget.innerHTML = answer1



//------------------------ Question 2 ---------------------------
// Write a function that recieves a string as a parameter and evaluate each character of the string to determinate if the character is vowel or a consonant. you have to store each character on separates arrays, one for vowels and the other one for consonants.
// after separating the characters concatenate both arrays. ask the user if wants the vowels first or consonants first in the final array.
//hint:

//@param {string}
//@return {character} => array of characters
vowelOrConsonant = (str="this is the forest primeval") => {
  const vowels="aeiou";
  const consonants="bcdfghjklmnpqrstvwxyz";
  const strL = str.toLowerCase();
  const strA = strL.split("");
  const vStr = [];
  const cStr = [];
  strA.forEach ((letter) => {
    if (vowels.includes(letter)) {
      vStr.push(letter);
    } else if (consonants.includes(letter)) {
      cStr.push(letter);
    }
  });
  let outArray = [];
  c=prompt("Enter c if you want consonants first.  Otherwise you will get vowels first.")
  if (c==="c") {
    outArray = cStr.concat(vStr);
  } else {
    outArray = vStr.concat(cStr);
  }
  return outArray;
}

const answer2 = vowelOrConsonant()

const htmlTarget2 = document.getElementById('a-2')
htmlTarget2.innerHTML = answer2




//------------------------ Question 3 ---------------------------
//Now let's create a small game. The game consists in a player (ask the user for the name).The player has 3 oportunities to guess a number. The number is a random number between 10 - 50.
//If the player don't find the number, the program must displays an alert and stop the game, but if the player finds the number, then the program must show a congratulations message (alert) with the name of the player in upperCase letters and stop the game
//You must have to store the player information in a 'player' object. The Player object contains the following Properties:
// {string} name, {number} lives, {numbers} fail_numbers[]
//where: name, saves the name of the player. Lives, represents the remaining oportunities each time the player fails. Fail_numbers, is an array of numbers that stores the fail numbers the player has used

//@return {string} win / gameOver => the string that says if the user wasted the three oportunities showing the fails numbers or the name if the player wins
guessTheNumber  = () => {
  x = Math.floor(Math.random() * 41) + 10;
  name = prompt("Enter your name:");
  let player = {
    name: name,
    lives: 3,
    fail_numbers: []
  };
  let returnString = "";
  for (; player.lives>0;player.lives--) {
    const guess = parseInt(prompt("Guess a number between 10 and 50:"));
    if (guess === x) {
      break;
    }
    player.fail_numbers.push(guess);
  }
  if (player.lives === 0) {
    return `${player.name}, you wasted your 3 lives guessing ${player.fail_numbers}.  The secret number was ${x}.`
  } else {
    return `${player.name}, you win! The secret number was ${x}.`
  }
}

const answer3 = guessTheNumber()

const htmlTarget3 = document.getElementById('a-3')
htmlTarget3.innerHTML = answer3



//------------------------ Question 4 ---------------------------
// In the function below we are giving you an array of objects, each one with the same properties. Ask to the user for 3 diferentes options to sorting the array from the highest to lowest. In the case of a string, the criteria to sort must be the length of the string. The first one is sorting the array of objects based on the title property.
// The second one sorting the array of objects based on the author property, the third one based on the library property. finally, the return value has to be the string sorted of the property selected separeted with a semicolon. Remember you have to sort all of the array based on the selected property
//example: if the user select sorting by title the return value must be: "Mockingjay: The Final Book of The Hunger Games; Walter Isaacson; The Road Ahead"

sort = () => {

  var library = [
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];
  let sortOption = 0;
  do {
    sortOption = parseInt(prompt("Enter 1 to sort by title, 2 to sort by author, or 3 to sort by libraryID"));
  } while (![1,2,3].includes(sortOption));
  const librarySorted = library.sort( (a,b) => {
    if (sortOption===1) {
      return (b.title.length - a.title.length );
    } else if (sortOption===2) {
      return (b.author.length - a.author.length );
    } else {
      return (b.libraryID - a.libraryID);
    }
  });

  if (sortOption===1) {
    return `${librarySorted[0].title};${librarySorted[1].title};${librarySorted[2].title}`;
  } else if (sortOption===2) {
    return `${librarySorted[0].author};${librarySorted[1].author};${librarySorted[2].author}`;
  } else {
    return `${librarySorted[0].libraryID};${librarySorted[1].libraryID};${librarySorted[2].libraryID}`;
  }
}

const answer4 = sort()

const htmlTarget4 = document.getElementById('a-4')
htmlTarget4.innerHTML = answer4
