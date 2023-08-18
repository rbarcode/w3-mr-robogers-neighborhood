// Business Logic

function robotTranslator(userInput) {

  let verifiedInt;
  let robotOutput;
  let inputError = false;

  if (isNaN(parseInt(userInput))) {
    return inputError = true;
  }
  else {
    verifiedInt = parseInt(userInput)
  }

  let intArray = [];
  intArray = Array.from({ length: verifiedInt + 1 }, (value, index) => index);

  let outputArray = [];
  for (let i = 0; i < intArray.length; i++) {
    if (intArray[i].toString().includes("3")) {
      outputArray.push('\'Wont you be my neighbor?\'');
    } else if (intArray[i].toString().includes("2")) {
      outputArray.push('\'Boop!\'');
    } else if (intArray[i].toString().includes("1")) {
      outputArray.push('\'Beep!\'');
    } else {
      outputArray.push(intArray[i]);
    }
    robotOutput = outputArray.join(", ").replace(/Wont/g, "Won't");
  }
  return robotOutput;
  
}


// UI Logic

