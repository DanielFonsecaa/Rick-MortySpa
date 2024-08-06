import router from '../router.js';
import routes from '../routes.js';

export let singleId = 0;

function render(episodes, onClick) {

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
    const buttonDiv = document.createElement('div');
    buttonDiv.style = "display: flex; width: 100%; justify-content: center;";
    const button = document.createElement('button');
    button.className = "btn btn-danger";
    button.innerHTML = "Load More";
    buttonDiv.appendChild(button);
    container.appendChild(buttonDiv);
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