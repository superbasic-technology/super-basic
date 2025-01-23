import { appendChildrenToParent } from "../utility/dom-utilities";

export class LeftSidebar {
  create(): HTMLElement {
    const left_sidebar = document.createElement("div");
    left_sidebar.setAttribute("class", "sidebar left");

    const left_sidebar_h3 = document.createElement("h3");
    left_sidebar_h3.textContent = "អត្ថបទអំពីជំនាញ IT៖";

    appendChildrenToParent(
      left_sidebar,
      left_sidebar_h3,
      new WhyNoInternshipOrJob().create(),
    );

    return left_sidebar;
  }
}

class WhyNoInternshipOrJob {
  create(): HTMLElement {
    const whyNoInternshipOrJob_para = document.createElement("p");
    whyNoInternshipOrJob_para.setAttribute("class", "whyNoInternshipOrJob");
    whyNoInternshipOrJob_para.textContent = `
      តើហេតុអ្វីសិស្សដែលរៀនជំនាញទាក់ទងនឹងការសរសេរកូដ (coding) មិនអាចរកឱកាសហាត់ការ (internship) ឬ​ ឱកាសការងារបាន?
    `;

    return whyNoInternshipOrJob_para;
  }
}

export const leftSidebar = () => {
  const left_sidebar = document.querySelector(".sidebar.left") as HTMLElement;
  const left_sidebar_h3 = document.createElement("h3");
  left_sidebar_h3.textContent = "អត្ថបទអំពីជំនាញ IT៖";

  appendChildrenToParent(
    left_sidebar,
    left_sidebar_h3,
    new WhyNoInternshipOrJob().create(),
  );
};