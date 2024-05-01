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
      const answerId = answer(questionId); // Get the corresponding answer ID
      const answerEl = document.getElementById(answerId); // Find the answer element
      answerEl.classList.toggle("show-answers")

      //changing aria-hidden and aria-expanded for semantics
      if(answerEl.classList.contains("show-answers")){
        answerEl.setAttribute("aria-hidden", "false");
        answerEl.setAttribute("aria-expanded","true")
      }
      else{
        answerEl.setAttribute('aria-hidden', "true");
        answerEl.setAttribute("aria-expanded","false")
      }

      //changing button background
      const showEl=document.getElementById("showbutton-"+ questionId.split("-")[1])
      showEl.classList.toggle("btn-bg")
    });
  });
