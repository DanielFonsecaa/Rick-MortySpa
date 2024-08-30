import router from "../router.js";
import routes from "../routes.js";

function render(character) {

    const buttonContainer = document.querySelector("#button-container");
    const container = document.querySelector('#container');
    const div = document.createElement('div');

    container.innerHTML = ''; //removes the previous elements

    console.log(character);
    const elem = document.createElement('div');
    elem.id = "personalCard";
    elem.className = `text-center`;
    elem.style = "text-align: center; justify-content: center;"
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
                    <button id="goBack" class="btn btn-primary">Go back</button>
            </div>
    </div>`;
    if (container.childElementCount > 1) {
        container.removeChild(container.lastChild);
    }
    container.appendChild(elem);

    container.appendChild(div);
    const goBackButton = document.getElementById(`goBack`); // Get specific button
    goBackButton.addEventListener('click', () => {
        router.navigate(routes.character.path);
    });
}

export default { render };