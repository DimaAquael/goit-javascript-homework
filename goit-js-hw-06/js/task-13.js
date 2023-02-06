import data from "../data/data-task-13/index.js";
import { navigation } from "../data/data-task-13/nav.js";
import { refs } from "../data/data-task-13/refs.js";
import { createCards } from "../data/data-task-13/createCard.js";

console.log(data);
console.log(navigation(data.navigationsLink));



const onCreateMarkup = (event) => {
  const name = event.target.dataset.link;
    console.log(name);
    createCards(data.games[name]);
};

const onFindGame = (event) => {
    // console.log(event.target);
    const game = data.games[event.target.dataset.category].find((game) => game.id == event.target.dataset.id);
    console.log(game);
}

refs.navList.addEventListener("click", onCreateMarkup);
refs.mainCard.addEventListener("click", onFindGame);

