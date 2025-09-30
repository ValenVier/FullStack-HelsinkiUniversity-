const NewPersonForm = ({ 
  onSubmit, 
  nameValue, 
  onNameChange, 
  numberValue, 
  onNumberChange 
}) => (
  <form onSubmit={onSubmit}>
    <div>
      Name: <input 
        value={nameValue}
        onChange={onNameChange}
      />
    </div>
    <div>
      Number: <input 
        value={numberValue}
        onChange={onNumberChange}
      />
    </div>
    <div>
      <button type="submit">Add</button>
    </div>
  </form>
)

export default NewPersonForm