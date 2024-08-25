export let index = 1;
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

async function getCharacter(id) {
    try{
       const character = await fetchData();
       const number = subtractForIndex(id);
    return character.results[number];
    }catch{
      console.error("error fetching character", error);
      throw error;
    }
   
  }



async function getCharacters() {
    return await fetchData();
}

function incrementIndex() {
    index++;
}
function decrementIndex() {
    index--;
}

function subtractForIndex(number) {
    if (index === 1) {
        return number;
    }
    let subtractionValue = 20 * (index - 1);
    return number - subtractionValue;
}
export default { getCharacter, getCharacters, incrementIndex, decrementIndex };