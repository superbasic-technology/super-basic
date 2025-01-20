import { appendChildrenToParent } from "../utility/dom-utilities";

class Internship {
  create(): HTMLElement {
    const internship = document.createElement("div");
    const internship_para = document.createElement("p");
    internship_para.setAttribute("class", "internship");
    internship_para.textContent = `
       យើងខ្ញុំកំពុងត្រូវការអ្នកហាត់ការ (interns) ផ្នែក Frontend Development ចំនួន៥រូប។ សូមផ្ញើ CV ឬ ទាក់ទងមក Telegram ឬ facebook page របស់យើងខ្ញុំសម្រាប់ពត៌មានលម្អិត។
    `;

    internship.appendChild(internship_para);

    return internship;
  }
}

export const rightSidebar = () => {
  const right_sidebar = document.querySelector(".sidebar.right") as HTMLElement;
  const right_sidebar_h2 = document.createElement("h2");
  right_sidebar_h2.textContent = "News";

  appendChildrenToParent(
    right_sidebar,
    right_sidebar_h2,
    new Internship().create(),
    );
};