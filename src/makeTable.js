export const makeTable = (array1, array2, fieldTitles) => {
  let table = document.createElement("table");
  table.setAttribute("id", "tab");
  let thead = document.createElement("thead");
  let thr = document.createElement("tr");

  fieldTitles.forEach((fieldTitle) => {
    let th = document.createElement("th");
    th.appendChild(document.createTextNode(fieldTitle));
    thr.appendChild(th);
  });

  thead.appendChild(thr);
  table.appendChild(thead);

  function columns(array1, array2) {
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
  }
  columns(array1, array2);
  root.append(table);
  return table;
};
