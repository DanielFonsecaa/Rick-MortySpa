import characterService from '../service/characterService.js';
import characterView from '../view/characterView.js';

export async function init() {
    const { results: character, next } = await characterService.getCharacters();
    characterView.render(character, () => {
        if (next) {
            characterService.incrementIndex();
            init();
            return;
        }
        window.alert("No more pages");

    });
}
