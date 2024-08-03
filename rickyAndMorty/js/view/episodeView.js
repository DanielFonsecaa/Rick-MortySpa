function render(episodes, onClick) {

    const container = document.querySelector('#container');
    container.innerHTML = '<br>'; //removes the previous elements
    const list = document.createElement('div');
    list.className = `text-center`;


    episodes.forEach(({ name, air_date, episode, id }) => {
        const item = document.createElement('div');
        item.className = "card-box";
        item.style.fontSize = "x-small";
        item.innerHTML = `<div class="card text-white bg-dark mb-3" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${name}</h5>
                                <p class="card-text">
                                    <p>Lauched: ${air_date}</p>
                                    <p>Episode: ${episode}</p>
                                </p>
                                <a href="/episode/${id}" class="btn btn-primary">Go to single Episode</a>
                            </div>
                        </div>`;
        const br = document.createElement('br');

        list.appendChild(item);
        list.appendChild(br);
    });
    container.appendChild(list);
    const button = document.querySelector('#nextPageButton');
    button.onclick = onClick;
};

export default { render };