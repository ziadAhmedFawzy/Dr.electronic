let f1 = document.getElementById("USERNAME");
let f2 = document.getElementById("PASS");
let start = document.getElementById("go")
let message = document.getElementById("message");
let data = JSON.parse(localStorage.getItem("user"));
let show = document.getElementById("showPass");
let hide = document.getElementById("hide"); 

start.addEventListener("click", function() {
    if(f1.value == data.mail && f2.value == data.pass) {
        window.location.href = "../../../index.html";
    }
    else {
        message.innerHTML = "your password or email is wrong.. try again";
    }
})

show.addEventListener("click" , function() {
    f2.type = "text"
    show.classList.add("hidden");
    hide.classList.remove("hidden");
})

hide.addEventListener("click", function() {
    f2.type = "password"
    show.classList.remove("hidden");
    hide.classList.add("hidden");

})