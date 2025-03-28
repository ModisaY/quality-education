// variables and constants.
var nameField = document.getElementById("name");
var nameLable = document.getElementById("name-lable");
var nameError = document.getElementById("name-error");

var emailField = document.getElementById("email");
var emailLable = document.getElementById("email-lable");
var emailError = document.getElementById("email-error");

const visitingNo = document.getElementById("visiting-no");
const visitingYes = document.getElementById("visiting-yes");

const informativeNo = document.getElementById("informative-no");
const informativeYes = document.getElementById("informative-yes");

const suggestion = document.getElementById("suggestion");

const rating = document.getElementsByName("rating");

const recommendYes = document.getElementById("recommend-yes");
const recommendNo = document.getElementById("recommend-no");

const questions = document.getElementById("questions");

const submitBtn = document.getElementById("submit-btn");

const previewName = document.getElementById("preview-name");
const previewEmail = document.getElementById("preview-email");
const previewVisiting = document.getElementById("preview-visiting");
const previewInfo = document.getElementById("preview-info");
const previewSuggest = document.getElementById("preview-suggest");
const previewSatisfy = document.getElementById("preview-satisfy");
const previewRecommend = document.getElementById("preview-recommend");
const previewQuestions = document.getElementById("preview-questions");
const feedbackPreviewWrapper = document.getElementById(
  "feedback-preview-wrapper"
);
const editBtn = document.getElementById("edit");
const preSubmitBtn = document.getElementById("submit");
const msgCloseBtn = document.getElementById("msg-close-btn");
const succesWrap = document.getElementById("succes-wrap");

const suggestionTextarea = document.getElementById("suggestion");

// validate the name.
function validateName() {
  if (!nameField.value.match(/^[a-zA-Z\s]+$/)) {
    nameError.innerHTML = "Please enter correct name";
    nameError.style.color = "red";
    nameField.style.borderBottomColor = "red";
    nameError.style.display = "block";
    return false;
  }
  nameError.innerHTML = "";
  nameField.style.borderBottomColor = "green";
  return true;
}
nameField.addEventListener("keyup", () => {
  validateName();
});
// validate the emai address
function validateEmail() {
  if (
    !emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    emailError.innerHTML = "Please enter a vaild email";
    emailError.style.color = "red";
    emailField.style.borderBottomColor = "red";
    emailError.style.display = "block";
    return false;
  }
  emailError.innerHTML = "";
  emailField.style.borderBottomColor = "green";
  return true;
}

emailField.addEventListener("keyup", () => {
  validateEmail();
});

// disable the textarer of suggestion field.
informativeYes.addEventListener("change", () => {
  if (informativeYes.checked) {
    suggestionTextarea.disabled = true;
    suggestionTextarea.value = "";
    suggestionTextarea.style.borderColor = "black";
  } else {
    suggestionTextarea.disabled = false;
  }
});

informativeNo.addEventListener("change", () => {
  if (informativeNo.checked) {
    suggestionTextarea.disabled = false;
    suggestionTextarea.style.borderColor = "green";
  } else {
    suggestionTextarea.disabled = true;
  }
});

// creating preview of the feedback form.
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  if (isNameValid && isEmailValid) {
    previewName.innerHTML = "Name: " + nameField.value;
    previewEmail.innerHTML = "Email: " + emailField.value;

    if (visitingYes.checked) {
      previewVisiting.innerHTML = "First time visiting: Yes";
    } else if (visitingNo.checked) {
      previewVisiting.innerHTML = "First time visiting: No";
    } else {
      previewVisiting.innerHTML = "First time visiting: -";
    }

    if (informativeYes.checked) {
      previewInfo.innerHTML = "Informative & easy to navigate: Yes";
    } else if (informativeNo.checked) {
      previewInfo.innerHTML = "Informative & easy to navigate: No";
    } else {
      previewInfo.innerHTML = "Informative & easy to navigate: -";
    }

    if (suggestionTextarea.value != "") {
      previewSuggest.innerHTML = "If 'No', Suggestion: " + suggestion.value;
    } else {
      previewSuggest.innerHTML = "No Suggestion" + suggestion.value;
    }

    for (let i = 0; i < rating.length; i++) {
      if (rating[i].checked) {
        previewSatisfy.innerHTML = "Satisfaction Level: " + rating[i].value;
        break;
      }
    }

    if (recommendYes.checked) {
      previewRecommend.innerHTML = "Recommend the site: Yes";
    } else if (recommendNo.checked) {
      previewRecommend.innerHTML = "Recommend the site: No";
    } else {
      previewRecommend.innerHTML = "Recommend the site: -";
    }

    if (questions.value != "") {
      previewQuestions.innerHTML = "Questions or Requests: " + questions.value;
    } else {
      previewQuestions.innerHTML = "No Questions or Requests" + questions.value;
    }
    // display the preview of feedback.
    feedbackPreviewWrapper.style.display = "flex";
  } else {
    feedbackPreviewWrapper.style.display = "none";
  }
});

// this make form editable.
editBtn.addEventListener("click", () => {
  feedbackPreviewWrapper.style.display = "none";
});

// final submit the form.
preSubmitBtn.addEventListener("click", () => {
  succesWrap.style.display = "flex";
  feedbackPreviewWrapper.style.display = "none";
});

// final confirm massage
msgCloseBtn.addEventListener("click", () => {
  succesWrap.style.display = "none";
  feedbackPreviewWrapper.style.display = "none";
  document.querySelector("form").reset();
});
