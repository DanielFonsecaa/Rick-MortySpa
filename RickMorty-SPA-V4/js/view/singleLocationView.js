function render(location) {

    const buttonContainer = document.querySelector("#button-container");
    const container = document.querySelector('#container');
    const div = document.createElement('div');

    container.innerHTML = ''; //removes the previous elements
    buttonContainer.innerHTML = "";
    
    console.log(location);
        const elem = document.createElement('div');
        elem.className = `text-center-home`;
        elem.style = "text-align: center;"
        elem.innerHTML = `<br>
                        <h1>${location.name}</h1>
                        <h3>Type: ${location.type}</h3>
                        <h3>Dimension: ${location.dimension}</h3>`;
                        
        if (container.childElementCount > 1) {
            container.removeChild(container.lastChild);
        }
        container.appendChild(elem);  

    container.appendChild(div);
}

export default { render };