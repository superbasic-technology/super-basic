import { appendChildrenToParent } from "../utility/dom-utilities";
import facebook from "../assets/images/facebook.svg";
import tiktok from "../assets/images/tiktok-logo.svg";

class SocialMedias {
  create(): HTMLElement {
    const social_medias = document.createElement("div");
    social_medias.setAttribute("class", "social-medias");

    const facebook_img = document.createElement("img");
    facebook_img.src = `${facebook}`;

    const tiktok_img = document.createElement("img");
    tiktok_img.src = `${tiktok}`;

    const telegram = document.createElement("small");
    telegram.textContent = "Telegram: +855 92 695 541";

    appendChildrenToParent(social_medias, facebook_img, tiktok_img, telegram);

    return social_medias;
  }
}

export const footer = () => {
  const footer = document.querySelector("footer") as HTMLElement;
  const copyright = document.createElement("div");
  copyright.setAttribute("class", "copyright");

  const copyright_info = document.createElement("small");
  copyright_info.textContent = "© 2025 Super Basic. All rights reserved.";

  appendChildrenToParent(copyright, copyright_info);

  appendChildrenToParent(
    footer, 
    new SocialMedias().create(),
    copyright,
  );
};