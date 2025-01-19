import { appendChildrenToParent } from "../utility/dom-utilities";

export class Contact {
  create(): HTMLElement {
    const contact = document.createElement("div");
    contact.setAttribute("class", "contact");

    const contactMethodsHeader = document.createElement("h2");
    contactMethodsHeader.textContent = "វិធីផ្សេងៗដើម្បីទាក់ទងមកយើងខ្ញុំ";

    const contactMethodsContainer = document.createElement("div");
    contactMethodsContainer.setAttribute("class", "contact-methods-container");

    const ul = document.createElement("ul");
    const contactMethods = [
      "Telegram: +855 92 695 541", 
      "E-Mail: superbasic.technology@gmail.com",
      "facebook: https://web.facebook.com/profile.php?id=61571511628571", "Tik Tok: https://www.tiktok.com/@superbasic", 
    ];
    
    const contactDetails = [
      "+855 92 695 541",
      "superbasic.technology@gmail.com",
      "https://web.facebook.com/profile.php?id=61571511628571",
      "https://www.tiktok.com/@superbasic"   
    ];

    for (let i = 0; i < contactMethods.length; i += 1) {
      const link = document.createElement("a");
      link.setAttribute("class", "link");

      switch (i) {
        case 2: link.href = `${contactDetails[i]}`;
                link.rel = "noopener noreferrer";
                link.target = "_blank";
                break;
        case 3: link.href = `${contactDetails[i]}`;
        link.rel = "noopener noreferrer";
        link.target = "_blank";
                break;
      }

      link.textContent = `${contactMethods[i]}`;
      ul.appendChild(link);
      contactMethodsContainer.appendChild(ul);
    }

    appendChildrenToParent(contact, contactMethodsHeader, contactMethodsContainer);

    return contact;
  }
}