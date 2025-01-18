import "./styles/main.css"
import { mainContent } from "./components/main-content";
import { header } from "./components/header";
import { handleMenu, handleCancel } from "./utility/handlers";

const main = () => {
  mainContent();
  header();
};

const applyHandlers = () => {
  const menu = document.querySelector(".menu") as HTMLElement;
  menu.addEventListener("click", handleMenu);

  const cancel = document.querySelector(".cancel") as HTMLElement;
  cancel.addEventListener("click", handleCancel);
};

main();
applyHandlers();