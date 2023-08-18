// Business Logic



function robotTranslator(userInput) {

  let verifiedInt;

  if (isNaN(parseInt(userInput))) {
    //Will change this later
    return "Please input a number using Arabic numerals 0-9."
  }
  else {
    verifiedInt = parseInt(userInput)
  }

  let intArray = [];
  intArray = Array.from({ length: verifiedInt + 1 }, (value, index) => index);

  let outputArray = [];
  for (let i = 0; i < intArray.length; i++) {
    console.log("loop!")
    if (intArray[i].toString().includes("3")) {
      outputArray.push("Won't you be my neighbor?");
    } else if (intArray[i].toString().includes("2")) {
      outputArray.push("Boop!")
    } else {
      outputArray.push(intArray[i]);
    }
  }
  return outputArray;
}


