import router from "../router.js";
import routes from "../routes.js";
import characterService from "../service/characterService.js";
import { index } from "../service/characterService.js";
export let singleId = 0;

function render(character, next) {


    const container = document.querySelector("#container");
    container.innerHTML = '<br>'; //removes the previous elements
    const list = document.createElement('div');
    list.className = `text-center`;

    character.forEach(({ name, status, species, type, gender, origin, location, image, id }) => {
        const item = document.createElement('div');
        item.style.fontSize = "x-small";
        item.innerHTML = `<div id="info-${id}" class="card fullCard text-white bg-dark mb-3" style="width: 18rem;border: 2px solid black;">
        <img class="card-img-top" src="${image}" alt="CharacterImg" style="width:100%;" >
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">
                    <p>Status: ${status}</p>
                    <p>Species: ${species}</p>
                    <p>Type: ${type}</p>
                    <p>Gender: ${gender}</p>
                    <p>Origin: ${origin.name}</p>
                    <p>Location: ${location.name}</p>
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
        characterService.decrementIndex();
        const { results: response, next } = await characterService.getCharacters();
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
        characterService.incrementIndex();
        const { results: response, next } = await characterService.getCharacters();

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
                    console.log(id)
                    singleId = id;
                    const dinamicPath = routes.singleCharacter.path;
                    router.navigate(dinamicPath);
                }
            }
        })
    })

};



export default { render };



