"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyHandlers = exports.app = void 0;
require("./styles/main.css");
const header_1 = require("./components/header");
const handlers_1 = require("./utility/handlers");
const footer_1 = require("./components/footer");
const main_1 = require("./components/main");
const app = () => {
    (0, header_1.header)();
    (0, main_1.main)();
    (0, footer_1.footer)();
};
exports.app = app;
const applyHandlers = () => {
    const hamburger_menu = document.querySelector(".hamburger-menu");
    hamburger_menu.addEventListener("click", handlers_1.handleHamburgerMenu);
    const cancel = document.querySelector(".cancel");
    cancel.addEventListener("click", handlers_1.handleCancel);
    const contact = document.querySelector("ul .contact");
    contact.addEventListener("click", handlers_1.handleContact);
    const home = document.querySelector("ul .home");
    home.addEventListener("click", handlers_1.handleHome);
    const about = document.querySelector("ul .about");
    about.addEventListener("click", handlers_1.handleAbout);
    const logo = document.querySelector("header .logo");
    logo.addEventListener("click", handlers_1.handleHome);
    const news = document.querySelector("ul .news");
    news.addEventListener("click", handlers_1.handleNews);
    // Hide .hamburger-menu when the screen is wider than 768px
    window.addEventListener("resize", handlers_1.handleNavigationAtSmallScreen);
    const topic = document.querySelector("a.whyNoInternshipOrJob");
    topic.addEventListener("click", handlers_1.handleTopic);
};
exports.applyHandlers = applyHandlers;
(0, exports.app)();
(0, exports.applyHandlers)();
