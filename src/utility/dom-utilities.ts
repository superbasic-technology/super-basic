type AppendChildrenToParent = (parent: HTMLElement, ...children: HTMLElement[]) => void;
export const appendChildrenToParent: AppendChildrenToParent = (parent, ...children) => {
  for (let i = 0; i < children.length; i += 1) {
    parent.appendChild(children[i]);
  }
}

export const hideContact = () => {
  const contact = document.querySelector("main .contact") as HTMLElement;
  contact.style.display = "none";
};

export const hideAbout = () => {
  const about = document.querySelector("main .about") as HTMLElement;
  about.style.display = "none";
};

export const hideMainContent = () => {
  const mainContent = document.querySelector(".main-content") as HTMLElement;
  mainContent.style.display = "none";
};

export const hideHome = () => {
  const home = document.querySelector("main .home") as HTMLElement;
  home.style.display = "none";
};

export const hideNews = () => {
  const mainNews = document.querySelector(".main-news") as HTMLElement;
  mainNews.style.display = "none";
};

export const showContact = () => {
  const contact = document.querySelector("main .contact") as HTMLElement;
  contact.style.display = `flex`;
};

export const showAbout = () => {
  const about = document.querySelector("main .about") as HTMLElement;
  about.style.display = "flex";
};

export const showNews = () => {
  const news = document.querySelector(".main-news") as HTMLElement;
  news.style.display = "flex";
};

export const appendToMain = (...elements: HTMLElement[]) => {
  const main = document.querySelector("main") as HTMLElement;

  appendChildrenToParent(
    main,
    ...elements
  );
};

// Take in an element as input and hide the element
export const hideElement = (element: HTMLElement): void => {
  if (element) {
    element.style.display = "none";
  }
};