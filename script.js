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
    let bunk_per = parseFloat(pr / (tot + Math.round(y))) * 100;
    p.textContent = `
        You can BUNK ${Math.round(y)} Classes 🙂 \n
        Current Attendence : ${pr} / ${tot} -> ${cur_per.toFixed(2)}% \n
        Attendence Then : ${pr} / ${tot + Math.round(y)} -> ${bunk_per.toFixed(
      2
    )}%
    `;
    displaySec.appendChild(p);
  } else {
    let dif = 100 - req_per;
    let x = (req_per * tot - 100 * pr) / dif;
    needToAttend = Math.round(x);
    let then_per = ((pr + Math.round(x)) / (tot + Math.round(x))) * 100;
    const p = document.createElement("p");
    p.textContent = `
        You Need to Attend ${needToAttend} More Classes to Get ${req_per}% Attendance!!! \n\n\n
        Current Attendence : ${pr} / ${tot} -> ${cur_per.toFixed(2)}% 
            Attendence Then : ${pr + Math.round(x)} / ${
      tot + Math.round(x)
    } -> ${then_per.toFixed(2)}%
    `;

    displaySec.appendChild(p);
  }
});
