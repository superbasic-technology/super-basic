import { hideServices, hideContact, hideAbout } from "./dom-utilities";

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

  const contact = document.querySelector(".contact") as HTMLElement;
  contact.style.display = "block";
};

export const handleHome = () => {
  hideContact();
  hideAbout();
  handleNavigationAtSmallScreen();

  const services = document.querySelector(".services") as HTMLElement;  
  services.style.display = "block";

  const servicesHeader = document.querySelector(".main-content > h2") as HTMLElement;
  servicesHeader.style.display = "block";
};

export const handleAbout = () => {
  hideServices();
  hideContact();
  handleNavigationAtSmallScreen();

  const About = document.querySelector(".about") as HTMLElement;
  About.style.display = "block";
};

export const handleNavigationAtSmallScreen = () => {
  const nav = document.querySelector(".nav") as HTMLElement;

  if (window.innerWidth < 600) {
    handleCancel();
  }
};