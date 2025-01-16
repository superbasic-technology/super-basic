"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainContent = exports.AppendToMainContent = exports.GenerateCardsContainer = exports.GenerateCard = void 0;
const dom_utilities_1 = require("../utility/dom-utilities");
const course_image_coding_png_1 = __importDefault(require("../assets/images/course-image-coding.png"));
// Concrete implementations
class GenerateCard {
    constructor(title, description_points, image) {
        this.title = title;
        this.description_points = description_points;
        this.image = image;
    }
    generate() {
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
        // p.textContent = `${this.description}`;
        (0, dom_utilities_1.appendChildrenToParent)(serviceCard, h3, ul, img);
        return serviceCard;
    }
}
exports.GenerateCard = GenerateCard;
// High-level module
class GenerateCardsContainer {
    generate(...children) {
        const cardsContainer = document.createElement("div");
        cardsContainer.setAttribute("class", "cards-container");
        (0, dom_utilities_1.appendChildrenToParent)(cardsContainer, ...children);
        return cardsContainer;
    }
}
exports.GenerateCardsContainer = GenerateCardsContainer;
class AppendToMainContent {
    append(...elements) {
        const main_content = document.querySelector(".main-content");
        if (!main_content)
            throw new Error(`Element does not exist`);
        for (let i = 0; i < elements.length; i += 1) {
            main_content.appendChild(elements[i]);
        }
    }
}
exports.AppendToMainContent = AppendToMainContent;
const mainContent = () => {
    new AppendToMainContent().append(new GenerateCardsContainer().generate(new GenerateCard("វគ្គហ្វឹកហាត់ Web Development សម្រាប់ការហាត់ការ (Internship)", ["វគ្គនេះមានរយៈពេល១ឆ្នាំ និង ត្រូវបានបង្រៀនដោយគ្រូដែលបានរៀននៅប្រទេសអុឹរ៉ុប", "បន្ទាប់ពីបានរៀនវគ្គនេះរយៈពេល៦ខែ សិស្សនឹងទទួលបានឱកាសហាត់ការ(Internship)ចំនួន៦ខែជាមួយ Developers របស់យើងខ្ញុំផ្ទាល់", "រៀនរយៈពេល៤ម៉ោង ច័ន្ទ-សុក្រ ហើយសិស្សអាចរើសការរៀនជាក្រុម ឬ ម្នាក់ឯងបាន​", "សម្រាប់វគ្គនេះ យើងខ្ញុំទទួលតែ៥នាក់ប៉ុន្នោះក្នុង១ឆ្នាំ សូមរុះរាន់៕​"], course_image_coding_png_1.default).generate(), new GenerateCard("វគ្គបង្រៀនប្រើប្រាស់ AI ដូចជា ChatGPT និង Gemini", ["វគ្គនេះមានរយៈពេល១​ខែ ឬ ៣០ម៉ោង ច័ន្ទ-សុក្រ ឬ សៅរ៍-អាទិត្យ ",], course_image_coding_png_1.default).generate(), new GenerateCard("វគ្គគណិតវិទ្យាបំប៉នថ្នាក់ទី១ដល់ថ្នាក់ទី១២", ["វគ្គនេះមានរយៈពេល៤​ខែ និង ត្រូវបានបង្រៀនដោយ គ្រូដែលបានរៀននៅប្រទេសអុឹរ៉ុប", "រៀនរយៈពេល៣ម៉ោង ច័ន្ទ-សុក្រ ហើយសិស្សអាចរើសការរៀនជាក្រុម ឬ ម្នាក់ឯងបាន៕"], course_image_coding_png_1.default).generate(), new GenerateCard("សេវាកម្មបង្កើត Portfolio", ["សម្រាប់អ្នករកការងារធ្វើនិងអ្នកដែលកំពុងមានការងារស្រាប់", "ធានាកែរលំអររយៈពេល១ឆ្នាំ", "Free ក្នុងការបង្កើត CV៕"], course_image_coding_png_1.default).generate()));
};
exports.mainContent = mainContent;
