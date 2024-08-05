function render(character, onClick) {


    const container = document.querySelector("#container");
    container.innerHTML = '<br>'; //removes the previous elements
    const list = document.createElement('div');
    list.className = `text-center`;

    character.forEach(({ name, status, species, type, gender, origin, location, image, id }) => {
        const item = document.createElement('div');
        item.style.fontSize = "x-small";
        item.innerHTML = `<div class="card text-white bg-dark mb-3" style="width: 18rem;border: 2px solid black;">
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
                    <a href="/character/${id}" class="btn btn-primary">Go to Character</a>
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



