import router from "../router.js";
import routes from "../routes.js";

export let singleId = 0;

function render(location, onClick) {

    const container = document.querySelector('#container');

    container.innerHTML = '<br>'; //removes the previous elements
    const list = document.createElement('div');
    list.className = `text-center`;

    location.forEach(({ name, type, dimension, id }) => {
        const item = document.createElement('div');
        item.style.fontSize = "x-small";
        item.innerHTML = `<div class="card text-white bg-dark mb-3" style="width: 18rem;border: 2px solid black;">
                            <div class="card-body">
                                <h5 class="card-title">${name}</h5>
                                <p class="card-text">
                                    <p>Type: ${type}</p>
                                    <p>Dimension: ${dimension}</p>
                                </p>
                                <button id="info-${id}" class="btn btn-primary moreInfoBtn">More Info</button>
                            </div>
                        </div>`;


        list.appendChild(item);
    });
    container.appendChild(list);
    const button = document.querySelector('#nextPageButton');
    button.onclick = onClick;

    const moreInfoButton = document.getElementsByClassName(`moreInfoBtn`); // Get specific button

    [...moreInfoButton].forEach(elem => {
        elem.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains('moreInfoBtn')) {
                const idMatch = target.id.match(/info-(\d+)/);
                if (idMatch) {
                    const id = idMatch[1];
                    singleId = id;
                    const dinamicPath = routes.singleLocation.path;
                    router.navigate(dinamicPath);
                }
            }
        })
    })
};

export default { render };