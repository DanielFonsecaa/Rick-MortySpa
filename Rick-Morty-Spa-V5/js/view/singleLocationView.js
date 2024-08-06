import router from "../router.js";
import routes from "../routes.js";

function render(location) {

    const buttonContainer = document.querySelector("#button-container");
    const container = document.querySelector('#container');
    const div = document.createElement('div');

    container.innerHTML = ''; //removes the previous elements

    console.log(location);
    const elem = document.createElement('div');
    elem.className = `text-center`;
    elem.style = "text-align: center; justify-content: center;"
    elem.innerHTML = `<div class="card text-white bg-dark mb-3" style="width: 22rem;border: 2px solid black;">
                            <h1>${location.name}</h1>
                            <h3>Type: ${location.type}</h3>
                            <h3>Dimension: ${location.dimension}</h3>                    
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
            router.navigate(routes.location.path);
    });
};

export default { render };