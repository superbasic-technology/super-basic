import "./styles/main.css"
import { header } from "./components/header";
import { handleHamburgerMenu, handleCancel, handleContact, handleHome, handleAbout, handleNews, handleNavigationAtSmallScreen, handleTopic } from "./utility/handlers";
import { footer } from "./components/footer";
import { main } from "./components/main";

export const app = () => {
  header();
  main(); 
  footer();
};

export const applyHandlers = () => {
  const hamburger_menu = document.querySelector(".hamburger-menu") as HTMLElement;
  hamburger_menu.addEventListener("click", handleHamburgerMenu);

  const cancel = document.querySelector(".cancel") as HTMLElement;
  cancel.addEventListener("click", handleCancel);

  const contact = document.querySelector("ul .contact") as HTMLElement;
  contact.addEventListener("click", handleContact);

  const home = document.querySelector("ul .home") as HTMLElement;
  home.addEventListener("click", handleHome);

  const about = document.querySelector("ul .about") as HTMLElement;
  about.addEventListener("click", handleAbout);

  const logo = document.querySelector("header .logo") as HTMLElement;
  logo.addEventListener("click", handleHome);

  const news = document.querySelector("ul .news") as HTMLElement;
  news.addEventListener("click", handleNews);

  // Hide .hamburger-menu when the screen is wider than 768px
  window.addEventListener("resize", handleNavigationAtSmallScreen);
};

app();
applyHandlers();