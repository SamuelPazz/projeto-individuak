const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");
const ID_USUARIO = Number(sessionStorage.getItem("ID_USUARIO"));

import questions from "./questions.js";

let idQuiz = 1;
let indexAtual = 0;
let questoesAcertos = 0;

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  indexAtual = 0;
  questoesAcertos = 0;
  loadQuestion();
};

function nextQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") {
    questoesAcertos++;
  }

  if (indexAtual < questions.length - 1) {
    indexAtual++;
    loadQuestion();
  } else {
    finish();
  }
}

function finish() {
  textFinish.innerHTML = ``
  if(questoesAcertos <= 5){
    textFinish.innerHTML += `Parece que você curte muito o automobilismo😓`
  } else if (questoesAcertos <= 10){
    textFinish.innerHTML += `Você gosta muito do automobilismo🚗`
  } else if (questoesAcertos <=16){
    textFinish.innerHTML += `Ayrton senna??????🏎️`
  }
  textFinish.innerHTML += `<br>você acertou ${questoesAcertos} de ${questions.length}`;
  content.style.display = "none";
  contentFinish.style.display = "flex";

  fetch(`quizRoute/registrar/${ID_USUARIO}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify ({
      idQuizServer: idQuiz,
      idUsuarioServer : ID_USUARIO,
      acertosServer: questoesAcertos
    })
  }).then(res => {
    console.log(res);
  })
  console.log(questoesAcertos);
}

function loadQuestion() {
  spnQtd.innerHTML = `${indexAtual + 1}/${questions.length}`;
  const item = questions[indexAtual];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

loadQuestion();
