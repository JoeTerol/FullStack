import { useState } from "react";
const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};
const StaticLine = (props) => {
  return (
    <table>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </table>
  );
};
const Statics = (props) => {
  const { good, neutral, bad, total, positive, average } = props;
  if (good == 0 && neutral == 0 && bad == 0 && positive == 0 && average == 0) {
    return <h2>No FeedBack Given</h2>;
  }
  return (
    <>
      <h1>stactitics</h1>
      <StaticLine text={"Good: "} value={good} />
      <StaticLine text={"Neutral: "} value={neutral} />
      <StaticLine text={"Bad: "} value={bad} />
      <StaticLine text={"Total: "} value={total} />
      <StaticLine text={"Positive: "} value={positive + " %"}/>
      <StaticLine text={"Average: "} value={average} />
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

    if (updatedTotal > 0) {
      const updatedAverage = (good - bad) / updatedTotal;
      const updatedPositive = (good * 100) / updatedTotal;

      setAverage(updatedAverage);
      setPositive(updatedPositive);
    } else {
      setAverage(0);
      setPositive(0);
    }
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
        <Button text="good" onClick={handleGood} />
        <Button text="neutral" onClick={handleNeutral} />
        <Button text="bad" onClick={handleBad} />
      </div>
      <Statics
        good={good}
        positive={positive}
        bad={bad}
        neutral={neutral}
        average={average}
        total={total}
      />
    </>
  );
};

export default App;
//joe