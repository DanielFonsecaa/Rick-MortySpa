function render(location) {

    const container = document.querySelector('#container');

    container.innerHTML = '<br>'; //removes the previous elements
    const item = document.createElement('div');
    item.className = `text-center`;

    const singleLocation = {
        name: location.name,
        type: location.type,
        dimension: location.dimension
    }

    item.innerHTML = `<div class="card text-white bg-dark mb-3" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">${singleLocation.name}</h5>
                                <p class="card-text">
                                    <p>Type: ${singleLocation.type}</p>
                                    <p>Dimension: ${singleLocation.dimension}</p>
                                </p>
                                <a href="/location" class="btn btn-primary">Go Back</a>
                            </div>
                        </div>`;
    container.appendChild(item);
}

export default {render};

