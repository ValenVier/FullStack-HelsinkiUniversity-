import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import CountryList from './components/CountryList'
import Country from './components/Country'

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

  const handleFilterChange = (event) => {
    const newFilter = event.target.value
    setFilter(newFilter)
    setSelectedCountry(null)
  }

  const handleShow = (country) => {
    setSelectedCountry(country)
  }

  const countriesToShow = countries.filter(c =>
    c.name.common.toLowerCase().includes(filter.toLowerCase())
  )

  // Auto-select if only one country matches
  useEffect(() => {
    if (countriesToShow.length === 1 && !selectedCountry) {
      setSelectedCountry(countriesToShow[0])
    }
  }, [countriesToShow, selectedCountry])

  let display = ""

  if (selectedCountry) {
    display = <Country country={selectedCountry} />
  } else if (countriesToShow.length > 10) {
    display = 'Too many matches, specify another filter'
  } else {
    display = <CountryList countries={countriesToShow} onShow={handleShow} />
  }

  return (
    <div>
      <h1>Country Information</h1>
      <Filter value={filter} onChange={handleFilterChange} />
      {display}
    </div>
  )
}

export default App