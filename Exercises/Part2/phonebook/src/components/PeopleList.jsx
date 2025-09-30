const PeopleList = ({ persons, onDelete }) => (
  <ul>
    {persons.map(person => 
      <li key={person.id}>
        {person.name} {person.number} &nbsp;
        <button onClick={() => onDelete(person.id)}>delete</button>
      </li>
    )}
  </ul>
)


export default PeopleList