import { appendChildrenToParent } from "../utility/dom-utilities";
import { LeftSidebar } from "./left-sidebar";
import { MainContent } from "./main-content";
import { RightSidebar } from "./right-sidebar";

export class Home {
  create(): HTMLElement {
    const home = document.createElement("home");
    home.setAttribute("class", "home");

    appendChildrenToParent(
      home,
      new LeftSidebar().create(),
      new MainContent().create(),
      new RightSidebar().create(),
    );

    return home;
  }
}

export const home = () => {
  appendChildrenToParent(
    new Home().create(),
    new LeftSidebar().create(),
  );
};