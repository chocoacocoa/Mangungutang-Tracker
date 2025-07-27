let data = JSON.parse(localStorage.getItem("userData")) || {
  name: ["cholo"],
  amount: [20],
  date: ["2006-07-28"],
  description: ["hi"],
};
localStorage.setItem("userData", JSON.stringify(data));
console.log(data.name);
console.log(data.amount[0]);
console.log(data.date[0]);
console.log(data.description[0]);
const namer = document.getElementById("namer");
const amount = document.getElementById("amount");
const date = document.getElementById("date");
const description = document.getElementById("description");
//----------------------------------------------------------------------------
const addDebt = document.getElementById("addDebt");
const clear = document.getElementById("clear");
const deleteData1 = document.getElementById("deleteData");
//----------------------------------------------------------------------------
const edit = document.getElementById("edit");
const paid = document.getElementById("paid");

//----------------------------------------------------------------------------
let logField = document.querySelectorAll("logField");
let loggers = document.getElementById("loggers");

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
                <button id="edit">Edit</button>
                <button id="paid">Paid</button>
                </div>
            </fieldset>
        `;
  }
}

function save() {
  localStorage.setItem("userData", JSON.stringify(data));
}

load();

addDebt.addEventListener("click", function () {
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
                <button id="edit">Edit</button>
                <button id="paid">Paid</button>
                </div>
            </fieldset>
        `;
});

deleteData1.addEventListener("click", function () {
  deleteData();
  localStorage.setItem("userData", JSON.stringify(data));
  alert("data deleted");
  location.reload();
});
