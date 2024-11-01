const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

// ----------- nodo html -----------
const cardContainer = document.getElementById("card-container");
// ----------- form html -----------
const addButton = document.getElementById("add-button");
const eventForm = document.getElementById("event-form");
const inputNameEl = document.getElementById("name-imput");
const inputRoleEl = document.getElementById("role-imput");
const inputEmailEl = document.getElementById("email-imput");
const inputImageEl = document.getElementById("img-imput");

console.log(inputNameEl, inputRoleEl, inputEmailEl, inputImageEl);

// ----------- funzione -----------
let cardHtmlContainer = "";

teamMembers.forEach((members) => {
  // console.log(members);

  let { name, role, email, img } = members;
  // console.log(name, role, email, img);

  // cardContainer.innerHTML = "";

  cardHtmlContainer = `<div class="card-structure col-6 col-md-4 p-2">
          <div class="card" >
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="${img}"
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body p-2">
                  <h5 class="card-title">${name}</h5>
                  <p class="card-text">${role}</p>
                  <p class="">${email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  `;

  cardContainer.innerHTML += cardHtmlContainer;
});

// ----------- aggiunta card con form -----------

eventForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputName = inputNameEl.value;
  const inputRole = inputRoleEl.value;
  const inputEmail = inputEmailEl.value;
  const inputImage = inputImageEl.value;
  console.log(inputName);

  // nome immagine per generazione card 'mattia.jpg'

  cardContainer.innerHTML += `<div class="card-structure col-6 col-md-4 p-2">
        <div class="card" >
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="img/${inputImage}"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body p-2">
                <h5 class="card-title">${inputName}</h5>
                <p class="card-text">${inputRole}</p>
                <p class="">${inputEmail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
});
