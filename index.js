function answer(id) {
    if (id === "question-1" || id === "showbutton-1") {
      return "answer-1";
    }
    if (id === "question-2" || id === "showbutton-2") {
      return "answer-2";
    }
    if (id === "question-3" || id === "showbutton-3") {
      return "answer-3";
    }
    if (id === "question-4" || id === "showbutton-4") {
      return "answer-4";
    }
  }
  
  // Add event listeners to all elements with class "questions"
  const questionEl = document.querySelectorAll(".questions");
  questionEl.forEach((question) => {
    question.addEventListener("click", (event) => {
      event.preventDefault()
      const questionId = question.id; // Get the ID of the clicked question
      console.log(questionId);
      const answerId = answer(questionId); // Get the corresponding answer ID
      const answerEl = document.getElementById(answerId); // Find the answer element
      answerEl.classList.toggle("show-answers")
      const showEl=document.getElementById("showbutton-"+ questionId.split("-")[1])
      showEl.classList.toggle("btn-bg")
    });
  });
