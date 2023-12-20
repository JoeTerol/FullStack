import { useState } from 'react'


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [positive, setPositive] = useState(0)
  const [average, setAverage] = useState(0)
  
  const calculateStatistics = () => {
    const updatedTotal = good + neutral + bad
    setTotal(updatedTotal)

    const updatedAverage = (good - bad) / updatedTotal
    setAverage(updatedAverage)

    const updatedPositive = (good * 100) / total
    setPositive(updatedPositive)
  }


  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
    calculateStatistics()

  }
  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(updatedNeutral + good + bad)
    calculateStatistics()
  }
  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(updatedBad + good + neutral)
    calculateStatistics()
  }
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h1>stactitics</h1>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>total: {total}</p>
      <p>postive: {positive}</p>
      <p>average {average}</p>
    </div>
  )
}

export default App