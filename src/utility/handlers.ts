import { hideContact, hideAbout, hideHome, showContact, showAbout, showNews, hideNews } from "./dom-utilities";

export const handleHamburgerMenu = () => {
  const menu = document.querySelector(".hamburger-menu") as HTMLElement;
  menu.style.display = "none";

  const nav = document.querySelector(".nav") as HTMLElement;
  nav.style.display = "block";

};

export const handleCancel = () => {
  const menu = document.querySelector(".hamburger-menu") as HTMLElement;
  menu.style.display = "block";

  const nav = document.querySelector(".nav") as HTMLElement;
  nav.style.display = "none";
};

export const handleContact = () => {
  hideHome();
  hideAbout();
  hideNews();
  handleNavigationAtSmallScreen();
  showContact();
};

export const handleHome = () => {
  location.reload();
};

export const handleAbout = () => {
  hideHome();
  hideContact();
  hideNews();
  handleNavigationAtSmallScreen();
  showAbout();
};

export const handleNews = () => {
  hideHome();
  hideContact();
  hideAbout();
  handleNavigationAtSmallScreen();
  showNews();
};

export const handleNavigationAtSmallScreen = () => {
  if (window.innerWidth < 800) {
    handleCancel();
  }
};