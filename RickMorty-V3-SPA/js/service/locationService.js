let index = 1;
async function fetchData() {
    const api = `https://rickandmortyapi.com/api/location?page=${index}`;
    const response = await fetch(api);
    const body = await response.json();
    if (!response.ok || body.Response === "False") {
        throw new Error(body.Error);
    }
    return {results: body.results, next: body.info.next};
}
async function getLocation(index) {
    const location = await fetchData();
    return location[index];
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

export default { getLocation, getLocations,incrementIndex,decrementIndex };