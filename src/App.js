import { useEffect, useState } from 'react';
import './App.css';
import Start from "./components/Start"
import Quiz from "./components/Quiz"

export default function App() {

  const [start, setStart] = useState(false)

  function startQuiz(){
    setStart(true);
  }
  return (
    <main className="App">
      {
        start
          ?
          //Actual Test
          <Quiz />
          :
          //Start Page
          <Start 
            startQuiz ={startQuiz}
          />
      }
    </main>
  )
}

