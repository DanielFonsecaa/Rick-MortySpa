import characterService from '../service/characterService.js';
import characterView from '../view/characterView.js';

export async function init() {
    const { results: character, next } = await characterService.getCharacters();
    characterView.render(character, next)
}
