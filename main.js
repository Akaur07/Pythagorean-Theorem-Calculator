// PYTHAGOREAN THEOREM CALCULATOR

// Button Click Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // INPUT
  let a = +document.getElementById("a-in").value;
  let b = +document.getElementById("b-in").value;

  // PROCESS
  let hypotenuse = Math.sqrt(a ** 2 + b ** 2);
  let msg = `c = ${hypotenuse}`;

  // OUTPUT
  document.getElementById("output").innerHTML = hypotenuse;
}
