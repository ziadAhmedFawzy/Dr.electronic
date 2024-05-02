let sign = document.getElementById("signing");
let fName = document.getElementById("firstName");
let surName = document.getElementById("surName");
let email = document.getElementById("EMAIL");
let password = document.getElementById("PASS");
let show = document.getElementById("showPass");
let hide = document.getElementById("hide");
let date = document.getElementById("DOB");
let signing = document.getElementById("signing");

show.addEventListener("click" , function() {
    password.type = "text"
    show.classList.add("hidden");
    hide.classList.remove("hidden");
})

hide.addEventListener("click", function() {
    password.type = "password"
    show.classList.remove("hidden");
    hide.classList.add("hidden");

})

signing.addEventListener("click", function() {
    localStorage.setItem("user", JSON.stringify({
        firstName: fName.value,
        lastName: surName.value,
        mail: email.value,
        pass: password.value,
        birth: date.value,
    }));
    location.href = "../login/index.html";
})