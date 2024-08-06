import characterService from "../service/characterService.js";
import singleCharacterView from "../view/singleCharacterView.js";
import { singleId } from "../view/characterView.js";

export async function init() {
    const character = await characterService.getCharacter(singleId -1);
    singleCharacterView.render(character);
}
