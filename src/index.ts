import "./styles/main.css"
import { mainContent } from "./components/main-content";
import { header } from "./components/header";
import { handleMenu, handleCancel, handleContact, handleHome, handleAbout } from "./utility/handlers";

export const main = () => {
  mainContent();
  header();
};

export const applyHandlers = () => {
  const menu = document.querySelector(".menu") as HTMLElement;
  menu.addEventListener("click", handleMenu);

  const cancel = document.querySelector(".cancel") as HTMLElement;
  cancel.addEventListener("click", handleCancel);

  const contact = document.querySelector(".nav a:nth-child(2)") as HTMLElement;
  contact.addEventListener("click", handleContact);

  const home = document.querySelector(".nav a:nth-child(1)") as HTMLElement;
  home.addEventListener("click", handleHome);


  const about = document.querySelector(".nav a:nth-child(3)") as HTMLElement;
  about.addEventListener("click", handleAbout);

  const logo = document.querySelector("header .logo") as HTMLElement;
  logo.addEventListener("click", handleHome);
};

main();
applyHandlers();