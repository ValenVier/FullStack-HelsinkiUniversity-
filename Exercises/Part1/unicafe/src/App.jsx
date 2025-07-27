import { useState } from 'react'

const Title = () => <h1>Give Feedback</h1>

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Count = ({ good, neutral, bad, total }) => <div>
      <h2>Statistics</h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {total}</p>
      <p>Average {total/3}</p>
      <p>Positive {good/total * 100} %</p>
    </div>

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

      <Count good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  )
}

export default App