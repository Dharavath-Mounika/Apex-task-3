function checkAnswer(answer, resultId, button) {
  const correctAnswers = {
    quizResult1: "Paris",
    quizResult2: "8",
    quizResult3: "CSS"
  };

  const result = document.getElementById(resultId);
  const buttons = button.parentElement.querySelectorAll("button");

  // Reset styles for all buttons in this question
  buttons.forEach(btn => {
    btn.classList.remove("correct", "wrong");
  });

  if (answer === correctAnswers[resultId]) {
    result.textContent = "✅ Correct!";
    result.style.color = "green";
    button.classList.add("correct");
  } else {
    result.textContent = "❌ Wrong answer.";
    result.style.color = "red";
    button.classList.add("wrong");
  }
}

async function fetchJoke() {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    document.getElementById("jokeText").textContent =
      `${data.setup} - ${data.punchline}`;
  } catch (error) {
    document.getElementById("jokeText").textContent = "Error fetching joke.";
    console.error(error);
  }
}
