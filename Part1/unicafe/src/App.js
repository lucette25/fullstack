import { useState } from 'react'

const Title=(props)=>{
  return <><h2>{props.text}</h2></>
}



const Button=(props)=>{
  return <>
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  </>
}

const StatisticLine=(props)=>{
  return <tr>
      <td>{props.text} </td>
      <td> {props.value}</td>
    </tr>
}

const Statistics=(props)=>{
  if (props.good+props.neutral+props.bad===0) {
    return(<div> 
      No feedback given 
     </div>)
     }
  return<>
      <table>
        <tbody>
          <StatisticLine text="Good" value={props.good}/>
          <StatisticLine text="Neutral" value={props.neutral} />
          <StatisticLine text="Bad" value={props.bad}/>
          <StatisticLine text="Good" value={props.good}/>
          <StatisticLine text="Neutral" value={props.neutral} />
          <StatisticLine text="Bad" value={props.bad}/>
          <StatisticLine text="All" value={props.good+props.neutral +props.bad}/>
          <StatisticLine text="Average" value={(props.good-props.bad)/(props.good+props.neutral +props.bad)}/>
          <StatisticLine text="Positive" value={((props.good)/(props.good+props.neutral +props.bad))*100+" %"} />
        </tbody>
      </table>
  </>
}
const App = () => {

  const title="Give a feedback"
  const stats="Statistics"
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //const [value, setValue] = useState(10)

  const setToValueB = newValue => setBad(newValue)
  
  const setToValueN = newValue =>setNeutral(newValue)
  

  const setToValueG = newValue => setGood(newValue)
  


 
     
      
  return (
    <div>
      <Title text={title}/>
      <Button handleClick={() => setToValueG(good+1)} text="Good" />
      <Button handleClick={() => setToValueN(neutral+1)} text="Neutral" />
      <Button handleClick={() => setToValueB(bad + 1)} text="Bad" />

      <Title text={stats}/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
      
      
    </div>
  )
}

export default App