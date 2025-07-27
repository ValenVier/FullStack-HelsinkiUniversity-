import { useState } from 'react'

const Title = () => <h1>Give Feedback</h1>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({ good, neutral, bad, total }) => {
  if (total === 0) {
    return (<div>
      <h2>Statistics</h2>
      <p>No feedback given</p>
    </div>)
  }

  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="All" value={total} />
        <StatisticLine text="Average" value={((good - bad) / total).toFixed(1)} />
        <StatisticLine text="Positive" value={((good / total).toFixed(3) * 100) + ' %'} />
      </tbody>
    </table>
    </div >
  )
}

const StatisticLine = ({ text, value }) => (
  //console.log(text, value)
  <tr><td>{text}</td><td>{value}</td></tr>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [total, setTotal] = useState(0)

  const setToValue = (newValue, setFunction) => {
    //console.log('value now', newValue)
    //console.log('setFunction', setFunction)
    setFunction(newValue)
    setTotal(total + 1);
  }

  return (
    <div>
      <Title />

      <Button onClick={() => setToValue(good + 1, setGood)} text="Good" />
      <Button onClick={() => setToValue(neutral + 1, setNeutral)} text="Neutral" />
      <Button onClick={() => setToValue(bad + 1, setBad)} text="Bad" />

      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App