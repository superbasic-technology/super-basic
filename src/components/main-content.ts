import { appendChildrenToParent } from "../utility/dom-utilities";

// Abstraction
abstract class AbstractCardInfo {
  constructor(
    public title: string,
    public description: string,
  ) {}
}

interface IAppendToMainContent {
  append(...elements: HTMLElement[]): void;
}

// Concrete implementations (low-level module)

export class CardInfo extends AbstractCardInfo {
  constructor(
    public title: string,
    public description: string,
  ) {
    super(title, description);
  }
}

// High-level module

export class GenerateCard {
  generate(card: AbstractCardInfo): HTMLDivElement {
    const serviceCard = document.createElement("div");
    serviceCard.setAttribute("class", "service-card");

    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const link = document.createElement("a");

    h3.textContent = `${card.title}`;
    p.textContent = `${card.description}`;
    link.textContent = `More info`;

    appendChildrenToParent(serviceCard, h3, p, link);

    return serviceCard;
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

export const mainContent = () => {
  new AppendToMainContent().append(new GenerateCard().generate(new CardInfo("Sim card", "Hello, world!")));
};