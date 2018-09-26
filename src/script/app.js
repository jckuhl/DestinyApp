// const headers = {
//     'X-API-Key': DESTINY_API
// }

// /Destiny2/SearchDestinyPlayer/{membershipType}/{displayName}/
const PATH = `https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/all/PapaSmurf439/`;

fetch('http://localhost:3000/api')
    .then(data => data.json())
    .then(json => {
        const API = json.body;
        fetch(PATH, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'X-API-Key': API
            }
        })
        .then(data => data.json())
        .then(json => console.log(json))
        .catch(error => console.error(error))
    })
    .catch(error => console.error(error));