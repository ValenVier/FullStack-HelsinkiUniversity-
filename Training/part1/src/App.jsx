const Hello = () => { return (<div><p>Hello world</p></div>) }/* New component, could be called in the app component */
const Hello2 = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}/* New component with props */

const Hello3 = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age}</p>
    </div>
  )
}/* New component with props */

const App = () => {
  const name = 'Peter'
  const age = 10

  const friends = [
    {name:'Anna', age: 4},
    {name:'Janet', age: 25},
  ]

  const friends2 = [
    'Colen', 'Nanes'
  ]

  return (
    <div>
      <h1>Greetings</h1>
      <Hello />

      <Hello2 name='George' /* tag with props */ />
      <Hello2 name='Daisy' /* tag with props */ />

      <Hello3 name='Maya' age={26 + 10}/>
      <Hello3 name={name} age={age}></Hello3>

      {/* Following code will show an error */}
      {/* <p>{friends[0]}</p>
      <p>{friends[1]}</p> */}

      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>

      <p>{friends2}</p>

    </div>
  )
}

export default App