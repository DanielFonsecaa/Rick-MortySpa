let index = 1;
async function fetchData() {

    const api = `https://rickandmortyapi.com/api/character?page=${index}`;
    const response = await fetch(api);
    const body = await response.json();
    if (!response.ok || body.Response === "False") {
        throw new Error(body.Error);
    }

    return { results: body.results, next: body.info.next };
}

async function getCharacter(index) {
    const characterData = await fetchData();
    return characterData.results[index];
}

async function getCharacters() {
    return await fetchData();
}

function incrementIndex() {
    index++;
}
export default { getCharacter, getCharacters, incrementIndex };