// 1;A 2;C 3;B 4;D 5;D 6;E 7;A 8;C 9;B 10;D
const buttons = document.querySelectorAll(".check");
const verificar = document.querySelector("#verificar");
const correct_display = document.querySelector("#correct");

const correct_answers = [
  "1A",
  "2C",
  "3B",
  "4D",
  "5D",
  "6E",
  "7A",
  "8C",
  "9B",
  "10D",
];

const answers = [];
let amount_correct = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "lightblue";

    const question =
      event.target.parentNode.parentNode.querySelector(".question").textContent;
    const answer = event.target.classList[1];

    answers.push(question + answer);
  });
});

verificar.addEventListener("click", (event) => {
  answers.sort(function (a, b) {
    const questionA = Number(a[0]);
    const questionB = Number(b[0]);

    if (questionA < questionB) {
      return -1;
    }
    if (questionA > questionB) {
      return 1;
    }
  });

  correct_answers.forEach((corA, i) => {
    if (corA === answers[i]) {
      amount_correct += 1;
      c;
    }
  });

  correct_display.style.display = "grid";
  correct_display.innerHTML = `<p>Respostas corretas: ${amount_correct}</p>`;
  correct_display.style.backgroundColor = "lightgreen";
});
