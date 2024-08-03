let index = 1;
async function fetchData() {
  
  const api = `https://rickandmortyapi.com/api/episode?page=${index}`;
  const response = await fetch(api);
  const body = await response.json();
  if (!response.ok || body.Response === "False") {
    throw new Error(body.Error);
  }

  return { results: body.results, next: body.info.next };
}

async function getEpisode(index) {
  const character = await fetchData();
  return character.results[index];
}

async function getEpisodes() {
  return await fetchData();
}

function incrementIndex() {
  index++;
};
export default { getEpisode, getEpisodes, incrementIndex };