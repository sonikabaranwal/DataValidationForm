const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

const sendData =(sRate,count)=>{
if(sRate===count){
    alert(`Registration successful!
    Welcome!`);
}
}

//for final data validation 
const successMsg = ()=>{
    let formCon = document.getElementsByClassName('form-control');
    let count = formCon.length-1;
    for(let i=0; i<formCon.length;i++){
        if(formCon[i].className === "form-control success"){
            let sRate =0+i;
sendData(sRate,count);
        }
        else {
            return false;
        }
    }
}


//isEmail function
const isEmail = (emailVal) => {
  let atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) return false;
  let dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 2) return false;
  if (dot === emailVal.length - 1) return false;
  return true;
};

//validate function
const validate = () => {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();
  // validate username
  if (usernameVal === "") {
    setErrorMsg(username, "Username cannot be blank!");
  } else if (usernameVal.length <= 2) {
    setErrorMsg(username, "Username must be of min 3 characters!");
  } else {
    setSuccessMsg(username);
  }
  // validate email
  if (emailVal === "") {
    setErrorMsg(email, "Email cannot be blank!");
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, "Not a valid email!");
  } else {
    setSuccessMsg(email);
  }

  // validate phone
  if (phoneVal === "") {
    setErrorMsg(phone, "Phone cannot be blank!");
  } else if (phoneVal.length != 10) {
    setErrorMsg(phone, "Enter 10 digits!");
  } else {
    setSuccessMsg(phone);
  }

  // validate password
  if (passwordVal === "") {
    setErrorMsg(password, "Password cannot be blank!");
  } else if (passwordVal.length <= 5) {
    setErrorMsg(password, "Enter minimum 6 characters!");
  } else {
    setSuccessMsg(password);
  }

  // validate password
  if (cpasswordVal === "") {
    setErrorMsg(cpassword, "Password cannot be blank!");
  } else if (cpasswordVal != passwordVal) {
    setErrorMsg(cpassword, "Password does not match!");
  } else {
    setSuccessMsg(cpassword);
  }
  successMsg();
};

function setErrorMsg(input, errormsgs) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = errormsgs;
}

function setSuccessMsg(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
