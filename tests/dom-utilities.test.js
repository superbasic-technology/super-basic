"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dom_utilities_1 = require("../src/utility/dom-utilities");
describe("appendChildrenToParent()", () => {
    it("appends multiple children to the parent element", () => {
        // Create a parent element
        const parent = document.createElement("div");
        // Create child elements
        const child1 = document.createElement("h1");
        const child2 = document.createElement("p");
        (0, dom_utilities_1.appendChildrenToParent)(parent, child1, child2);
        expect(parent.children.length).toBe(2);
        expect(parent.children[0]).toBe(child1);
    });
});
