import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionsList, setQuestionsList ] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(resp => resp.json())
      .then(data => setQuestionsList(data))
  },
    [])

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm questions={questionsList} setQuestions={setQuestionsList}/> : <QuestionList questions={questionsList} setQuestions={setQuestionsList}/>}
    </main>
  );
}

export default App;
