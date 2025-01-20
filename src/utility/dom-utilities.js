"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hideRightSidebar = exports.showMainContent = exports.hideMainContent = exports.hideAbout = exports.hideContact = exports.hideServices = exports.appendChildrenToParent = void 0;
const appendChildrenToParent = (parent, ...children) => {
    for (let i = 0; i < children.length; i += 1) {
        parent.appendChild(children[i]);
    }
};
exports.appendChildrenToParent = appendChildrenToParent;
const hideServices = () => {
    const services = document.querySelector(".services");
    services.style.display = "none";
    const servicesHeader = document.querySelector(".main-content > h2");
    servicesHeader.style.display = "none";
};
exports.hideServices = hideServices;
const hideContact = () => {
    const contact = document.querySelector(".main-content .contact");
    contact.style.display = "none";
};
exports.hideContact = hideContact;
const hideAbout = () => {
    const about = document.querySelector(".main-content .about");
    about.style.display = "none";
};
exports.hideAbout = hideAbout;
const hideMainContent = () => {
    const mainContent = document.querySelector(".main-content");
    mainContent.style.display = "none";
};
exports.hideMainContent = hideMainContent;
const showMainContent = () => {
    const mainContent = document.querySelector(".main-content");
    mainContent.style.display = "block";
};
exports.showMainContent = showMainContent;
const hideRightSidebar = () => {
    const rightSidebar = document.querySelector(".sidebar.right");
    rightSidebar.style.display = "none";
};
exports.hideRightSidebar = hideRightSidebar;
