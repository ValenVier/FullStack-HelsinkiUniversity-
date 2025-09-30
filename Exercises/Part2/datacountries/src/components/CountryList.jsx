const CountryList = ({ countries, onShow }) => {
    return (
        <div>
            {countries.map(country =>
                <div key={country.cca3}>
                    {country.name.common} <button onClick={() => onShow(country)}>show</button>
                </div>
            )}
        </div>
    )
}

export default CountryList