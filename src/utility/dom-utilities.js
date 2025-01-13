"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendChildrenToParent = void 0;
const appendChildrenToParent = (parent, ...children) => {
    for (let i = 0; i < children.length; i += 1) {
        parent.appendChild(children[i]);
    }
};
exports.appendChildrenToParent = appendChildrenToParent;
