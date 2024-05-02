let make = document.getElementById("make");

let name = document.getElementById("NAME");
let desc = document.getElementById("DESC");

let price = document.getElementById("PRICE");
let ADS = document.getElementById("ADS");
let descount = document.getElementById("DESCOUNT");
let tax = document.getElementById("TAX");
let total = document.getElementById("TOTAL");
let numsProduct = document.getElementById("NUMS_PRODUCT");
let notee = document.getElementById("NOTES");
let img = document.getElementById("MAIN_IMAGE");
let CATEGORY = document.getElementById("CATEGORY");
let i = 0;


let totalSpace = document.getElementById("totalSpace");

function Total() {
    total.innerHTML = (+price.value + +ADS.value + +tax.value) - +descount.value;
    if(total.innerHTML == "0") {
        totalSpace.style.background = "#222";
    }
    else {
    totalSpace.style.background = "#0159a3";
    }
}

make.addEventListener("click", function() {
    i++;
    localStorage.setItem(`num${i}`, JSON.stringify(
        {
            name_product: name.value,
            description: desc.value,
            pricing: price.value,
            ads: ADS.value,
            descountt: descount.value,
            taxx: tax.value,
            numsprod: numsProduct.value,
            note: notee.value,
            image: img.value,
            category: CATEGORY.value
        }
    ))
})

// crete table
let container = document.getElementById("showDATA");

make.addEventListener("click", function() {
    let parent = document.createElement("tr");
    let child1 = document.createElement("td");
    let child2 = document.createElement("td");
    let child3 = document.createElement("td");
    let child4 = document.createElement("td");
    let child5 = document.createElement("td");
    let child6 = document.createElement("td");
    let child7 = document.createElement("td");
    let child8 = document.createElement("td");
    
    // create text
    let tex1 = document.createTextNode(name.value);
    let tex2 = document.createTextNode(price.value);
    let tex3 = document.createTextNode(tax.value);
    let tex4 = document.createTextNode(ADS.value);
    let tex5 = document.createTextNode(descount.value);
    let tex6 = document.createTextNode(total.innerHTML);
    let tex7 = document.createTextNode(numsProduct.value);
    let tex8 = document.createTextNode(CATEGORY.value);

    // appendChild

    child1.appendChild(tex1);
    child2.appendChild(tex2);
    child3.appendChild(tex3);
    child4.appendChild(tex4);
    child5.appendChild(tex5);
    child6.appendChild(tex6);
    child7.appendChild(tex7);
    child8.appendChild(tex8);

    // append in parent

    parent.appendChild(child1)
    parent.appendChild(child2)
    parent.appendChild(child3)
    parent.appendChild(child4)
    parent.appendChild(child5)
    parent.appendChild(child6)
    parent.appendChild(child7)
    parent.appendChild(child8)

    container.appendChild(parent)
} )
// Object.values(x)[1]