import { appendChildrenToParent } from "../utility/dom-utilities";
import { LeftSidebar } from "./left-sidebar";
import { RightSidebar } from "./right-sidebar";
import { News as MainNews } from "./right-sidebar";

export class News {
  create(): HTMLElement {
    const news = document.createElement("div");
    news.setAttribute("class", "news");

    appendChildrenToParent(
      news,
      new LeftSidebar().create(),
      new NewsContent().create(),
      new RightSidebar().create(),
    );

    return news;
  }
}

export class NewsContent {
  create(): HTMLElement {
    const right_sidebar = document.createElement("div");
    right_sidebar.setAttribute("class", "news-content");

    appendChildrenToParent(
      right_sidebar,
      new MainNews().create(),
    );

    return right_sidebar;
  }
}