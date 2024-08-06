import episodeService from '../service/episodeService.js';
import episodeView from '../view/episodeView.js';

export async function init() {
    const {results: episodes, next} = await episodeService.getEpisodes();
    episodeView.render(episodes, () => {
        if(next) {
            episodeService.incrementIndex();
            init();
            return;
        }
        window.alert("No more pages");
    });
}