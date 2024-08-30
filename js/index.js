import router from './router.js';
import episodeView from './view/episodeView.js';
import characterView from './view/characterView.js';
import locationView from './view/locationView.js';

let toView = "";

addEventListener('DOMContentLoaded', () => {
    router.init();

    const toggleButton = document.getElementById('toggleButton');
    const elementToToggle = document.getElementById('navbarSupportedContent');
    let isOpen = false;

    toggleButton.addEventListener('click', () => {
        isOpen = !isOpen;
        elementToToggle.style.display = isOpen ? 'block' : 'none';
    });

    const searchBtn = document.querySelector("#searchBtn")
    const inputBtn = document.querySelector("#inputBtn")

    searchBtn.addEventListener('click', async () => {
        const query = inputBtn.value;
        if (query !== "") {
            
            try {
                const {results: data, next} = await fetchNewData(query);
                console.log(data)
                if(toView === "character") characterView.render(data, next);
                if(toView === "location") locationView.render(data, next);
                if(toView === "episode") episodeView.render(data, next);
                inputBtn.value = "";
            } catch (error){
                console.log(error, "error fetching input source or wharever")
                throw error;
            }
        }
    })

    async function fetchNewData(query) {
        try {
            const api = `https://rickandmortyapi.com/api/character/?name=${query}`
            const response = await fetch(api);
            const body = await response.json();
            if (!response.ok || body.Response === "False") {
                const api = `https://rickandmortyapi.com/api/location/?name=${query}`
                const response = await fetch(api);
                const body = await response.json();
                if (!response.ok || body.Response === "False") {
                    const api = `https://rickandmortyapi.com/api/episode/?name=${query}`
                    const response = await fetch(api);
                    const body = await response.json();
                    if (!response.ok || body.Response === "False") {
                        console.log(error, "error fetching any data")
                    }
                    toView = "episode";
                    return { results: body.results, next: body.info.next };
                }

                toView = "location";
                return { results: body.results, next: body.info.next };
            }

            toView = "character";
            return { results: body.results, next: body.info.next };
        } catch {
            console.log("Error, is not an character", error)

        }
    }
});
