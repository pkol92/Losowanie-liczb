import { sortNumbers } from "./sortNumbers";
import "./style.css";

const root = document.getElementById("numbers-app");
const btn = document.createElement("button");
const tabl = document.getElementById("tab");
btn.innerHTML = "Wylosuj liczby";
root.append(btn);

btn.addEventListener("click", () => {
  if (tabl) tabl.remove();
  sortNumbers();
});
