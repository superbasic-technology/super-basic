import { appendChildrenToParent } from "../utility/dom-utilities";
import { Home } from "./home";

export const main = () => {
  const main = document.querySelector("main") as HTMLElement;

  appendChildrenToParent(
    main,
    new Home().create(),
  );
};