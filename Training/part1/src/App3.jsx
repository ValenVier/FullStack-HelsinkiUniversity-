import { useState } from 'react'

//Event handling
/* const App = () => {
  const [ counter, setCounter ] = useState(0)


  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div>
      <div>{counter}</div>

      <button onClick={() => setCounter(counter +1)}>
        plus
      </button>
      <button onClick={() => setCounter(0)}> 
        zero
      </button>
    </div>
  )
} */

//An event handler is a function
/* const App = () => {
    const [counter, setCounter] = useState(0)


    const increaseByOne = () => setCounter(counter + 1)

    const setToZero = () => setCounter(0)

    return (
        <div>
            <div>{counter}</div>

            <button onClick={increaseByOne}>
                plus
            </button>

            <button onClick={setToZero}>
                zero
            </button>
        </div>
    )
} */

//Passing state - to child components
/* const Display = (props) => {
    return (
        <div>{props.counter}</div>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.onClick}>
            {props.text}
        </button>
    )
}

const App = () => {
    const [counter, setCounter] = useState(0)


    const increaseByOne = () => setCounter(counter + 1)
    const decreaseByOne = () => setCounter(counter - 1)
    const setToZero = () => setCounter(0)

    return (
        <div>
            <Display counter={counter} />

            <Button
                onClick={increaseByOne}
                text='plus'
            />
            <Button
                onClick={setToZero}
                text='zero'
            />
            <Button
                onClick={decreaseByOne}
                text='minus'
            />
        </div>
    )
}
 */
//Refactoring the components
const Display = ({ counter }) => <div>{counter}</div>
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
    const [counter, setCounter] = useState(0)


    const increaseByOne = () => setCounter(counter + 1)
    const decreaseByOne = () => setCounter(counter - 1)
    const setToZero = () => setCounter(0)

    return (
        <div>
            <Display counter={counter} />

            <Button
                onClick={increaseByOne}
                text='plus'
            />
            <Button
                onClick={setToZero}
                text='zero'
            />
            <Button
                onClick={decreaseByOne}
                text='minus'
            />
        </div>
    )
}

export default App