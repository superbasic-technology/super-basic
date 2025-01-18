import superbasic from "../assets/images/super-basic-technology.png";
import hamburger_menu from "../assets/images/menu.svg";


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
  );
};