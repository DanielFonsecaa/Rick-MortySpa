import episodeService from '../service/episodeService.js';
import episodeView from '../view/singleEpisodeView.js';
import { singleId } from '../view/episodeView.js';

export async function init() {
    console.log("id", singleId);
    const episode = await episodeService.getEpisode(singleId -1);
    console.log(episode);
    episodeView.render(episode);
}
