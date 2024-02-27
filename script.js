const employeeHolder = document.querySelector(".employee-background-card");
const interviewHolder = document.querySelector(".background-interview-card");
const employeeModal = document.querySelector("#employeeModal");
const interviewModal = document.querySelector("#interviewModal");

employeeModal.style.display = "none";
interviewModal.style.display = "none";

function addEmployee() {
  const name = document.querySelector("#name").value;
  const surname = document.querySelector("#surname").value;
  const position = document.querySelector("#position").value;
  const department = document.querySelector("#department").value;
  const email = document.querySelector("#email").value;
  const salary = document.querySelector("#salary").value;

  let newItem = `
  <div class="employee-card" id="employee1">
  <img class="employee-image" src="images/user-img.jpg" alt="" />
  <div class="employment-details" id="employee1-details">
    <h3 class="name-format">${name} ${surname}</h3>
    <p>${position}</p>
    <p>${department}</p>
    <p>${email}</p>
    <p>$${salary}</p>
  </div>
</div>
  `;

  employeeHolder.insertAdjacentHTML("beforeend", newItem);
  employeeModal.style.display = "none";
}

function showAddEmpModal() {
  employeeModal.style.display = "block";
}

function addInterview() {
  const departmentInterview = document.querySelector("#int-department").value;
  const positionInterview = document.querySelector("#int-position").value;

  let newInterview = `
    <div class="interview-card">
        <div class="interview-info">
          <p>${departmentInterview}</p>
          <p>${positionInterview}</p>
          <button class="btn-red">Accept</button>
          <button class="btn-green">Reject</button>
        </div>
      </div>
    `;

  interviewHolder.insertAdjacentHTML("beforeend", newInterview);
  interviewModal.style.display = "none";
}

function showAddIntModal() {
  interviewModal.style.display = "block";
}

const cancelBtn = document.querySelector(".cancel-btn");

cancelBtn.addEventListener("click", function () {
  employeeModal.style.display = "none";
});

const cancelIntBtn = document.querySelector(".int-cancel-btn");

cancelIntBtn.addEventListener("click", function () {
  interviewModal.style.display = "none";
});
