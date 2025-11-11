// Form >>>
let loginPg = document.querySelector(`#welcome-container`);
let formLogin = document.querySelector(`#login-form`);
let pinLogin = document.querySelector(`#pin`);
let pinErrDiv = document.querySelector(`#pin-err`);
let passwrdLogin = document.querySelector(`#password`);
let passwrdLoginToggle = document.querySelector(`#toggle-passwrd`);
let passwrdErrDiv = document.querySelector(`#password-err`);
let loginFormErr = document.querySelector(`#login-err`);
// Dashboard >>>
let dashboardMainDiv = document.querySelector(`#dashboard-container`);
let logoutBTN = document.querySelector(`#logout-btn`);
let addStudentBTN = document.querySelector(`#add-btn`);
// Form Modal >>>
let formModalDiv = document.querySelector(`#form-modal-cont`);
let formModalClosedIcon = document.querySelector(`#close-modal`);
let studentADDForm = document.querySelector(`#add-student-form`);
// The ADD FORM >>>
let nameStudentInput = document.querySelector(`#student-name-input`);
let nameERR = document.querySelector(`#student-name-error`);
let ageStudentInput = document.querySelector(`#students-age-input`);
let ageERR = document.querySelector(`#students-age-error`);
let classStudentInput = document.querySelector(`#students-class-input`);
let classERR = document.querySelector(`#students-class-error`);
let imgURLInput = document.querySelector(`#image-url`);
let imgURLERR = document.querySelector(`#image-url-error`);
let mathsScore = document.querySelector(`#maths`);
let mathsERR = document.querySelector(`#maths-error`);
let englishScore = document.querySelector(`#english`);
let englishERR = document.querySelector(`#english-error`);
let sciScore = document.querySelector(`#science`);
let sciERR = document.querySelector(`#science-error`);
// The TABLE >>>
let tableDiv = document.querySelector(`#dynamic-data-container`);
let mainTableDiv = document.querySelector(`#table-container-main`);

// AUTH here >>>>

formLogin.addEventListener(`submit`, (evt) => {
  evt.preventDefault();

  let pin = pinLogin.value.trim().toLowerCase();
  let passWord = passwrdLogin.value.trim().toLowerCase();

  if (pin === ``) {
    pinErrDiv.textContent = `**Ogbeni, PIN cannot be EMPTY!`;
    pinLogin.focus();
    return;
  }

  if (passWord === ``) {
    passwrdErrDiv.textContent = `**Ogbeni, Password cannot be EMPTY!`;
    passwrdLogin.focus();
    return;
  }

  if (pin === `teacher001` && passWord === `001code`) {
    loginPg.style.display = `none`;
    dashboardMainDiv.style.display = `flex`;
  } else {
    loginFormErr.textContent = `**PIN and Password NOT CORRECT!`;
    pinLogin.focus();
  }

  formLogin.reset();
});

pinLogin.addEventListener(`input`, () => {
  pinErrDiv.textContent = ``;
  loginFormErr.textContent = ``;
});

passwrdLogin.addEventListener(`input`, () => {
  passwrdErrDiv.textContent = ``;
  loginFormErr.textContent = ``;
});

passwrdLoginToggle.addEventListener(`click`, () => {
  let isPasswordLoggedIn = passwrdLogin.type === `password`;

  if (isPasswordLoggedIn) {
    passwrdLogin.type = `text`;
    passwrdLoginToggle.classList.add(`fa-eye-slash`);
  } else {
    passwrdLogin.type = `password`;
    passwrdLoginToggle.classList.remove(`fa-eye-slash`);
  }
});

logoutBTN.addEventListener(`click`, () => {
  loginPg.style.display = `flex`;
  dashboardMainDiv.style.display = `none`;
});

// The ADD STUDENT BTN (in the Dashboard) that triggers the Form Modal >>>

addStudentBTN.addEventListener(`click`, () => {
  formModalDiv.classList.remove(`form-modal-container`);
  formModalDiv.classList.add(`form-modal-container-visible`);
});

formModalClosedIcon.addEventListener(`click`, closedModalFunc);
function closedModalFunc() {
  if (formModalDiv.classList.contains(`form-modal-container-visible`)) {
    formModalDiv.classList.remove(`form-modal-container-visible`);
    formModalDiv.classList.add(`form-modal-container`);
  }

  studentADDForm.reset();
}

// This empty array will hold the object-literals of the form >>>>
let studentsDATA = [];

studentADDForm.addEventListener(`submit`, (e) => {
  e.preventDefault();

  let nameOfStudent = nameStudentInput.value.trim();
  let ageOfStudent = ageStudentInput.value.trim();
  let classOfStudent = classStudentInput.value.trim();
  let imageOfStudent = imgURLInput.value.trim();

  let mathematicsScore = mathsScore.value.trim();
  let englishScorees = englishScore.value.trim();
  let scienceScore = sciScore.value.trim();

  let aveSCORES = (
    (Number(mathematicsScore) + Number(englishScorees) + Number(scienceScore)) /
    3
  ).toFixed(2);

  if (nameOfStudent === ``) {
    nameERR.textContent = `**Ogbeni, name cannot be EMPTY!`;
    nameStudentInput.focus();
    return;
  }

  if (ageOfStudent === ``) {
    ageERR.textContent = `**Ogbeni, age cannot be EMPTY!`;
    ageStudentInput.focus();
    return;
  }

  if (classOfStudent === ``) {
    classERR.textContent = `**Ogbeni, class cannot be EMPTY!`;
    classStudentInput.focus();
    return;
  }

  if (imageOfStudent === ``) {
    imgURLERR.textContent = `**Ogbeni, Image URL cannot be EMPTY!`;
    imgURLInput.focus();
    return;
  }

  // Using REGEX to validate the scores for Maths, English & Science >>>

  if (mathematicsScore === `` || !/^[0-9]+$/.test(mathematicsScore)) {
    mathsERR.textContent = `**Ogbeni, Score cannot be EMPTY or contain A-Z!`;
    mathsScore.focus();
    return;
  }

  if (englishScorees === `` || !/^[0-9]+$/.test(englishScorees)) {
    englishERR.textContent = `**Ogbeni, Score cannot be EMPTY or contain A-Z!`;
    englishScore.focus();
    return;
  }

  if (scienceScore === `` || !/^[0-9]+$/.test(scienceScore)) {
    sciERR.textContent = `**Ogbeni, Score cannot be EMPTY or contain A-Z!`;
    sciScore.focus();
    return;
  }

  const stdDATA_OBJ = {
    stdName: nameOfStudent,
    stdAge: ageOfStudent,
    stdClass: classOfStudent,
    stdImageURL: imageOfStudent,
    stdMathsScore: mathematicsScore,
    stdEnglishScore: englishScorees,
    stdScienceScore: scienceScore,
    stdAVESCORES: aveSCORES,
    stdPerfomance: function () {
      if (this.stdAVESCORES >= 80 && this.stdAVESCORES <= 100) {
        return `Excellent`;
      } else if (this.stdAVESCORES >= 60 && this.stdAVESCORES < 80) {
        return `Good`;
      } else if (this.stdAVESCORES >= 40 && this.stdAVESCORES < 60) {
        return `Fair`;
      } else {
        return `Needs Help`;
      }
    },
  };

  // This line of code helps to get the performance of the student >>>
  stdDATA_OBJ.performanceStudent = stdDATA_OBJ.stdPerfomance();
  // >>>>

  studentsDATA.push(stdDATA_OBJ);
  localStorage.setItem(`StudentDatabase`, JSON.stringify(studentsDATA));

  studentADDForm.reset();

  console.log(studentsDATA);

  setTimeout(() => {
    closedModalFunc();
  }, 1000);
});

nameStudentInput.addEventListener(`input`, () => {
  nameERR.textContent = ``;
  ageERR.textContent = ``;
  classERR.textContent = ``;
  mathsERR.textContent = ``;
  englishERR.textContent = ``;
  sciERR.textContent = ``;
  imgURLERR.textContent = ``;
});

ageStudentInput.addEventListener(`input`, () => {
  nameERR.textContent = ``;
  ageERR.textContent = ``;
  classERR.textContent = ``;
  mathsERR.textContent = ``;
  englishERR.textContent = ``;
  sciERR.textContent = ``;
  imgURLERR.textContent = ``;
});

classStudentInput.addEventListener(`input`, () => {
  nameERR.textContent = ``;
  ageERR.textContent = ``;
  classERR.textContent = ``;
  mathsERR.textContent = ``;
  englishERR.textContent = ``;
  sciERR.textContent = ``;
  imgURLERR.textContent = ``;
});

imgURLInput.addEventListener(`input`, () => {
  nameERR.textContent = ``;
  ageERR.textContent = ``;
  classERR.textContent = ``;
  mathsERR.textContent = ``;
  englishERR.textContent = ``;
  sciERR.textContent = ``;
  imgURLERR.textContent = ``;
});

mathsScore.addEventListener(`input`, () => {
  nameERR.textContent = ``;
  ageERR.textContent = ``;
  classERR.textContent = ``;
  mathsERR.textContent = ``;
  englishERR.textContent = ``;
  sciERR.textContent = ``;
  imgURLERR.textContent = ``;
});

englishScore.addEventListener(`input`, () => {
  nameERR.textContent = ``;
  ageERR.textContent = ``;
  classERR.textContent = ``;
  mathsERR.textContent = ``;
  englishERR.textContent = ``;
  sciERR.textContent = ``;
  imgURLERR.textContent = ``;
});

sciScore.addEventListener(`input`, () => {
  nameERR.textContent = ``;
  ageERR.textContent = ``;
  classERR.textContent = ``;
  mathsERR.textContent = ``;
  englishERR.textContent = ``;
  sciERR.textContent = ``;
  imgURLERR.textContent = ``;
});

// RENDER the output to the UI >>>

function renderOUTPUT() {
  if (localStorage.getItem(`StudentDatabase`)) {
    studentsDATA = JSON.parse(localStorage.getItem(`StudentDatabase`));
  }

  tableDiv.innerHTML = ``;

  studentsDATA.forEach((std, index) => {
    let nameOfStd = std.stdName;
    let imgOfStd = std.stdImageURL;
    let classOfStd = std.stdClass;
    let aveScoresOfStd = std.stdAVESCORES;
    let perfOfStd = std.stdPerfomance();

    let firstDiv = document.createElement(`div`);
    firstDiv.classList.add(`index-number-cont`);

    firstDiv.innerHTML = `<p>${index + 1}</p>`;
    tableDiv.appendChild(firstDiv);

    let secondDiv = document.createElement(`div`);
    secondDiv.classList.add(`profile-pics-cont`);
    secondDiv.innerHTML = `<img src="${imgOfStd}" alt="student-image" />`;
    tableDiv.appendChild(secondDiv);

    let thirdDiv = document.createElement(`div`);
    thirdDiv.classList.add(`students-names-cont`);
    thirdDiv.innerHTML = `<p>${nameOfStd}</p>`;
    tableDiv.appendChild(thirdDiv);

    let fourthDiv = document.createElement(`div`);
    fourthDiv.classList.add(`student-class-cont`);
    fourthDiv.innerHTML = `<p>${classOfStd}</p>`;
    tableDiv.appendChild(fourthDiv);

    let fifthDiv = document.createElement(`div`);
    fifthDiv.classList.add(`scores-cont`);
    fifthDiv.innerHTML = `<p>${aveScoresOfStd}</p>`;
    tableDiv.appendChild(fifthDiv);

    let sixthDiv = document.createElement(`div`);
    sixthDiv.classList.add(`performance-cat-cont`);
    sixthDiv.innerHTML = `<p>${perfOfStd}</p>`;
    tableDiv.appendChild(sixthDiv);

    let seventhDiv = document.createElement(`div`);
    seventhDiv.classList.add(`delete-cont`);
    seventhDiv.innerHTML = `<i class="fa-regular fa-trash-can" id="delete-student"></i>`;
    seventhDiv.innerHTML.addEventListener(`click`, () => {
      studentsDATA.splice(index, 1);
      localStorage.setItem(`StudentDatabase`, JSON.stringify(studentsDATA));
      renderOUTPUT();
    });

    tableDiv.appendChild(seventhDiv);

    mainTableDiv.appendChild(tableDiv);
  });
}
