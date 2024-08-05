function render(episode) {

    const buttonContainer = document.querySelector("#button-container");
    const container = document.querySelector('#container');
    const div = document.createElement('div');

    container.innerHTML = ''; //removes the previous elements
    buttonContainer.innerHTML = "";
    
    console.log(episode);
        const elem = document.createElement('div');
        elem.className = `text-center-home`;
        elem.style = "text-align: center;"
        elem.innerHTML = `<br>
                        <h1>${episode.name}</h1>
                        <h3>Air Date: ${episode.air_date}</h3>
                        <h3>Episode: ${episode.episode}</h3>`;
                        
        if (container.childElementCount > 1) {
            container.removeChild(container.lastChild);
        }
        container.appendChild(elem);  

    container.appendChild(div);
}

export default { render };