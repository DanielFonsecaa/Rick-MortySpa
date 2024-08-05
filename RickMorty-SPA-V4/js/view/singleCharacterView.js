function render(character) {

    const buttonContainer = document.querySelector("#button-container");
    const container = document.querySelector('#container');
    const div = document.createElement('div');

    container.innerHTML = ''; //removes the previous elements
    buttonContainer.innerHTML = "";
    
    console.log(character);
        const elem = document.createElement('div');
        elem.className = `text-center-home`;
        elem.style = "text-align: center;"
        elem.innerHTML = `<div class="card text-white bg-dark mb-3" style="width: 18rem;border: 2px solid black;">
        <img class="card-img-top" src="${character.image}" alt="CharacterImg" style="width:100%;" >
            <div class="card-body">
                <h5 class="card-title">${character.name}</h5>
                <p class="card-text">
                    <p>Status: ${character.status}</p>
                    <p>Species: ${character.species}</p>
                    <p>Type: ${character.type}</p>
                    <p>Gender: ${character.gender}</p>
                    <p>Origin: ${character.origin.name}</p>
                    <p>Location: ${character.location.name}</p>
                    </p>
            </div>
    </div>`
        if (container.childElementCount > 1) {
            container.removeChild(container.lastChild);
        }
        container.appendChild(elem);  

    container.appendChild(div);
}

export default { render };