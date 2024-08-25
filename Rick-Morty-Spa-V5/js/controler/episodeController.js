import episodeService from '../service/episodeService.js';
import episodeView from '../view/episodeView.js';

export async function init() {
    const {results: episodes, next} = await episodeService.getEpisodes();
    episodeView.render(episodes, next);
}