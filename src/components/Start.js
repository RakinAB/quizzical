
export default function Start(props){
    return(
        <div className="startPage">
            <h1>Quizzical</h1>
            <h3>Test your knowledge!</h3>
            <button className='start' onClick={props.startQuiz}>Start Quiz</button>
        </div>
    )
}