type AppendChildrenToParent = (parent: HTMLElement, ...children: HTMLElement[]) => void;
export const appendChildrenToParent: AppendChildrenToParent = (parent, ...children) => {
  for (let i = 0; i < children.length; i += 1) {
    parent.appendChild(children[i]);
  }
}

export const hideServices = () => {
  const cardsContainer = document.querySelector(".cards-container") as HTMLElement;  
  cardsContainer.style.display = "none";

  const servicesHeader = document.querySelector(".main-content > h2") as HTMLElement;
  servicesHeader.style.display = "none";
};

export const hideContact = () => {
  const contact = document.querySelector(".contact") as HTMLElement;
  contact.style.display = "none";
};