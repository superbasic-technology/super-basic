type AppendChildrenToParent = (parent: HTMLElement, ...children: HTMLElement[]) => void;
export const appendChildrenToParent: AppendChildrenToParent = (parent, ...children) => {
  for (let i = 0; i < children.length; i += 1) {
    parent.appendChild(children[i]);
  }
};

export const clearMainContent = () => {
  const mainContent = document.querySelector(".main-content") as HTMLElement;

  mainContent.remove();
};
