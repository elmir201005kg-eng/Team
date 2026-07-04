const box = document.getElementById("box");
// box.innerHTML = "div";
// box.style.width = "100px";
// box.style.height = "100px";
// box.style.border = "1px solid black";
// box.style.display = "flex";
// box.style.justifyContent = "center";
// box.style.alignItems = "center";
// box.style.color = "red";

const footer = document.getElementById("footer");
const content = document.querySelector(".footer-content");
const links = document.querySelector(".links");
const newsletter = document.querySelector(".newsletter");
const contact = document.querySelector(".contact");
const social = document.querySelector(".social");

footer.style.background = "#333";
footer.style.padding = "70px 0";
footer.style.color = "white";
footer.style.fontFamily = "Arial";

content.style.width = "90%";
content.style.maxWidth = "1200px";
content.style.margin = "auto";
content.style.display = "flex";
content.style.justifyContent = "space-between";
content.style.alignItems = "flex-start";

[links, newsletter, contact].forEach((item) => {
  item.style.display = "flex";
  item.style.flexDirection = "column";
});

newsletter.style.alignItems = "center";
contact.style.alignItems = "center";

document.querySelectorAll("h3").forEach((h3) => {
  h3.style.marginBottom = "25px";
  h3.style.fontSize = "16px";
  h3.style.letterSpacing = "2px";
});

document.querySelectorAll(".links a").forEach((a) => {
  a.style.textDecoration = "none";
  a.style.color = "#ddd";
  a.style.margin = "8px 0";
  a.style.fontSize = "15px";
});

const input = document.querySelector("input");

input.style.width = "320px";
input.style.height = "45px";
input.style.paddingLeft = "15px";
input.style.border = "none";
input.style.outline = "none";
input.style.marginBottom = "25px";

const button = document.querySelector("button");

button.style.width = "180px";
button.style.height = "45px";
button.style.border = "2px solid white";
button.style.background = "transparent";
button.style.color = "white";
button.style.borderRadius = "30px";
button.style.cursor = "pointer";

button.onmouseover = () => {
  button.style.background = "white";
  button.style.color = "#333";
};

button.onmouseout = () => {
  button.style.background = "transparent";
  button.style.color = "white";
};

social.style.display = "flex";
social.style.gap = "20px";
social.style.fontSize = "22px";
social.style.marginTop = "20px";

const icons = document.querySelectorAll(".social img");

icons.forEach((img) => {
  img.style.width = "20px";
  img.style.height = "20px";
  img.style.display = "block";
  img.style.objectFit = "contain";
  img.style.cursor = "pointer";
  img.style.transition = "0.3s ease";
});

icons.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.2)";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});
