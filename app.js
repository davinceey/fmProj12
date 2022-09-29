const arrowBtn = document.querySelector(".arrow");
const emailInput = document.querySelector("#email");
const formInfo = document.querySelector(".form__info");
const err__img = document.createElement("img");

const emailHandler = () => {
  if (emailInput.value.includes("@")) {
    const success = document.createElement("p");
    emailVerifySuccess(success);
    emailInput.addEventListener("click", () => {
      success.innerText = "";
      emailInput.value = "";
    });
  } else {
    const error = document.createElement("p");
    emailVerifyError(error);
    emailInput.addEventListener("click", () => {
      error.innerText = "";
      emailInput.value = "";
      err__img.classList.remove("err");
      err__img.classList.add("inactive");
    });
  }
};

const emailVerifySuccess = (succ) => {
  succ.innerText = "Correct info given. Proceed!";
  succ.style.color = "green";
  formInfo.append(succ);
  emailInput.style.borderColor = "green";
};

const emailVerifyError = (err) => {
  err.innerText = "Please provide a valid email";
  err.style.color = "hsl(0, 93%, 68%)";
  formInfo.append(err);
  err__img.setAttribute("src", "images/icon-error.svg");
  err__img.setAttribute("alt", "icon-error");
  err__img.classList.add("err");
  err__img.classList.remove("inactive");
  formInfo.append(err__img);
  emailInput.style.borderColor = "hsl(0, 93%, 68%)";
};

arrowBtn.addEventListener("click", emailHandler);
emailInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    emailHandler();
    emailInput.blur();
  }
});
