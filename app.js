const root = document.getElementById("numbers-app");
const btn = document.createElement("button");
root.append(btn);

const div = document.createElement("div");
root.append(div);

const getRandom = (k, n) => {
  const numbers = new Array(n);
  const pickedNumbers = [];

  for (let i = 0; i < n; i++) {
    numbers[i] = i + 1;
  }
  for (let i = 0; i < k; i++) {
    let r = Math.floor(Math.random() * n);

    pickedNumbers.push(numbers[r]);

    numbers[r] = numbers[n - 1];

    n--;
  }
  return pickedNumbers.sort((a, b) => a - b);
};

const makeTable = (array1, array2, fieldTitles) => {
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let thr = document.createElement("tr");

  fieldTitles.forEach((fieldTitle) => {
    let th = document.createElement("th");
    th.appendChild(document.createTextNode(fieldTitle));
    thr.appendChild(th);
  });

  thead.appendChild(thr);
  table.appendChild(thead);

  const columns = (array1, array2) => {
    let longer = array1.length > array2.length ? array1 : array2;

    for (let i = 0; i < longer.length; i++) {
      let row = document.createElement("tr");
      let cell = document.createElement("td");
      cell.textContent = array1[i];

      let cell2 = document.createElement("td");
      cell2.textContent = array2[i];

      row.append(cell, cell2);

      table.appendChild(row);
    }
  };
  columns(array1, array2);
  root.append(table);
  return table;
};

const sortNumbers = () => {
  const numbers = getRandom(20, 100);
  const even = [];
  const odd = [];
  numbers.map((x) => {
    return x % 2 == 0 ? even.push(x) : odd.push(x);
  });
  makeTable(even, odd, ["Parzyste", "Nieparzyste"]);
};

btn.addEventListener("click", () => {
  sortNumbers();
});
