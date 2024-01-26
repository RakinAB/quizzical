import { useState } from 'react';
import './App.css';
import Start from "./components/Start"

export default function App() {

  const [start, setStart] = useState(false)


  function startQuiz(){
    setStart(true)
  }
  return (
    <main className="App">
      {
        start
          ?
          //Actual Test
          <div className="Quiz">
            <h1>Test</h1>
          </div>
          :
          //Start Page
          <Start 
            startQuiz ={startQuiz}
          />
      }
    </main>
  )
}

