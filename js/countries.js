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
        console.log(d)
        const div = document.createElement('div');
        div.innerHTML = `
        <img src=""></>
        <h2>Name: ${d.name.common}</h2>
        <p>Capital: ${d.capital}</p>
        <p>Population: ${d.population}</p>
        `
        divContent.appendChild(div)
    })
}