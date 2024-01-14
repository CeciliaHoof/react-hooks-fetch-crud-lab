import React from "react";

function QuestionItem({ question, handleDelete, handleEdit }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteClick(){
    fetch(`http://localhost:4000/questions/${question.id}`,{
      method: 'DELETE',
    })
      .then(resp => resp.json())
      .then(() => handleDelete(question))
  }

  function handleAnswer(e){
    const newIndex = parseInt(e.target.value)
    fetch(`http://localhost:4000/questions/${question.id}`,{
      method: 'PATCH',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        correctIndex: newIndex
      })
    })
      .then(resp => resp.json())
      .then(data => handleEdit(data))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleAnswer}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
