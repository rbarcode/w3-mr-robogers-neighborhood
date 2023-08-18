// Business Logic

function stringToInt(userInput) {

  let verifiedInt;

  if (isNaN(parseInt(userInput))) {
    //Will change this return later
    return "Please input a number using Arabic numerals 0-9."
  } else {
    return verifiedInt = parseInt(userInput);
  }
}