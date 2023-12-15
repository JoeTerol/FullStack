

const Header = (props) => {
  return (
    <>
      <h1>
        {props.title}
      </h1>
    </>
  )
} 
const Content = (props) => {
  
  return (
    <>
      <Part name={props.part1.name} exercises={props.part1.exercises} />
      <Part name={props.part2.name} exercises={props.part2.exercises} />
      <Part name={props.part3.name} exercises={props.part3.exercises} />
    </>
  )
}
const Part = (props) => {
  return (
    <p>{props.name} {props.exercise} </p>
  )
}
const Total = (props) => {
  return (
    <p>
      Number of exercises { props.exercise1 + props.exercise2 + props.exercise3 }
    </p>
  )
}





const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
    <Header title={course}/>
    <Content part1={part1} part2={part2} part3={part3}  />
    <Total exercise1={part1.exercises} exercise2={part2.exercises} exercise3={part3.exercises}/>

    </>

  )
}

export default App