import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({ questions, setQuestions }) {
  
  function handleDelete(deletedQuestion){
    const updatedQuestions = questions.filter(question => question.id !== deletedQuestion.id)
    setQuestions(updatedQuestions)
  }

  function handleAnswerChange(updatedQuestion){
    const updatedQuestions = questions.map(question => {
      if (question.id === updatedQuestion.id) {return updatedQuestion}
      else {return question}
    })
    setQuestions(updatedQuestions)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions !== "" && questions.map(question => (
        <QuestionItem 
          key={question.id}
          question={question}
          handleDelete={handleDelete}
          handleEdit={handleAnswerChange}/>
      ))}</ul>
    </section>
  );
}

export default QuestionList;
