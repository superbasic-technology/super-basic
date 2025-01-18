import superbasic from "../assets/images/super-basic-technology.png";
import menu from "../assets/images/menu.svg";


class HeaderLeft {
  create(): void {
    const header = document.querySelector("header") as HTMLElement;
    const logo = document.createElement("div");
    logo.setAttribute("class", "logo");
    const img = document.createElement("img");
    img.src = `${superbasic}`;

    logo.appendChild(img);
    header.appendChild(logo);
  }
}

export const header = () => {
  new HeaderLeft().create();
};