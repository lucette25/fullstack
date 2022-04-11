import React from 'react'

const Header=(props)=>{
    return (<>
    <h2>{props.course}</h2>
    </>
    )
    }
   const Content =(props)=>{
     
      return (
        <>
          <div>
          {props.parts.map(part => 
            <Part key={part.id} part={part.name} exercises={part.exercises} />
          )}
          </div>
        </>
      )
    }
    const Part=(props)=>{
      return (
        <>
          <p>
              {props.part} {props.exercises}
          </p>
        </>
        )
  
    }
    
   
     
    
      const Total=(props)=>{
        const total =props.parts.reduce((s, p) => {
           return s + p.exercises},0)
        return <div>Total of {total} exercises</div>
        }
  
  
  
  const Course=(props)=>{
    return(<>
    
      <Header course={props.course.name}/>
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts}/>
    </>)
  }

  export default Course;