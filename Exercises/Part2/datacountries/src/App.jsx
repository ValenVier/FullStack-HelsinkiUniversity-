import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilter = (event) => setFilter(event.target.value)

  const countriesToShow = countries.filter(c =>
    c.name.common.toLowerCase().includes(filter.toLowerCase())
  )

  const handleShow = (country) => {
    setSelectedCountry(country)
  }

  let display = "";

  if (selectedCountry) {
    display = (
      <div>
        <h2>{selectedCountry.name.common}</h2>
        <div>capital {selectedCountry.capital}</div>
        <div>area {selectedCountry.area}</div>
        <h3>languages:</h3>
        <ul>
          {Object.values(selectedCountry.languages).map(lang =>
            <li key={lang}>{lang}</li>
          )}
        </ul>
        <img src={selectedCountry.flags.png} alt="flag" width="150" />
      </div>
    )
  } else if (countriesToShow.length > 10) {
    display = 'Too many matches, specify another filter'
  } else {
    display = countriesToShow.map(c => (
      <div key={c.cca3}>
        {c.name.common} <button onClick={() => handleShow(c)}>show</button>
      </div>
    ))
  }

  return (
    <div>
      find countries <input value={filter} onChange={handleFilter} />
      {display}
    </div>
  )
}

export default App
