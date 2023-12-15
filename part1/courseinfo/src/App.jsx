

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
      <Part name={props.part1} exercise={props.exercises1} />
      <Part name={props.part2} exercise={props.exercises2} />
      <Part name={props.part3} exercise={props.exercises3} />
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
    <Header title={course}/>
    <Content part1={part1} part2={part2} part3={part3} exercise1={exercises1} exercise2={exercises2} exercise3={exercises3} />
    <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3}/>

    </>

  )
}

export default App