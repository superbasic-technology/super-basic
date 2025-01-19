import { appendChildrenToParent } from "../utility/dom-utilities";
import coding from "../assets/images/course-image-coding.png";
import generative_ai from "../assets/images/generative-ai.png";
import mathematics_img from "../assets/images/arithmetics.jpg";
import portfolio_img from "../assets/images/portfolio-image.png";
import { Contact } from "./contact";

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
    public description_points: string[],
    public image: number,
  ) {}

  generate(): HTMLDivElement {
    const serviceCard = document.createElement("div");
    serviceCard.setAttribute("class", "service-card");

    const h3 = document.createElement("h3");
    h3.textContent = `${this.title}`;

    const ul = document.createElement("ul");
    
    for (let i = 0; i < this.description_points.length; i += 1) {
      const li = document.createElement("li");
      li.setAttribute("class", `${i}`);
      li.textContent = `${this.description_points[i]}`;
      ul.appendChild(li);
    }

    const img = document.createElement("img");
    img.src = `${this.image}`;    

    appendChildrenToParent(serviceCard, h3, img, ul);

    return serviceCard;
  }
}

// High-level module

export class GenerateCardsContainer {
  generate(...children: HTMLDivElement[]): HTMLDivElement {
    const services = document.createElement("div");
    services.setAttribute("class", "services");
    const cardsContainer = document.createElement("div");
    cardsContainer.setAttribute("class", "cards-container");

    appendChildrenToParent(cardsContainer, ...children);
    services.appendChild(cardsContainer)

    return services;
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
  new AppendToMainContent().append(new GenerateCardsContainer().generate(
    new GenerateCard("វគ្គហ្វឹកហាត់ Web Development សម្រាប់ការហាត់ការ (Internship)", ["វគ្គនេះមានរយៈពេល១ឆ្នាំ និង ត្រូវបានបង្រៀនដោយគ្រូដែលបានរៀននៅប្រទេសអុឹរ៉ុប", "បន្ទាប់ពីបានរៀនវគ្គនេះរយៈពេល៦ខែ សិស្សនឹងទទួលបានឱកាសហាត់ការ(Internship)ចំនួន៦ខែជាមួយ Developers របស់យើងខ្ញុំផ្ទាល់", "ក្នុង១ថ្ងៃរៀនរយៈពេល៣ទៅ៤ម៉ោង ច័ន្ទ-សុក្រ ហើយសិស្សអាចរើសការរៀនជាក្រុម ឬ ម្នាក់ឯងបាន​", "សម្រាប់វគ្គនេះ យើងខ្ញុំទទួលតែ៥នាក់ប៉ុន្នោះក្នុង១ឆ្នាំ សូមចុះឈ្មោះឥលូវនេះ៕​"], coding).generate(),
    new GenerateCard("វគ្គបង្រៀនប្រើប្រាស់ AI ដូចជា ChatGPT និង Gemini", ["វគ្គនេះសម្រាប់មនុស្សទូរទៅដែលចង់ចេះប្រើ Generative AI", "វគ្គនេះមានរយៈពេល១​ខែ ឬ ៣០ម៉ោង", "ក្នុង១ថ្ងៃរៀនរយៈពេល១ម៉ោង ច័ន្ទ-សុក្រ៕"], generative_ai).generate(),
    new GenerateCard("វគ្គគណិតវិទ្យាបំប៉នថ្នាក់ទី១ដល់ថ្នាក់ទី១២", ["វគ្គនេះមានរយៈពេល៣ខែ និង ត្រូវបានបង្រៀនដោយ គ្រូដែលបានរៀននៅប្រទេសអុឹរ៉ុប", "ក្នុង១ថ្ងៃរៀនរយៈពេល៣ម៉ោង ច័ន្ទ-សុក្រ ហើយសិស្សអាចរើសការរៀនជាក្រុម ឬ ម្នាក់ឯងបាន៕"], mathematics_img).generate(),
    new GenerateCard("សេវាកម្មបង្កើត Portfolio", ["សម្រាប់អ្នករកការងារធ្វើនិងអ្នកដែលកំពុងមានការងារស្រាប់", "ធានាកែរលំអររយៈពេល១ឆ្នាំ", "Free ក្នុងការបង្កើត CV៕"], portfolio_img).generate(),
  ),
  new Contact().create(),
);
}