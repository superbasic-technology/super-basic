import { hideServices, hideContact, hideAbout, hideMainContent, showMainContent, hideRightSidebar, hideHome, showContact } from "./dom-utilities";

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
  showContact();
};

export const handleHome = () => {
  location.reload();
};

export const handleAbout = () => {
  hideServices();
  hideContact();
  handleNavigationAtSmallScreen();
  showMainContent();

  if (window.innerWidth < 600) {
    hideRightSidebar();
  } 

  const About = document.querySelector("main .about") as HTMLElement;
  About.style.display = "block";
};

export const handleNavigationAtSmallScreen = () => {
  if (window.innerWidth < 600) {
    handleCancel();
  }
};

export const handleNews = () => {
  if (window.innerWidth < 600) {
    hideMainContent();
    handleNavigationAtSmallScreen();

    const rightSidebar = document.querySelector(".sidebar.right") as HTMLElement;
    rightSidebar.style.display = "block";
  }
};