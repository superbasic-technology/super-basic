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

class HamburgerMenu {
  create(): HTMLElement {
    const hamburgerMenu = document.createElement("div");
    hamburgerMenu.setAttribute("class", "hamburger-menu");
    const img = document.createElement("img");
    img.src = `${hamburger_menu}`;
    img.style.width = "50px";
    
    hamburgerMenu.appendChild(img);

    return hamburgerMenu;
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
    home.setAttribute("class", "home");
    home.textContent = "ទំព័រដើម";

    const contact = document.createElement("a");
    contact.setAttribute("class", "contact");
    contact.textContent = "ទំនាក់ទំនង";

    const about = document.createElement("a");
    about.setAttribute("class", "about");
    about.textContent = "អំពីយើង";

    const news = document.createElement("a");
    news.setAttribute("class", "news");
    news.textContent = "ពត៌មាន";

    appendChildrenToParent(ul, home, contact, about, news,);
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
    new HamburgerMenu().create(),
    new Navigation().create(),
  );
};