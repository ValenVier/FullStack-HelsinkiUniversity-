import { useState } from 'react'

const Button = ({ text, onClick }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Anecdote = ({ points, anecdotes }) => {

  const highestValue = Math.max(...points);
  const index = points.findIndex((value) => value === highestValue);
  //console.log(index)

  if (highestValue === 0) {
    return (
      <div>
        <h2>No anecdotes with votes</h2>
      </div>
    )
  }

  return (
    <div>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[index]}</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  //console.log(points)

  const [selected, setSelected] = useState(0)

  const setRandomAnecdote = () => {
    //console.log(Math.floor(Math.random() * anecdotes.length))
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const setNewPoint = () => {
    const copyPointsAr = [...points]
    copyPointsAr[selected] += 1
    setPoints(copyPointsAr)
    //console.log(points)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>This anecdote has {points[selected]} votes.</p>
      <Button text="Vote" onClick={setNewPoint} />
      <Button text="Next Anecdote" onClick={setRandomAnecdote} />
      <Anecdote points={points} anecdotes={anecdotes} />
    </div>
  )
}

export default App