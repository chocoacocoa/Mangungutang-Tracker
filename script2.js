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
let edit;
let paid;

//----------------------------------------------------------------------------
let logField = document.getElementById("logField");
let loggers = document.getElementById("loggers");
//----------------------------------------------------------------------------
let mainNyf = document.getElementById("main");
let nyfY;
//----------------------------------------------------------------------------

function nyff() {
  //not finished yet function
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

function load() {
  for (let i = 0; i < data.name.length; i++) {
    // console.log(data.name[i]);
    loggers.innerHTML += `
        <fieldset class="logField">
                <div>
                <h5>name: ${data.name[i]}</h5>
                <h6 id="borrowed">Utang: <u>₱${data.amount[i]}</u></h6>
                <h6 id="borrowedDate">Date: <u>${data.date[i]}</u></h6>
                <h6 id="borrowerDescription">Description: <u>${data.description[i]}</u></h6>
                </div>
                <div>
                <button class="edit">Edit</button>
                <button class="paid">Paid</button>
                </div>
            </fieldset>
            <br>
        `;
  }
  edit = document.querySelectorAll(".edit");
  paid = document.querySelectorAll(".paid");
  
  
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
    //   localStorage.setItem("userData", JSON.stringify(data));
    save();
    const getData = localStorage.getItem("userData");
    loggers.innerHTML += `
        <fieldset class="logField">
                <div>
              <h5>name: ${data.name.at(-1)}</h5>
                <h6 id="borrowed">Utang: <u>₱${data.amount.at(-1)}</u></h6>
                <h6 id="borrowedDate">Date: <u>${data.date.at(-1)}</u></h6>
                <h6 id="borrowerDescription">Description: <u>${data.description.at(
                  -1
                )}</u></h6>
                </div>
                <div>
                <button class="edit">Edit</button>
                <button class="paid">Paid</button>
                </div>
            </fieldset>
            <br>
        `;
  }
});

deleteData1.addEventListener("click", function () {
  deleteData();
  localStorage.setItem("userData", JSON.stringify(data));
  alert("data deleted");
  location.reload();
});

clear.addEventListener("click", function () {
  nyff();
  nyfY.addEventListener("click", function () {
    location.reload();
  });
});
document.addEventListener('click', function(e) {
  // Handle edit buttons
  if (e.target && e.target.classList.contains('edit')) {
    nyff();
    nyfY.addEventListener("click", function () {
      location.reload();
    });
  }
  
  // Handle paid buttons
  if (e.target && e.target.classList.contains('paid')) {
    nyff();
    nyfY.addEventListener("click", function () {
      location.reload();
    });
  }
});
