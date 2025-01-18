import "./styles/main.css"
import { mainContent } from "./components/main-content";
import { header } from "./components/header";
import { handleMenu } from "./utility/handlers";

const main = () => {
  mainContent();
  header();
};

const applyHandlers = () => {
  const menu = document.querySelector(".menu") as HTMLElement;
  menu.addEventListener("click", handleMenu);
};

main();
applyHandlers();