// export const App = () => {
//     const root = document.getElementById('numbers-app');
    
// };

const root = document.getElementById('numbers-app');
const btn = document.createElement("button");
btn.innerHTML = "Jestem buttonem"
root.append(btn);



const div = document.createElement("div");
root.append(div);

// function createTable(objectArray, fields, fieldTitles) {
//     let body = document.getElementsByTagName('body')[0];
//     let tbl = document.createElement('table');
//     let thead = document.createElement('thead');
//     let thr = document.createElement('tr');

//     fieldTitles.forEach((fieldTitle) => {
//       let th = document.createElement('th');
//       th.appendChild(document.createTextNode(fieldTitle));
//       thr.appendChild(th);
//     });

//     thead.appendChild(thr);
//     tbl.appendChild(thead);
  
//     let tbdy = document.createElement('tbody');
//     let tr = document.createElement('tr');

//     objectArray.forEach((object) => {
//       let tr = document.createElement('tr');
//       fields.forEach((field) => {
//         var td = document.createElement('td');
//         td.appendChild(document.createTextNode(object[field]));
//         tr.appendChild(td);
//       });

//       tbdy.appendChild(tr);    
//     });

//     tbl.appendChild(tbdy);
//     body.appendChild(tbl)
//     return tbl;
//   }
  
function getRandom(k, n) {
    const numbers = new Array(n);
    const pickedNumbers = [];

    for (let i=0; i<n; i++) {
    numbers[i] = i + 1;
    }
    // losowanie k liczb
    for (let i=0; i<k; i++) {
     
    // tworzenie losowego indeksu pomiędzy 0 i n - 1
    let r = Math.floor(Math.random()*n);
     
    // wybieramy element z losowego miejsca
    pickedNumbers.push(numbers[r]);
     
    // przeniesienia ostatniego elementu do miejsca z którego wzięliśmy
    numbers[r] = numbers[n - 1];
     
    //zmniejszamy n
    n--;
    }
    return pickedNumbers.sort((a,b) => a-b);
}

function makeTable(array1, array2, fieldTitles) {

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let thr = document.createElement('tr');

    fieldTitles.forEach((fieldTitle) => {
        let th = document.createElement('th');
        th.appendChild(document.createTextNode(fieldTitle));
        thr.appendChild(th);
    });

    thead.appendChild(thr);
    table.appendChild(thead);

    function columns(array1, array2) {
        let longer = array1.length > array2.length? array1 : array2;
        // let shorter = longer === array1? array2 : array1;
        // console.log(shorter);

        for (let i = 0; i < longer.length; i++) {
        let row = document.createElement('tr');
        let cell = document.createElement('td');
        cell.textContent = array1[i];

        let cell2 = document.createElement('td');
        cell2.textContent = array2[i];

            // for (let j = 0; j < shorter.length; j++) {
            //         let cell = document.createElement('td');
            //         cell.textContent = shorter[j];
            //         row.appendChild(cell);
            //     }
        
        row.append(cell, cell2);
            
        table.appendChild(row);
        }
    }
    columns(array1, array2);
    root.append(table);
    return table;
}

function sortNumbers() {
    const numbers = getRandom(20, 100)
    const even = [];
    const odd = [];
    numbers.map((x) => {return x % 2==0? even.push(x) : odd.push(x)});
    makeTable(even, odd, ["Parzyste", "Nieparzyste"]);
}


btn.addEventListener("click", () => {
    sortNumbers();
});