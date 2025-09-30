const Filter = ({ value, onChange }) => (
  <div>
    Filter by:  
    <input 
      value={value}
      onChange={onChange}
    />
  </div>
)

export default Filter