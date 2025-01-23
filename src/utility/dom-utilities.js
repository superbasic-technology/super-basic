"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendToMain = exports.showAbout = exports.showContact = exports.hideHome = exports.hideMainContent = exports.hideAbout = exports.hideContact = exports.appendChildrenToParent = void 0;
const appendChildrenToParent = (parent, ...children) => {
    for (let i = 0; i < children.length; i += 1) {
        parent.appendChild(children[i]);
    }
};
exports.appendChildrenToParent = appendChildrenToParent;
const hideContact = () => {
    const contact = document.querySelector("main .contact");
    contact.style.display = "none";
};
exports.hideContact = hideContact;
const hideAbout = () => {
    const about = document.querySelector("main .about");
    about.style.display = "none";
};
exports.hideAbout = hideAbout;
const hideMainContent = () => {
    const mainContent = document.querySelector(".main-content");
    mainContent.style.display = "none";
};
exports.hideMainContent = hideMainContent;
const hideHome = () => {
    const home = document.querySelector("main .home");
    home.style.display = "none";
};
exports.hideHome = hideHome;
const showContact = () => {
    const contact = document.querySelector("main .contact");
    contact.style.display = `flex`;
};
exports.showContact = showContact;
const showAbout = () => {
    const about = document.querySelector("main .about");
    about.style.display = "flex";
};
exports.showAbout = showAbout;
const appendToMain = (...elements) => {
    const main = document.querySelector("main");
    (0, exports.appendChildrenToParent)(main, ...elements);
};
exports.appendToMain = appendToMain;
