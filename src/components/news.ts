import { appendChildrenToParent } from "../utility/dom-utilities";
import { RightSidebar } from "./right-sidebar";

export class News {
  create(): HTMLElement {
    const news = document.createElement("div");
    news.setAttribute("class", "news");

    appendChildrenToParent(
      news,
      new RightSidebar().create(),
    );

    return news;
  }
}