import { appendChildrenToParent } from "../utility/dom-utilities";
import facebook from "../assets/images/facebook.svg";
import tiktok from "../assets/images/tiktok-logo.svg";

export const footer = () => {
  const footer = document.querySelector("footer") as HTMLElement;
  const copyright = document.createElement("div");
  copyright.setAttribute("class", "copyright");

  const copyright_info = document.createElement("small");
  copyright_info.textContent = "© 2025 Super Basic. All rights reserved.";

  appendChildrenToParent(copyright, copyright_info);

  appendChildrenToParent(
    footer, 
    copyright,
  );
};