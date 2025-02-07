import { hideContact, hideAbout, hideHome, showContact, showAbout, showNews, hideNews, hideElement } from "./dom-utilities";

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
  hideElement(document.querySelector(".why-no-jobs") as HTMLElement);
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
  hideElement(document.querySelector(".why-no-jobs") as HTMLElement);
  handleNavigationAtSmallScreen();
  showAbout();
};

export const handleNews = () => {
  hideHome();
  hideContact();
  hideAbout();
  hideElement(document.querySelector(".why-no-jobs") as HTMLElement);
  handleNavigationAtSmallScreen();
  showNews();
};

export const handleNavigationAtSmallScreen = () => {
  if (window.innerWidth < 768) {
    handleCancel();
  } else if (window.innerWidth > 768) {
    handleHamburgerMenu();
  }
};

export const handleTopic = () => {
  const whyNoJobs = document.querySelector(".why-no-jobs") as HTMLElement;
  whyNoJobs.style.display = "flex";
  hideHome();
  hideContact();
  hideAbout();
  hideNews();
};