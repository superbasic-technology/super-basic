import { appendChildrenToParent } from "../utility/dom-utilities";
import { LeftSidebar } from "./left-sidebar";
import { MainContent } from "./main-content";
import { RightSidebar } from "./right-sidebar";
import { Home } from "./home";

export const main = () => {
  const main = document.querySelector("main") as HTMLElement;

  appendChildrenToParent(
    main,
    new Home().create(),
  );
};