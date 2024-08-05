import episodeService from '../service/episodeService.js';
import episodeView from '../view/singleEpisodeView.js';

export async function init() {
    episodeView.render(await episodeService.getEpisode(1));
}