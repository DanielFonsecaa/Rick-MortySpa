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
                                <button id="moreInfoBtn-${id}" class="btn btn-primary">More Info</button>
                            </div>
                        </div>`;

        /*
        const button = document.getElementById(`moreInfoBtn-${id}`); // Get specific button
        button.addEventListener('click', () => onClick(id));
        */

        list.appendChild(item);
    });
    container.appendChild(list);
    const button = document.querySelector('#nextPageButton');
    button.onclick = onClick;

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