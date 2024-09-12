let s_email = document.getElementById("email");
let s_pass = document.getElementById("password");
let s_btn = document.querySelector("button");
let p = document.querySelectorAll("p");

s_btn.addEventListener("click", (e) => {
  e.preventDefault();
  // myFunc1()

  ////////////confirmation Window///////////////
  if (p[2].innerText == "All good to go!") {
    let confirmation = confirm("Are you sure you want to submit the form?");
    if (confirmation) {
        alert("Successful signup!");
    } else {
        location.reload();
    }
}
});


////////////email logic on change//////////////
function myFunc1(val) {
  if (val.includes("@") && val.includes(".") && val.length > 3) {
    p[0].innerText = "";
  } else {
    p[0].innerText =
      "Make sure email is more than 3 characters and has @ and a .";
  }
  checkValidation()
}

////////////password logic on change///////////
function myFunc2(val) {
  if (val.length > 8) {
    p[1].innerText = "";
  } else {
    p[1].innerText = "Make sure password is more than 8 characters.";
  }
  checkValidation()
}

///////////check validation///////////////
function checkValidation() {
    console.log(s_pass.value.length);
    let s = s_email.value
    if ((s.includes("@") && s.includes(".") && s.length > 3) && s_pass.value.length > 8) {
        p[2].innerText = "All good to go!";
    } else {
        p[2].innerText = "";
    }
}

/////////track changes while typing////////////
s_email.addEventListener("input", function() {
    myFunc1(this.value);
});

s_pass.addEventListener("input", function() {
    myFunc2(this.value);
});