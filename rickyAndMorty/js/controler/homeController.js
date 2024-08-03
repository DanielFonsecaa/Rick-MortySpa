import homeView from '../view/homeView.js';
import characterService from '../service/characterService.js';

export async function init() {
    try {
    const characters = await characterService.getCharacter(parseInt(Math.random() * 20));
      homeView.render(characters);
    } catch (error) {
      console.error('Error fetching character:', error);
    }
  }