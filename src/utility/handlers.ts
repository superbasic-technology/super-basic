import { hideServices, hideContact, hideAbout, hideMainContent, showMainContent, hideRightSidebar } from "./dom-utilities";

export const handleMenu = () => {
  const menu = document.querySelector(".menu") as HTMLElement;
  menu.style.display = "none";

  const nav = document.querySelector(".nav") as HTMLElement;
  nav.style.display = "block";

};

export const handleCancel = () => {
  const menu = document.querySelector(".menu") as HTMLElement;
  menu.style.display = "block";

  const nav = document.querySelector(".nav") as HTMLElement;
  nav.style.display = "none";
};

export const handleContact = () => {
  hideServices();
  hideAbout();
  handleNavigationAtSmallScreen();
  showMainContent();
  
  if (window.innerWidth < 600) {
    hideRightSidebar();
  } 

  const contact = document.querySelector("main .contact") as HTMLElement;
  contact.style.display = "block";
};

export const handleHome = () => {
  hideContact();
  hideAbout();
  handleNavigationAtSmallScreen();
  showMainContent();

  if (window.innerWidth < 600) {
    hideRightSidebar();
  } 

  const services = document.querySelector("main .services") as HTMLElement;  
  services.style.display = "block";

  const servicesHeader = document.querySelector(".main-content > h2") as HTMLElement;
  servicesHeader.style.display = "block";
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