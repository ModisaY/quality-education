const registerContainer   = document.getElementById('register');
const educationContainer  = document.getElementById('education');
const courseContainer     = document.getElementById('course');
const careerContainer     = document.getElementById('career');
const successContainer    = document.getElementById('success');
const loginContainer      = document.getElementById('login');

const progressContainer      = document.getElementById('progress');

const wrapper = document.getElementById('wrapper');

function login(){
  registerContainer.style.display = 'none';
  progressContainer.style.display = 'none';
  successContainer.style.display = 'none';
  loginContainer.style.display = 'block';
  wrapper.style.marginTop = "150px";
}

function register(){
  clearRegisterContainer();
  clearEduContainer();
  clearCourseContainer();
  clearCareerInfo();
  registerView();

  progressBar(0);
}

function registerView(){
  progressContainer.style.display = 'block';
  registerContainer.style.display = 'block';
  educationContainer.style.display = 'none';
  loginContainer.style.display = 'none';
  wrapper.style.marginTop = "";
  progressBar(0);
}

function education(){
  registerContainer.style.display = 'none';
  courseContainer.style.display = 'none';
  educationContainer.style.display = 'block';
  wrapper.style.marginTop = "";
  progressBar(25);
}

function course(){
  educationContainer.style.display = 'none';
  courseContainer.style.display = 'block';
  careerContainer.style.display = 'none';
  wrapper.style.marginTop = "100px";
  progressBar(50);
}

function career(){
  courseContainer.style.display = 'none';
  careerContainer.style.display = 'block';
  successContainer.style.display = 'none';
  wrapper.style.marginTop = "";
  progressBar(75);
}

function progressBar(value){
  const progressBar = document.getElementById('progressBar');
  progressBar.style.width = value + "%";
}

function saveData() {
  let username, password;
  username = document.getElementById("username").value;
  password = document.getElementById("password").value;

  let user_records = JSON.parse(localStorage.getItem("users")) || [];

  user_records.push({
      "username": username,
      "password": password
  });
  localStorage.setItem("users", JSON.stringify(user_records));
  alert("Registration Successful");
  login();
}

function previewData(){
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const dob = document.getElementById("dob").value;
  const genderMale = document.getElementById("genderMale");
  const genderFemale = document.getElementById("genderFemale");
  const username = document.getElementById("username").value;

  const highEducation = document.getElementById("educationSub").value;
  const otherEducation = document.getElementById("otherEducation").value;
  const enrollmentCheckYes = document.getElementById('enrollment-checkYes');
  const enrollmentCheckNo = document.getElementById("enrollment-checkNo");
  const enrollmentDescription = document.getElementById("enrollment-description").value;

  const mathsSub      = document.getElementById('maths');
  const scienceSub    = document.getElementById('science');
  const itSub         = document.getElementById('it');
  const englishSub    = document.getElementById('english');

  const livePrefer  = document.getElementById('live');
  const selfPrefer  = document.getElementById('self');

  const occupation = document.getElementById('Occupation').value;
  const goals = document.getElementById('goals').value;
  

  document.getElementById("preview-firstname").value = fname;
  document.getElementById("preview-lastname").value = lname;
  document.getElementById("preview-email").value = email;
  document.getElementById("preview-mobileno").value = mobile;
  document.getElementById("preview-dob").value = dob;
  document.getElementById("preview-username").value = username;

  if(genderMale.checked){
    document.getElementById("preview-genderMale").checked = true;
  }
  if(genderFemale.checked){
    document.getElementById("preview-genderFemale").checked = true;
  }

  document.getElementById("preview-hiest-level-edu").value = highEducation;
  document.getElementById("preview-other").value = otherEducation;

  if(enrollmentCheckYes.checked){
    document.getElementById("preview-currently-enrolledyes").checked = true;
  }

  if(enrollmentCheckNo.checked){
    document.getElementById("preview-currently-enrolledno").checked = true;
  }

  document.getElementById("preview-yes").value = enrollmentDescription;

  if(mathsSub.checked){
    document.getElementById("preview-subjectsMaths").checked = true;
  }
  if(scienceSub.checked){
    document.getElementById("preview-subjectsScience").checked = true;
  }
  if(itSub.checked){
    document.getElementById("preview-subjectsIt").checked = true;
  }
  if(englishSub.checked){
    document.getElementById("preview-subjectsEnglish").checked = true;
  }
  if(livePrefer.checked){
    document.getElementById("preview-prefer-methodLive").checked = true;
  }
  if(selfPrefer.checked){
    document.getElementById("preview-prefer-methodSelf").checked = true;
  }

  
  document.getElementById("preview-career").value = occupation;
  document.getElementById("preview-goals").value = goals;

  progressBar(100);
  success();
}

function success(){
  careerContainer.style.display = 'none';
  successContainer.style.display = 'block';
}


function saveData() {
  let username, password;
  username = document.getElementById("username").value;
  password = document.getElementById("password").value;

  let user_records = JSON.parse(localStorage.getItem("users")) || [];

  user_records.push({
      "username": username,
      "password": password
  });
  localStorage.setItem("users", JSON.stringify(user_records));
  alert("Registration Successful");
  login();
}

function authentication() {

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const loginUserName = document.getElementById("loginUserName").value;
  const loginPassword = document.getElementById("loginPassword").value;

  if(username == loginUserName && password == loginPassword){
    alert("Login success");
  }else{
    alert("Invalid Credintials");
  }

}



function clearRegisterContainer() {
  document.getElementById("fname").value="";
  document.getElementById("lname").value="";
  document.getElementById("email").value="";
  document.getElementById("mobile").value="";
  document.getElementById("dob").value="";
  document.getElementById("username").value="";
  document.getElementById("password").value="";
  document.getElementById("cpassword").value="";
  document.getElementById("genderMale").checked=false;
  document.getElementById("genderFemale").checked=false;

}

function clearEduContainer(){
  document.getElementById("educationSub").value = "";
  document.getElementById("otherEducation").value="";
  document.getElementById("enrollment-checkYes").checked = false;
  document.getElementById("enrollment-checkNo").checked = false;
  document.getElementById("enrollment-description").value="";
}

function clearCourseContainer(){
  document.getElementById("maths").checked = false;
  document.getElementById("science").checked = false;
  document.getElementById("it").checked = false;
  document.getElementById("english").checked = false;
  document.getElementById("live").checked = false;
  document.getElementById("self").checked = false;
}

function clearCareerInfo(){
  document.getElementById("Occupation").value = "";
  document.getElementById("goals").value = "";
}