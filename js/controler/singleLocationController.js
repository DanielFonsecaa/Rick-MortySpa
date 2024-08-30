import locationService from '../service/locationService.js';
import locationView from '../view/singleLocationView.js';
import { singleId } from '../view/locationView.js';

export async function init() {
    const location = await locationService.getLocation(singleId -1);
    locationView.render(location);
}
