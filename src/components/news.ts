import { appendChildrenToParent } from "../utility/dom-utilities";
import { LeftSidebar } from "./left-sidebar";
import { RightSidebar } from "./right-sidebar";
import "../styles/News.css";

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
    const newsContent = document.createElement("div");
    newsContent.setAttribute("class", "news-content");

    const newsHeader = document.createElement("h2");
    newsHeader.classList.add("news-header");
    newsHeader.textContent = "ពត៌មាន";

    const descriptionHeader = document.createElement("h2");
    descriptionHeader.classList.add("description-header");
    descriptionHeader.textContent = "ស្វែងរកអ្នកហាត់ការ (internship)";

    appendChildrenToParent(
      newsContent,
      newsHeader,
      descriptionHeader,
      new JobDescription().create(),
      new Duty().create(),
    );

    return newsContent;
  }
}

class JobDescription {
  create(): HTMLElement {
    const jobDescription = document.createElement("section");
    jobDescription.classList.add("job-description");

    const sectionHeader = document.createElement("h2");
    sectionHeader.classList.add("section-header");

    const para = document.createElement("p");
    para.textContent = "Super Basic យើងខ្ញុំកំពុងស្វែងរកបុគ្គលដែលមានសមត្ថភាពខ្ពស់ និង មានជំនាញ ចូលរួមក្រុមរបស់យើងខ្ញុំជាអ្នកអភិវឌ្ឍ website (Frontend Development Internship)។ បេក្ខជនដែលចេះតិចតួចក៏អាចដាក់ CV បានដែរ។";

    appendChildrenToParent(
      jobDescription,
      sectionHeader,
      para,
    );

    return jobDescription;
  }
}

class Duty {
  create(): HTMLElement {
    const duties: string[] = [
      ". អភិវឌ្ឍ និង ថែទាំផ្នែក client-side (frontend) សំរាប់កម្មវិធីអនឡាញដោយប្រើ React, Vue, ឬ Angular",
      ". សហការជាមួយ Designers ដើម្បីបង្កើត user-friendly សម្រាប់អ្នកប្រើប្រាស់",
      ". សរសេរកូដដែលមាន Documentation ត្រឹមត្រូវ",
      ". ចូលរួមធ្វើការ code review និង រួមចំណែកក្នុងការ debug",
      ". Write unit tests និង mock tests៕"
    ];
    const dutySection = document.createElement("section");
    dutySection.classList.add("duty-section");

    const dutyHeader = document.createElement("h6");
    dutyHeader.classList.add("duty-header");
    dutyHeader.textContent = "កាតព្វកិច្ច៖";

    const list = document.createElement("ul");
    
    try {
      for (let i = 0; i < duties.length; i += 1) {
        const listItem = document.createElement("li");
        listItem.textContent = `${duties[i]}`;
  
        list.appendChild(listItem);
      }
    } catch(error) {
      console.log(error);
    }

    appendChildrenToParent(
      dutySection,
      dutyHeader,
      list,
    );

    return dutySection;
  }
}