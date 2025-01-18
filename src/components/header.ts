import superbasic from "../assets/images/super-basic-technology.png";
import hamburger_menu from "../assets/images/menu.svg";
import { appendChildrenToParent } from "../utility/dom-utilities";
import cancel_icon from "../assets/images/cancel-icon.svg";


class Logo {
  create(): HTMLElement {
    const logo = document.createElement("div");
    logo.setAttribute("class", "logo");
    const img = document.createElement("img");
    img.src = `${superbasic}`;

    logo.appendChild(img);

    return logo;
  }
}

class Menu {
  create(): HTMLElement {
    const menu = document.createElement("div");
    menu.setAttribute("class", "menu");
    const img = document.createElement("img");
    img.src = `${hamburger_menu}`;
    img.style.width = "50px";
    
    menu.appendChild(img);

    return menu;
  }
}

class Navigation {
  create(): HTMLElement {
    const nav = document.createElement("div");
    nav.setAttribute("class", "nav");

    const cancel = document.createElement("div");
    cancel.setAttribute("class", "cancel");

    const cancelIcon = document.createElement("img");
    cancelIcon.src = `${cancel_icon}`;

    cancel.appendChild(cancelIcon);
    nav.appendChild(cancel);

    const ul = document.createElement("ul");
    const home = document.createElement("a");
    home.textContent = "Home";

    const contact = document.createElement("a");
    contact.textContent = "Contact";

    const about = document.createElement("a");
    about.textContent = "About";

    appendChildrenToParent(ul, home, contact, about);
    nav.appendChild(ul);

    return nav;
  }
}

export class AppendToHeader {
  append(...elements: HTMLElement[]): void {
    const header = document.querySelector("header");
    
    if (!header) throw new Error(`Element does not exist`);

    for (let i = 0; i < elements.length; i += 1) {
      header.appendChild(elements[i]);
    }
  }
}

export const header = () => {
  new AppendToHeader().append(
    new Logo().create(),
    new Menu().create(),
    new Navigation().create(),
  );
};