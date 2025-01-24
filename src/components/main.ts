import { appendChildrenToParent } from "../utility/dom-utilities";
import { About } from "./about";
import { Contact } from "./contact";
import { Home } from "./home";
import { News } from "./news";

export const main = () => {
  const main = document.querySelector("main") as HTMLElement;

  appendChildrenToParent(
    main,
    new Home().create(),
    new Contact().create(),
    new About().create(),
    new News().create(),
  );
};