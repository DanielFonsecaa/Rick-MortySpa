export let index = 1;
async function fetchData() {
    const api = `https://rickandmortyapi.com/api/location?page=${index}`;
    const response = await fetch(api);
    const body = await response.json();
    if (!response.ok || body.Response === "False") {
        throw new Error(body.Error);
    }
    return {results: body.results, next: body.info.next};
}
async function getLocation(id) {
    try{
        const location = await fetchData();
        const number = subtractForIndex(id);
        return location.results[number];
    }catch{
      console.error("error fetching location", error);
      throw error;
    }
   
}

async function getLocations() {
    return await fetchData();
}

function incrementIndex(){
    index++;
}
function decrementIndex(){
    index--;
}
function subtractForIndex(number) {
    if (index === 1) {
        return number;
    }
    let subtractionValue = 20 * (index - 1);
    return number - subtractionValue;
}
export default { getLocation, getLocations,incrementIndex,decrementIndex };