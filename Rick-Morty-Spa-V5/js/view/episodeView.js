import router from '../router.js';
import routes from '../routes.js';
import episodeService from '../service/episodeService.js';
import { index } from "../service/episodeService.js";

export let singleId = 0;

function render(episodes, next) {

    const container = document.querySelector('#container');
    container.innerHTML = '<br>'; //removes the previous elements

    const list = document.createElement('div');
    list.className = `text-center`;

    episodes.forEach(({ name, air_date, episode, id }) => {
        const item = document.createElement('div');
        item.className = "card-box";
        item.style.fontSize = "x-small";
        item.innerHTML = `<div class="card text-white bg-dark mb-3" style="width: 18rem; border: 2px solid black;">
                            <div class="card-body">
                                <h5 class="card-title">${name}</h5>
                                <p class="card-text">
                                    <p>Lauched: ${air_date}</p>
                                    <p>Episode: ${episode}</p>
                                </p>
                                <button id="info-${id}" class="btn btn-primary moreInfoBtn">More Info</button>
                            </div>
                        </div>`;


        list.appendChild(item);
    });
    container.appendChild(list);

    const pagination = document.createElement('div');

    const navPag = document.createElement('nav');
    navPag.ariaLabel = "Page navigation example"
    const ul = document.createElement('ul');
    ul.className = "pagination justify-content-center"
    const liPrev = document.createElement('li');
    liPrev.className = "page-item"
    const liActual = document.createElement('li');
    liActual.className = "page-item"
    const liNext = document.createElement('li');
    liNext.className = "page-item"

    const prevBtn = document.createElement('button')
    prevBtn.className = "previous-page page-link disabled"
    if(index > 1) prevBtn.className = "previous-page page-link"
    prevBtn.innerHTML = "Previous"
    prevBtn.addEventListener('click', async () => {
        episodeService.decrementIndex();
        const { results: response, next } = await episodeService.getEpisodes();
        render(response, next);
    });

    const actualBtn = document.createElement('button')
    actualBtn.className = "actual-page page-link"
    actualBtn.innerHTML = `${index}`

    const nextBtn = document.createElement('button')
    nextBtn.className = "next-page page-link disabled"
    if (next) {
        nextBtn.className = "next-page page-link"
    }

    nextBtn.innerHTML = "Next"
    nextBtn.addEventListener('click', async () => {

        if (nextBtn.disabled || liNext.classList.contains('disabled')) {
            console.log("The button is disabled, doing nothing.");
            return;
        }
        episodeService.incrementIndex();
        const { results: response, next } = await episodeService.getEpisodes();

        render(response, next);

        if (!next) {
            console.log("No more pages, disabling the button.");
            nextBtn.disabled = true;
            liNext.classList.add('disabled');
        }
    });

    liPrev.appendChild(prevBtn);
    liActual.appendChild(actualBtn);
    liNext.appendChild(nextBtn);

    ul.appendChild(liPrev)
    ul.appendChild(liActual)
    ul.appendChild(liNext)

    navPag.appendChild(ul)
    pagination.appendChild(navPag)

    container.appendChild(pagination);
    
    
    
    const moreInfoButton = document.getElementsByClassName(`moreInfoBtn`); // Get specific button

    [...moreInfoButton].forEach(elem => {
        elem.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains('moreInfoBtn')) {
                const idMatch = target.id.match(/info-(\d+)/);
                if (idMatch) {
                    const id = idMatch[1];
                    singleId = id;
                    console.log(singleId); // Do something with the extracted id
                    console.log(routes.singleEpisode.path + id)
                    const dinamicPath = routes.singleEpisode.path;
                    router.navigate(dinamicPath);
                }
            }
        })
    })
    /*
    container.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName === 'BUTTON') {
          const episodeId = target.dataset.episodeId;
          onClick(episodeId);
        }
      });
      */
};

export default { render };