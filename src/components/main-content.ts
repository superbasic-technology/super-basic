import { appendChildrenToParent } from "../utility/dom-utilities";

// Abstraction

interface IAppendToMainContent {
  append(...elements: HTMLElement[]): void;
}

interface IGenerateCard {
  generate(): HTMLDivElement;
}

// Concrete implementations

export class GenerateCard implements IGenerateCard {
  constructor(
    public title: string,
    public description: string,
  ) {}

  generate(): HTMLDivElement {
    const serviceCard = document.createElement("div");
    serviceCard.setAttribute("class", "service-card");

    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const link = document.createElement("a");

    h3.textContent = `${this.title}`;
    p.textContent = `${this.description}`;
    link.textContent = `More info`;

    appendChildrenToParent(serviceCard, h3, p, link);

    return serviceCard;
  }
}

// High-level module

export class GenerateCardsContainer {
  generate(...children: HTMLDivElement[]): HTMLDivElement {
    const cardsContainer = document.createElement("div");

    appendChildrenToParent(cardsContainer, ...children);

    return cardsContainer;
  }
}

export class AppendToMainContent {
  append(...elements: HTMLElement[]): void {
    const main_content = document.querySelector(".main-content");
    
    if (!main_content) throw new Error(`Element does not exist`);

    for (let i = 0; i < elements.length; i += 1) {
      main_content.appendChild(elements[i]);
    }
  }
}