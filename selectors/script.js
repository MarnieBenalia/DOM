let x = document.querySelectorAll(".important");

for (elem of x) {
    elem.setAttribute("title", "This is an important item");
}

console.log (x);

let i = document.querySelectorAll("img");
    for (elem of i) {

        if (elem.classList.contains("important")) {

        elem.style.display = "flex";
    }
        else {
        elem.style.display = "none";
    }
}


let p = document.querySelectorAll("p");

for (elem of p) {
    if (elem.hasAttribute("class")) {

    console.log(elem.innerText,elem.classList);
    }
    else {
        console.log(elem.innerText);
    }
}
