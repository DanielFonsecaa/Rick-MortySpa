function render(onClick) {

    const buttonContainer = document.querySelector("#button-container");
    const container = document.querySelector('#container');
    const button = document.createElement('button');
    const div = document.createElement('div');

    div.className = `text-center`;
    button.className = `btn btn-primary`;
    button.type = `button`;
    button.style = `display: flex;
    justify-content: center;`;

    div.appendChild(button);

    container.innerHTML = ''; //removes the previous elements
    buttonContainer.innerHTML = "";
    
    button.innerText = `Click me for a random character`;

    button.addEventListener('click', async e => {
        console.log("clicked")
             e.preventDefault();
           const {
            name,
            status,
            species,
            type,
            gender,
            location,
            image
        } = await onClick;   

        const elem = document.createElement('div');
        elem.className = `text-center-home`;
        elem.style = "text-align: center;"
        elem.innerHTML = `<h1>${name}</h1>
                        <h3>Status: ${status}</h3>
                        <h3>Species: ${species}</h3>
                        <h3>Type: ${type}</h3>
                        <h3>Gender: ${gender}</h3>
                        <h3>Location: ${location.name}</h3>
                        <div style="border: 5px solid #555; max-width:20%;  margin-left: auto;
                        margin-right: auto;">
                        <br>
                        <img src="${image}" style= "width:100%">
                        </div>`;

        if (container.childElementCount > 1) {
            container.removeChild(container.lastChild);
        }

        container.appendChild(elem);
        });

    container.appendChild(div);
}

export default { render };