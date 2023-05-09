import { sortNumbers } from "./sortNumbers";
import "./style.scss";
import dices from "./Assets/Images/dices.svg";

const body = document.body;
const divWithImage = document.createElement("div");
divWithImage.setAttribute("class", "div-image");
body.append(divWithImage);

const div = document.createElement("div");
div.setAttribute("id", "numbers-app");
body.append(div);
const root = document.getElementById("numbers-app");
const btn = document.createElement("button");
btn.innerHTML = "Wylosuj liczby";
root.append(btn);

btn.addEventListener("click", () => {
  const table = document.getElementById("tab");
  table && table.remove();
  sortNumbers(root);
});

const createIcon = () => {
  const element = document.createElement("div");
  element.innerHTML = dices;
  element.setAttribute("class", "icon");
  return element;
};

btn.appendChild(createIcon());
