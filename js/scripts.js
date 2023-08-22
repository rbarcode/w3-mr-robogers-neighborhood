// Business Logic

function robotTranslator(userInput) {

  let verifiedInt = parseInt(userInput);
  let robotOutput;
 
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

window.addEventListener("load", submit);
window.addEventListener("reset", enableSubmission);
window.addEventListener("mousemove", eyeballTracker);

function submit() {
  const form = document.getElementById("talk-to-robot");
  form.addEventListener("submit", handleFormSubmission);
}

function enableSubmission() {

  if (document.getElementById("submit-button").disabled === true) {
    const p = document.getElementById("new-p");
    p.remove();
  }

  document.getElementById("submit-button").disabled = false;
}

function handleFormSubmission(event) {
  event.preventDefault();

  let userInput = document.getElementById("number").value;
  const container = document.getElementById("display-output");
  const p = document.createElement("p");
  p.setAttribute("id", "new-p");
  p.classList.add("p-results");
 
  const uiOutput = robotTranslator(userInput);
  
  p.innerText = uiOutput;
  container.append(p);
  
  document.getElementById("submit-button").disabled = true;

  return p;

}

function eyeballTracker() {
  let eye = document.querySelectorAll(".eyeball");
  let x = event.clientX * 100 / window.innerWidth + "%";
  let y = event.clientY * 100 / window.innerHeight + "%";
  for (let i = 0; i < 2; i++) {
    eye[i].style.left = x;
    eye[i].style.top = y;
    eye[i].style.transform = "translate(-"+x+", -"+y+")";
  }
}
