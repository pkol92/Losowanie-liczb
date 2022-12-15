import { sortNumbers } from "./sortNumbers";

const root = document.getElementById("numbers-app");
const btn = document.createElement("button");
root.append(btn);

const div = document.createElement("div");
root.append(div);

btn.addEventListener("click", () => {
  sortNumbers();
});
