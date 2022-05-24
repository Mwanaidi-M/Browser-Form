// require("./tests");
import { countries } from "country-data-list";

const showSuccessMsg = document.getElementById("success-submit");
const getForm = document.getElementById("p-form");
const getEmail = document.getElementById("uemail");
const countrySelect = document.getElementById("ucountry");
const getZip = document.getElementById("uzip");
const getPwd = document.getElementById("upwd");
const getConfirmPwd = document.getElementById("upwd2");
const getAllFormElements = document.getElementById("p-form").elements;

const emailErr = document.getElementById("email-err");
const countryErr = document.getElementById("country-err");
const zipErr = document.getElementById("zip-err");
const pwdErr = document.getElementById("pwd-err");
const pwd2Err = document.getElementById("pwd2-err");

const allCountries = countries.all.map((country) => country.name);
allCountries.sort();
allCountries.forEach((country) => {
  const countryOption = document.createElement("option");
  countryOption.innerHTML = country;
  countryOption.setAttribute("value", country);

  countrySelect.appendChild(countryOption);
});

// console.table(allCountries);
getEmail.addEventListener("input", () => {
  if (getEmail.checkValidity()) {
    emailErr.innerHTML = "";
  }
});

countrySelect.addEventListener("input", () => {
  if (countrySelect.checkValidity()) {
    countryErr.innerHTML = "";
  }
});
getZip.addEventListener("input", () => {
  if (getZip.checkValidity()) {
    zipErr.innerHTML = "";
  }
});
getPwd.addEventListener("input", () => {
  if (getPwd.checkValidity()) {
    pwdErr.innerHTML = "";
  }
});
getConfirmPwd.addEventListener("input", () => {
  if (getConfirmPwd.checkValidity()) {
    pwd2Err.innerHTML = "";
  }
});
function validateFields() {
  if (getEmail.validity.valueMissing) {
    emailErr.innerHTML = "&#9888; Please provide an email address.";
  } else if (getEmail.validity.patternMismatch) {
    emailErr.innerHTML =
      "&#9888; Please provide a valid email in the format amaya@company.com.";
  } else {
    emailErr.innerHTML = "";
  }

  if (countrySelect.validity.valueMissing) {
    countryErr.innerHTML = "&#9888; Please select a country.";
  } else {
    countryErr.innerHTML = "";
  }

  if (getZip.validity.valueMissing) {
    zipErr.innerHTML = "&#9888; Please provide a zip code.";
  } else if (getZip.validity.patternMismatch) {
    zipErr.innerHTML =
      "&#9888; Please provide a valid zip code. For example 20054-0012.";
  } else {
    zipErr.innerHTML = "";
  }

  if (getPwd.validity.valueMissing) {
    pwdErr.innerHTML = "&#9888; Please provide a password.";
  } else if (getPwd.validity.patternMismatch) {
    pwdErr.innerHTML = `<pre>
    Must have 8 characters or more.
    Must have upper & lowercase letters.
    Must have at least one number.
    Must have at least one special character.</pre>`;
  } else {
    pwdErr.innerHTML = "";
  }

  if (getConfirmPwd.validity.valueMissing) {
    pwd2Err.innerHTML = "&#9888; Please repeat your password.";
  } else if (getConfirmPwd.validity.patternMismatch) {
    pwd2Err.innerHTML = `<pre>
    Must have 8 characters or more.
    Must have upper & lowercase letters.
    Must have at least one number.
    Must have at least one special character.</pre>`;
  } else {
    pwd2Err.innerHTML = "";
  }
}

getForm.addEventListener("submit", (e) => {
  if (
    !getEmail.checkValidity() ||
    !countrySelect.checkValidity() ||
    !getZip.checkValidity() ||
    !getPwd.checkValidity() ||
    !getConfirmPwd.checkValidity()
  ) {
    validateFields();
    getForm.classList.add("invalidate");
    e.preventDefault();
  } else if (getPwd.value !== getConfirmPwd.value) {
    pwd2Err.innerHTML =
      "This password does not match the password you entered above.";

    // console.log(
    //   `Password1: ${getPwd.value} ---- Password2: ${
    //     getConfirmPwd.value
    //   } \n Passwords match: ${getPwd.value === getConfirmPwd.value}`
    // );
    e.preventDefault();
  } else {
    getForm.classList.remove("invalidate");
    e.preventDefault();
    emailErr.innerHTML =
      countryErr.innerHTML =
      zipErr.innerHTML =
      pwdErr.innerHTML =
      pwd2Err.innerHTML =
        "";
    getForm.reset();
    showSuccessMsg.innerHTML = "Thank you, your submission was successfull.";

    setTimeout(() => {
      showSuccessMsg.innerHTML = "";
    }, 2000);
  }
});
