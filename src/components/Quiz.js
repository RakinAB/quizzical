import { useState, useEffect } from "react";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(loading){
      fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium")
        .then((response) => response.json())
        .then((data) => {
          setQuestions(data.results || []);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
      }
  }, []);

  const renderQuestions = () => {
    return questions.map((question, index) => (
      <div key={index}>
        <h3>{question.question}</h3>
        {/* Render answer options based on question type */}
        {question.type === 'boolean' ? (
          <>
            <button>{question.correct_answer}</button>
            <button>{question.incorrect_answers[0]}</button>
          </>
        ) : (
          // Render multiple choice options
          question.incorrect_answers.map((answer, idx) => (
            <button key={idx}>{answer}</button>
          ))
        )}
      </div>
    ));
  };

  return (
    <div className="Quiz">
      {loading ? <div>Loading...</div> : renderQuestions()}
    </div>
  )
}
