const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadCountries();

const displayCountries = data => {
    // console.log(data)
    const divContent = document.getElementById('countries');
    // for (const d of data){
    // console.log(d)
    // }
    data.forEach(d => {
        // console.log(d)
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h2>Name: ${d.name.common}</h2>
        <p>Capital: ${d.capital}</p>
        <p>Population: ${d.population} </p>
        <button onclick="loadCountryByName('${d.name.common}')">Show Details</button>
        `
        divContent.appendChild(div)
    })
}

const loadCountryByName = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    // console.log(name)
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(country => displayCountryDetails(country[0]))
}

const displayCountryDetails = details => {
    console.log(details)
    const countryDiv = document.getElementById('country-details')
    countryDiv.innerHTML = `
    <img width="200px" src="${details.flags.png}">
    <h2>Name: ${details.name.common}</h2>
    <p>Population: ${details.population}</p>
    `
}