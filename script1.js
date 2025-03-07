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
    p.innerHTML =
      "Hey Superhuman, Even with All Your Powers, You Can’t Attend More Classes Than Actually Exist — <br> Unless You’ve Mastered Time Travel! 🚀😂";
    displaySec.appendChild(p);
    return;
  }
  displaySec.innerHTML = "";

  let req_per = parseFloat(event.target[2].value);

  let cur_per = (pr / tot) * 100;

  if (cur_per == 100) {
    const p = document.createElement("p");
    p.innerHTML =
      "<strong>CHILL!</strong> 😎 You already Have 100% Attendance! ";
    displaySec.appendChild(p);
  }
    
    if (cur_per > req_per) {
      let y = (pr * 100 - req_per * tot) / req_per;
      const p = document.createElement("p");
      let bunk_per = parseFloat(pr / (tot + Math.round(y))) * 100;
      p.innerHTML = `
        You can BUNK <strong>${Math.round(y)}</strong> Classes! 🥳 <br><br>
        <strong>Current Attendance :</strong> 
        ${pr} / ${tot} -> ${cur_per.toFixed(2)}% <br><br>
        <strong>Attendance Then :</strong> 
        ${pr} / ${tot + Math.round(y)} -> ${bunk_per.toFixed(2)}%
    `;
      displaySec.appendChild(p);
    }
  } 
  else {
    let dif = 100 - req_per;
    let x = (req_per * tot - 100 * pr) / dif;
    needToAttend = Math.ceil(x);
    let then_per = ((pr + Math.ceil(x)) / (tot + Math.ceil(x))) * 100;
    const p = document.createElement("p");
    p.innerHTML = `
        You Need to Attend <strong>${needToAttend}</strong> More Classes to Get <strong>${req_per}%</strong> Attendance! 😮‍💨 <br><br>
        <strong>Current Attendance :</strong> 
        ${pr} / ${tot} -> ${cur_per.toFixed(2)}% <br><br>
        <strong>Attendance Then :</strong> 
        ${pr + Math.ceil(x)} / ${tot + Math.ceil(x)} -> ${then_per.toFixed(2)}%
    `;

    displaySec.appendChild(p);
  }
  }
});
