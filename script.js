let bunkClass = parseInt(0);
let needToAttend = parseInt(0);

document.getElementById("myForm").addEventListener("submit", function (event) {
  const displaySec = document.getElementById("displaySec");
  displaySec.innerHTML = "";
  event.preventDefault();
  let pr = parseFloat(event.target[0].value);
  let tot = parseFloat(event.target[1].value);

  if (pr > tot) {
    const p = document.createElement("p");
    p.textContent = "Number of Present Classes Cannot Exceed Total Classes!";
    displaySec.appendChild(p);
    return;
  }
  displaySec.innerHTML = "";

  let req_per = parseFloat(event.target[2].value);

  let cur_per = (pr / tot) * 100;

  if (cur_per > req_per) {
    let y = (pr * 100 - req_per * tot) / req_per;
    const p = document.createElement("p");
    let bunk_per = parseFloat(pr / (tot + Math.floor(y))) * 100;
    p.textContent = `
        You can BUNK ${Math.floor(y)} Classes 🙂 \n
        current attendence : ${pr} / ${tot} -> ${cur_per.toFixed(2)}% \n
        Attendence then : ${pr} / ${tot + Math.floor(y)} -> ${bunk_per.toFixed(
      2
    )}%
    `;
    displaySec.appendChild(p);
  } else {
    let dif = 100 - req_per;
    let x = (req_per * tot - 100 * pr) / dif;
    needToAttend = x;
    let then_per = ((pr + Math.floor(x)) / (tot + Math.floor(x))) * 100;
    const p = document.createElement("p");
    p.textContent = `
        You Need to Attend ${needToAttend} More Classes to Get ${req_per}% Attendance!!!
        current attendence : ${pr} / ${tot} -> ${cur_per.toFixed(2)}% \n
            Attendence then : ${pr + Math.floor(x)} / ${
      tot + Math.floor(x)
    } -> ${then_per.toFixed(2)}%
    `;
    displaySec.appendChild(p);
  }
});