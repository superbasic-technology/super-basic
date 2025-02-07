import { appendChildrenToParent } from "../utility/dom-utilities";

export class LeftSidebar {
  create(): HTMLElement {
    const left_sidebar = document.createElement("div");
    left_sidebar.setAttribute("class", "sidebar left");

    const topics = document.createElement("div");
    topics.setAttribute("class", "topics");

    const left_sidebar_h3 = document.createElement("h3");
    left_sidebar_h3.textContent = "អត្ថបទអំពីជំនាញ IT៖";

    appendChildrenToParent(
      topics,
      left_sidebar_h3,
      new WhyNoInternshipOrJob().create(),
    );

    appendChildrenToParent(
      left_sidebar,
      topics,
    );

    return left_sidebar;
  }
}

export class WhyNoInternshipOrJob {
  create(): HTMLElement {
    const whyNoInternshipOrJob_para = document.createElement("a");
    whyNoInternshipOrJob_para.setAttribute("class", "whyNoInternshipOrJob");
    whyNoInternshipOrJob_para.textContent = `
      តើហេតុអ្វីសិស្សដែលរៀនជំនាញទាក់ទងនឹងការសរសេរកូដ«coding»មិនអាចរកឱកាសហាត់ការ«internship»ឬ​ឱកាសការងារបាន?
      សូមទាក់ទងមកយើងខ្ញុំតាមរយៈTelegram ឬ facebook ខាងក្រោមដើម្បីទទួលបានប្រឹក្សាដោយឥតគិតថ្លៃ។
    `;

    return whyNoInternshipOrJob_para;
  }
}