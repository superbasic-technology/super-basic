import { appendChildrenToParent } from "../utility/dom-utilities";
import facebook from "../assets/images/facebook.svg";

class SocialMedias {
  create(): HTMLElement {
    const social_medias = document.createElement("div");
    social_medias.setAttribute("class", "social-medias");
  
    const facebook_img = document.createElement("img");
    facebook_img.src = `${facebook}`;
    const facebook_link = document.createElement("a");
    facebook_link.href = "https://web.facebook.com/profile.php?id=61571511628571";
    facebook_link.rel = "noopener noreferrer";
    facebook_link.target = "_blank";
    facebook_link.appendChild(facebook_img);

    const telegram = document.createElement("small");
    telegram.textContent = "Telegram: +855 92 695 541";

    appendChildrenToParent(social_medias, facebook_link, telegram);

    return social_medias;
  }
}

class Copyright {
  create(): HTMLElement {
    const copyright = document.createElement("div");
    copyright.setAttribute("class", "copyright");
  
    const copyright_info = document.createElement("small");
    copyright_info.textContent = "© 2025 Super Basic. All rights reserved.";
  
    appendChildrenToParent(copyright, copyright_info);

    return copyright;
  }
}

export const footer = () => {
  const footer = document.querySelector("footer") as HTMLElement;

  appendChildrenToParent(
    footer, 
    new SocialMedias().create(),
    new Copyright().create(),
    document.createElement("div"),
  );
};