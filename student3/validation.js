function validateRegister(){
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const dob = document.getElementById("dob").value;
    const genderMale = document.getElementById("genderMale");
    const genderFemale = document.getElementById("genderFemale");
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const cpassword = document.getElementById("cpassword").value;

    const rule1 = fname.trim() !== "";
    const rule2 = lname.trim() !== "";
    const rule3 = email.trim() !== "";

    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const rule4 = emailPattern.test(email);

    const rule5 = mobile.trim() !== "";
    const mobilePattern = /^[0][0-9]{9}$/;
    const rule6 = mobilePattern.test(mobile);

    const rule7 = dob.trim() !== "";
    const rule8 = genderMale.checked || genderFemale.checked;

    const rule9 = username.trim() !== "";
    const rule10 = password.trim() !== "";
    const rule11 = password.trim() === cpassword.trim();

    if(!rule1){
        alert("First Name Required");
        return false;
    }

    if(!rule2){
        alert("Last Name Required");
        return false;
    }

    if(!rule3){
        alert("Email Required");
        return false;
    }

    if(!rule4){
        alert("Email is invalid");
        return false;
    }

    if(!rule5){
        alert("Mobile is required");
        return false;
    }

    if(!rule6){
        alert("Mobile is Invalid");
        return false;
    }

    if(!rule7){
        alert("Date of birth is required");
        return false;
    }

    if(!rule8){
        alert("Gender is required");
        return false;
    }

    if(!rule9){
        alert("Username is required");
        return false;
    }

    if(!rule10){
        alert("Passowrd is required");
        return false;
    }

    if(!rule11){
        alert("Password and confirm password does not match");
        return false;
    }
    
    if(rule1 || rule2 || rule3 || rule4 || rule5 || rule6 || rule7 || rule8 || rule9 || rule10 || rule11){
        education();
    }
}

function validateEducation(){
    const highEducation = document.getElementById("educationSub").value;
    
    const enrollmentCheckYes = document.getElementById('enrollment-checkYes');
    const enrollmentCheckNo = document.getElementById("enrollment-checkNo");

    const rule1 = highEducation !== "";
    const rule2 = enrollmentCheckYes.checked || enrollmentCheckNo.checked;
    
    if(!rule1){
        alert("Highest Education Level Required");
        return false;
    }

    if(!rule2){
        alert("Currently enrolled educational institute required");
        return false;
    }

    if(rule1 || rule2){
        course();
    }
}

function validateCourse(){
    const mathsSub      = document.getElementById('maths');
    const scienceSub    = document.getElementById('science');
    const itSub         = document.getElementById('it');
    const englishSub    = document.getElementById('english');

    const livePrefer  = document.getElementById('live');
    const selfPrefer  = document.getElementById('self');

    const rule1 = mathsSub.checked || scienceSub.checked || itSub.checked || englishSub.checked;
    const rule2 = livePrefer.checked || selfPrefer.checked;

    if(!rule1){
        alert("Interested Subjects required");
        return false;
    }

    if(!rule2){
        alert("Course Prefer option required");
        return false;
    }

    if(rule1 || rule2){
        career();
    }
}

function validateCareer(){
    
    const Occupation = document.getElementById('Occupation').value;
    const agreeCheck = document.getElementById('register-check');

    const rule1 = Occupation.trim() !== "";
    const rule2 = agreeCheck.checked;
    
    if(!rule1){
        alert("Current job role required");
        return false;
    }

    if(!rule2){
        return false;
    }

    if(rule1 || rule2){
        previewData();
    }
    previewData();
}