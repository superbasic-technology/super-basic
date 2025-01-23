import { appendChildrenToParent } from "../utility/dom-utilities";
import { LeftSidebar } from "./left-sidebar";

export class Home {
  create(): HTMLElement {
    const home = document.createElement("home");
    home.setAttribute("class", "home");

    return home;
  }
}