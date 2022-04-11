import { useState } from 'react'


const Button=(props)=>{
  return <>
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  </>
}

const Display=(props)=>{
  return <>
        <p>{props.selected}</p>
        <p>has {props.selectedPoint} votes</p>
  </>
}

const MostVote=(props)=>{
  
  if(Math.max(...props.points)===0){
    return <>
          <p>No anecdote is voted</p>
    </>
  }
   return <>
            <Display selected={props.anecdotes[props.points.indexOf(Math.max(...props.points))]} selectedPoint={Math.max(...props.points)}/>
          </>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
 
  const [selected, setSelected] = useState(0)
  const [points, setVote] = useState(Array(anecdotes.length).fill(0))



  const setToValue = newValue =>  setSelected(newValue)

  const setToValueVote = newValue => { 
     const copy = [...points]
     copy[newValue] += 1 
    setVote(copy)
  }
  

  
  return (
    <div>
      
      <Display selected={anecdotes[selected]} selectedPoint={points[selected]}/>
      
      <div>
        <Button text={"Vote"} handleClick={() => setToValueVote(selected)}/>

        <Button text={"Next anecdote"} handleClick={() => setToValue(Math.floor(Math.random() * anecdotes.length) ) }/>
      </div>
      
      <h2>Annecdote with most vote</h2>
      <MostVote points={points} anecdotes={anecdotes}/>

    </div>
  )
}

export default App