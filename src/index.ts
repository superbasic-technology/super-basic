import "./styles/main.css"
import { mainContent } from "./components/main-content";
import { header } from "./components/header";
import { rightSidebar } from "./components/right-sidebar";
import { leftSidebar } from "./components/left-sidebar"; 
import { handleMenu, handleCancel, handleContact, handleHome, handleAbout, handleNews } from "./utility/handlers";
import { footer } from "./components/footer";

export const main = () => {
  mainContent();
  header();
  rightSidebar();
  leftSidebar();
  footer();
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

  const news = document.querySelector(".nav a:nth-child(4)") as HTMLElement;
  news.addEventListener("click", handleNews);
};

main();
applyHandlers();