// Business Logic

let verifiedInt;

function stringToInt(userInput) {

  if (isNaN(parseInt(userInput))) {
    //Will change this return later
    return "Please input a number using Arabic numerals 0-9."
  } 
  else {
    return verifiedInt = parseInt(userInput)
  }

}

function intToArray() {
  
  let intArray = Array.from({length: verifiedInt + 1}, (value, index) => index);
  return intArray;

}



