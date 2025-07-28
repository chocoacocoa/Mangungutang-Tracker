let data = JSON.parse(localStorage.getItem("userData")) || {
  name: [],
  amount: [],
  date: [],
  description: [],
};
localStorage.setItem("userData", JSON.stringify(data));
console.log(data.name);
console.log(data.amount[0]);
console.log(data.date[0]);
console.log(data.description[0]);
let main = document.getElementById("main");
const namer = document.getElementById("namer");
const amount = document.getElementById("amount");
const date = document.getElementById("date");
const description = document.getElementById("description");
//----------------------------------------------------------------------------
const addDebt = document.getElementById("addDebt");
const clear = document.getElementById("clear");
const deleteData1 = document.getElementById("deleteData");
//----------------------------------------------------------------------------
let totalDebt = document.getElementById("totalDebt");
let edit;
let paid;
//----------------------------------------------------------------------------
let logField = document.getElementById("logField");
let loggers = document.getElementById("loggers");
//----------------------------------------------------------------------------
let mainNyf = document.getElementById("main");
let nyfY;
let totalDebtSum = 0;
let header = document.getElementById("header");
let aboutSection = document.getElementById("aboutSection");
let aboutButton = document.getElementById("aboutButton");
const today = new Date();
let id = 0;
//----------------------------------------------------------------------------

function nyff() {
  mainNyf.innerHTML = `
  <div class="nyf">
             <div>
                <img src="/media/pic.jpg">
                <h4>Sorry po, hindi pa po tapos</h4>
                <button id="nyfY">Oki pow</button>
            </div>
        </div>
 
`;
  nyfY = document.getElementById("nyfY");
}

function deleteData() {
  data.name = [];
  data.amount = [];
  data.date = [];
  data.description = [];
}

function about() {
  aboutButton.addEventListener("click", function () {
    // if(aboutSection.style.animation == "aboutMoveO"){
    //   aboutSection.style.animation -= "aboutMoveO";
    //   aboutSection.style.animation += "aboutMoveE";
    // }else{
    //   aboutSection.style.animation -= "aboutMoveE";
    //   aboutSection.style.animation += "aboutMoveO";
    // }
    if (aboutSection.style.left !== "0vw") {
      aboutSection.style.left = "0vw";
    } else {
      aboutSection.style.left = "-50vw";
    }
  });
}
about();

function totalDebtSummation() {
  for (let i = 0; i < data.amount.length; i++) {
    totalDebtSum += Number(data.amount[i]);
  }
  console.log("total: ", totalDebtSum);
}

function load() {
  totalDebtSummation();
  totalDebt.innerHTML += totalDebtSum;

  for (let i = 0; i < data.name.length; i++) {
    id++;
    loggers.innerHTML += `
        <fieldset class="logField">
                <div>
                <p id="user${id}">ID: ${id}</p>
                <h5>Name: ${data.name[i]}</h5>
                <h6 id="borrowed">Utang: <u>₱ ${data.amount[i]}</u></h6>
                <h6 id="borrowedDate">Date: ${data.date[i]}</h6>
                <h6 id="ⓘborrowerDescription">Description: ${data.description[i]}</h6>
                </div>
                <div>
                <button class="edit">Edit</button>
                <button class="paid">Paid</button>
                </div>
            </fieldset>
            <br>
        `;
    edit = document.querySelectorAll(".edit");
    paid = document.querySelectorAll(".paid");
  }
}
function save() {
  localStorage.setItem("userData", JSON.stringify(data));
}

load();

addDebt.addEventListener("click", function () {
  if (namer.value !== "") {
    data.name.push(namer.value);
    data.amount.push(amount.value);
    data.date.push(date.value);
    data.description.push(description.value);
    save();
    setTimeout(() => {
      location.reload();
    }, 100);
  }
});

deleteData1.addEventListener("click", function () {
  deleteData();
  localStorage.setItem("userData", JSON.stringify(data));
  alert("data deleted");
  location.reload();
});

clear.addEventListener("click", function () {
  namer.value = "";
  amount.value = null;
  date.value = "";
  description.value = "";
});

document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("edit")) {
    nyff();
    nyfY.addEventListener("click", function () {
      location.reload();
    });
  }
  if (e.target && e.target.classList.contains("paid")) {
    nyff();
    nyfY.addEventListener("click", function () {
      location.reload();
    });
  }
});

function editButton(){

}
