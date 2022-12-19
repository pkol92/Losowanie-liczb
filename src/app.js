import { sortNumbers } from "./sortNumbers";
import "./style.css";

const body = document.body;
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
