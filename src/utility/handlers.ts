export const handleMenu = () => {
  const menu = document.querySelector(".menu") as HTMLElement;
  menu.style.display = "none";

  const nav = document.querySelector(".nav") as HTMLElement;
  nav.style.display = "block";

};

export const handleCancel = () => {
  const nav = document.querySelector(".nav") as HTMLElement;
  nav.style.display = "none";
};

