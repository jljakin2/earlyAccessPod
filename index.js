console.log("it works");

const email = document.querySelector(".form__control input");
const error = document.querySelector(".form small");
const form = document.querySelector(".form");

email.addEventListener("invalid", (event) => {
  event.preventDefault();

  error.style.visibility = "visible";

  console.log(event.target.validity);
});

email.addEventListener("change", (event) => {
  error.style.visibility = "hidden";
});
