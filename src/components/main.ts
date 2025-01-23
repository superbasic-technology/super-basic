import { appendChildrenToParent } from "../utility/dom-utilities";
import { LeftSidebar } from "./left-sidebar";

export const main = () => {
  const main = document.querySelector("main") as HTMLElement;

  appendChildrenToParent(
    main,
    new LeftSidebar().create(),
  );
};