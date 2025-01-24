import { appendChildrenToParent } from "../utility/dom-utilities";
import { LeftSidebar } from "./left-sidebar";
import { RightSidebar } from "./right-sidebar";
import { WhyNoInternshipOrJob } from "./left-sidebar";

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
    const news_content = document.createElement("div");
    news_content.setAttribute("class", "news-content");

    const topics = document.createElement("div");
    topics.setAttribute("class", "topics");

    const news_content_h3 = document.createElement("h3");
    news_content_h3.textContent = "អត្ថបទអំពីជំនាញ IT៖";

    appendChildrenToParent(
      topics,
      news_content_h3,
      new WhyNoInternshipOrJob().create(),
    );

    appendChildrenToParent(
      news_content,
      topics,
    );

    return news_content;
  }
}