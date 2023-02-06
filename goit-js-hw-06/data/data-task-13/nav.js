import { refs } from "./refs.js";

export const navigation = (links) => {
  const markUp = links.reduce((acc, link) => {
    return (acc += `<li data-link=${link.value}>${link.name}</li>`);
  }, "");
  refs.navList.innerHTML = markUp;
};
