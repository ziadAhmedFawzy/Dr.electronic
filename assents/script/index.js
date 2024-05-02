let sign = document.getElementById("signed");

if(localStorage.length > 0) {
    let name1 = JSON.parse(localStorage.getItem("user"))
    name1 = name1.firstName;
    sign.innerHTML = name1.slice(0,1);
    sign.classList.add("signed")
    sign.removeAttribute("href");
    sign.style.cursor = "default";
}

sign.style.cursor = "pointer";

sign.addEventListener("click", function() {
    // admin page
    location.href = "admin/index.html";
})