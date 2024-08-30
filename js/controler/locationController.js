import locationService from '../service/locationService.js';
import locationView from '../view/locationView.js';

export async function init() {
    const {results: location, next} = await locationService.getLocations();
    locationView.render(location, next)
}
