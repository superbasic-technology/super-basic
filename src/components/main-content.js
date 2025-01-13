"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainContent = exports.AppendToMainContent = exports.GenerateCard = exports.CardInfo = void 0;
const dom_utilities_1 = require("../utility/dom-utilities");
// Abstraction
class AbstractCardInfo {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}
// Concrete implementations (low-level module)
class CardInfo extends AbstractCardInfo {
    constructor(title, description) {
        super(title, description);
        this.title = title;
        this.description = description;
    }
}
exports.CardInfo = CardInfo;
// High-level module
class GenerateCard {
    generate(card) {
        const serviceCard = document.createElement("div");
        serviceCard.setAttribute("class", "service-card");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const link = document.createElement("a");
        h3.textContent = `${card.title}`;
        p.textContent = `${card.description}`;
        link.textContent = `More info`;
        (0, dom_utilities_1.appendChildrenToParent)(serviceCard, h3, p, link);
        return serviceCard;
    }
}
exports.GenerateCard = GenerateCard;
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
    new AppendToMainContent().append(new GenerateCard().generate(new CardInfo("Sim card", "Hello, world!")));
};
exports.mainContent = mainContent;
