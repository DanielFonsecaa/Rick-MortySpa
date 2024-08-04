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

/*
async function showMoreInfo(episodeId) {
    try {
      const episodes = await episodeService.getEpisodes(); // Assuming getEpisodes returns an array of episodes
        console.log(episodes)
      if (Array.isArray(episodes)) {
        const episode = episodes.find(episode => episode.id === episodeId);
  
        if (episode) {
          // Episode data is available
          const { name = 'Unknown', air_date = 'N/A', other_properties } = episode;
          console.log(name, air_date, other_properties);
          // Update UI with episode data
        } else {
          console.error('Episode data is missing or invalid');
          // Display a user-friendly error message (e.g., "Episode not found")
        }
      } else {
        console.error('episodes is not an array:', episodes);
      }
    } catch (error) {
      console.error('Error fetching episodes:', error);
      // Display a generic error message (e.g., "An error occurred")
    }
  }
  */