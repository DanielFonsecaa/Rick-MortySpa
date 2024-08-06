let index = 1;
//let characterArray = [];
//const searchInput = document.getElementById('searchInput');
//const searchButton = document.getElementById('searchButton');

async function fetchData() {

    const api = `https://rickandmortyapi.com/api/character?page=${index}`;
    const response = await fetch(api);
    const body = await response.json();
    if (!response.ok || body.Response === "False") {
        throw new Error(body.Error);
    }
   // characterArray = body.results;
    //console.log(characterArray[3].name);
    return { results: body.results, next: body.info.next };
}

async function getCharacter(index) {
    try {
        const characterData = await fetchData();
        return characterData.results[index];
    } catch {
        console.error("error fetching episode", error);
        throw error;
    }

}

async function getCharacters() {
    return await fetchData();
}

function incrementIndex() {
    index++;
}

/*
searchButton.addEventListener('click', () => {
    const searchQuery = searchInput.value.toLowerCase();
    const filteredCharacters = characters.filter(character => {
        return character[1].name.toLowerCase().includes(searchQuery);

    });
});
*/

export default { getCharacter, getCharacters, incrementIndex };