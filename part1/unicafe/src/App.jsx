import { useState } from "react";

const Statics = (props) => {
  return (
    <>
      <h1>stactitics</h1>
      <p>good: {props.good}</p>
      <p>neutral: {props.neutral}</p>
      <p>bad: {props.bad}</p>
      <p>total: {props.total}</p>
      <p>postive: {props.positive}</p>
      <p>average {props.average}</p>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);
  const [average, setAverage] = useState(0);

  const calculateStatistics = () => {
    const updatedTotal = good + neutral + bad;
    setTotal(updatedTotal);

    const updatedAverage = (good - bad) / updatedTotal;
    setAverage(updatedAverage);

    const updatedPositive = (good * 100) / total;
    setPositive(updatedPositive);
  };

  const handleGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setTotal(updatedGood + neutral + bad);
    calculateStatistics();
  };
  const handleNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(updatedNeutral + good + bad);
    calculateStatistics();
  };
  const handleBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setTotal(updatedBad + good + neutral);
    calculateStatistics();
  };
  return (
    <>
      <div>
        <h1>give feedback</h1>
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
      </div>
      <Statics
        good={good}
        positive={positive}
        bad={bad}
        neutral={neutral}
        average={average}
      />
    </>
  );
};

export default App;
