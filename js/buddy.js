const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}

loadBuddies();

const displayBuddies = data => {
    // console.log(data)
    const buddies = data.results;
    // console.log(data.results)
    const buddys = document.getElementById('buddys')
    for (const buddy of buddies) {
        // console.log(buddy)
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
        Email: ${buddy.email}`;
        buddys.appendChild(p)
    }
}