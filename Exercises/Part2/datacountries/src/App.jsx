import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

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

  return (
    <div>
      find countries <input value={filter} onChange={handleFilter} />
      <div>
        {
          countriesToShow.length === 1
            ? (
              <div>
                <h2>{countriesToShow[0].name.common}</h2>
                <div>Capital: {countriesToShow[0].capital}</div>
                <div>Area: {countriesToShow[0].area}</div>
                <h3>Languages:</h3>
                <ul>
                  {Object.values(countriesToShow[0].languages).map(lang =>
                    <li key={lang}>{lang}</li>
                  )}
                </ul>
                <img src={countriesToShow[0].flags.png} alt="flag" width="150" />
              </div>
            )
            : countriesToShow.length > 10
              ? 'Too many matches, specify another filter'
              : countriesToShow.map(c => (
                <div key={c.cca3}>{c.name.common}</div>
              ))
        }
      </div>
    </div>
  )
}

export default App
