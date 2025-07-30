let data = JSON.parse(localStorage.getItem("userData")) || [
  {
    name: "",
    amount: null,
    date: "",
    description: "",
    id: null,
  },
];

localStorage.setItem("userData", JSON.stringify(data));

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

let main = document.getElementById("main");
const namer = document.getElementById("namer");
const amount = document.getElementById("amount");
const date = document.getElementById("date");
const description = document.getElementById("description");
let userID = 0;
//----------------------------------------------------------------------------
const addDebt = document.getElementById("addDebt");
const clear = document.getElementById("clear");
const deleteData1 = document.getElementById("deleteData");
//----------------------------------------------------------------------------
let totalDebt = document.getElementById("totalDebt");
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
let paidVerify = document.getElementById("paidVerify");
let paidYes = document.getElementById("paidYes");
let paidNo = document.getElementById("paidNo");

//----------------------------------------------------------------------------

//FUNCTIONS----------------------------------------------------------------------------

function totalDebtResponse() {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += Number(data[i].amount);
  }
  console.log(sum);
  totalDebt.innerHTML += sum;
}

function markAsPaid(id) {
  const debt = data.find((item) => item.id === id);

  if (confirm(`Mark ${debt.name}'s debt of ₱${debt.amount} as paid?`)) {
    // Remove from array
    data = data.filter((item) => item.id !== id);

    // Update storage and UI
    localStorage.setItem("userData", JSON.stringify(data));
    setTimeout(() => {
      location.reload();
    }, 500);

    // calculateTotalDebt();
  }
}
function setupEventListeners() {
  document.querySelectorAll(".paid").forEach((button) => {
    onclick(button, function () {
      const id = parseInt(this.getAttribute("data-id"));
      markAsPaid(id);
    });
  });
}

function about() {
  aboutButton.addEventListener("click", function () {
    if (aboutSection.style.left !== "0vw") {
      aboutSection.style.left = "0vw";
    } else {
      aboutSection.style.left = "-50vw";
    }
  });
}

function deleteAll() {
  onclick(deleteData1, function () {
    const blankData = [
      {
        name: "",
        amount: null,
        date: "",
        description: "",
        id: null,
      },
    ];
    data = blankData;
    localStorage.setItem("userData", JSON.stringify(data));
    setTimeout(() => {
      location.reload();
    }, 500);
  });
}

function onclick(a, funct) {
  a.addEventListener("click", funct);
}

function clearForm() {
  onclick(clear, function () {
    namer.value = "";
    amount.value = null;
    date.value = "";
    description.value = "";
  });
}

function load() {
  for (let i = 1; i < data.length; i++) {
    loggers.innerHTML += `
        <fieldset class="logField">
                <div>
                <h5>Name: ${data[i].name}</h5>
                <h6 id="borrowed">Utang: <u>₱ ${data[i].amount}</u></h6>
                <h6 id="borrowedDate">Date: ${data[i].date}</h6>
                <h6 id="ⓘborrowerDescription">Description: ${data[i].description}</h6>
                </div>
                <div>
                <button class="paid" data-id="${data[i].id}">Paid</button>
                </div>
            </fieldset>
            <br>
        `;
  }
  totalDebtResponse();
  setupEventListeners();
}

function newUtang() {
  onclick(addDebt, function () {
    data = JSON.parse(localStorage.getItem("userData")) || [];
    const nameValue = namer.value.trim();
    const amountValue = amount.value.trim();
    const dateValue = date.value.trim();
    const descValue = description.value.trim();
    if (!nameValue || !amountValue || !dateValue) {
      console.log("Required fields are missing!");
      return;
    }
    const newEntry = {
      name: nameValue,
      amount: amountValue,
      date: dateValue,
      description: descValue,
      id: data.length > 0 ? data[data.length - 1].id + 1 : 1,
    };
    data.push(newEntry);
    localStorage.setItem("userData", JSON.stringify(data));
    console.log("New object added: ", newEntry);
  });
}
//FUNCTIONS----------------------------------------------------------------------------
about();
deleteAll();
clearForm();
load();
newUtang();
