type AppendChildrenToParent = (parent: HTMLElement, ...children: HTMLElement[]) => void;
export const appendChildrenToParent: AppendChildrenToParent = (parent, ...children) => {
  for (let i = 0; i < children.length; i += 1) {
    parent.appendChild(children[i]);
  }
}

export const hideServices = () => {
  const services = document.querySelector(".services") as HTMLElement;  
  services.style.display = "none";

  const servicesHeader = document.querySelector(".main-content > h2") as HTMLElement;
  servicesHeader.style.display = "none";
};

export const hideContact = () => {
  const contact = document.querySelector(".main-content .contact") as HTMLElement;
  contact.style.display = "none";
};

export const hideAbout = () => {
  const about = document.querySelector(".main-content .about") as HTMLElement;
  about.style.display = "none";
};

export const hideMainContent = () => {
  const mainContent = document.querySelector(".main-content") as HTMLElement;
  mainContent.style.display = "none";
};

export const hideRightSidebar = () => {
  const rightSidebar = document.querySelector(".sidebar.right") as HTMLElement;
  rightSidebar.style.display = "none";
};

export const hideHome = () => {
  const home = document.querySelector("main .home") as HTMLElement;
  home.style.display = "none";
};

export const showMainContent = () => {
  const mainContent = document.querySelector(".main-content") as HTMLElement;
  mainContent.style.display = "block";
};

export const showContact = () => {
  const contact = document.querySelector("main .contact") as HTMLElement;
  contact.style.display = `flex`;
};

export const appendToMain = (...elements: HTMLElement[]) => {
  const main = document.querySelector("main") as HTMLElement;

  appendChildrenToParent(
    main,
    ...elements
  );
};