let navbar = document.querySelector(".navbar");
let nextSection = document.getElementById("about");

const dates = document.getElementsByName("date")
console.log(dates)

window.onscroll = function () {
    // change navbar background
    if (window.scrollY >=  60) {
        navbar.style.backgroundColor = "#fff"
        navbar.style.maxHeight = "90px"
        // console.log("if" + window.scrollY )
        console.log("fff" + window.innerWidth )
    } else {
        navbar.style.backgroundColor = "transparent"
        navbar.style.maxHeight = "99px"
    }
}

// hidde input place holder
let formInputs = document.querySelectorAll(".form-input")

formInputs.forEach((Input => {
    let placeHolder = Input.placeholder 
    Input.addEventListener("focus", function () {
        Input.placeholder = "";
    })

    Input.addEventListener("blur", function () {
        Input.placeholder = placeHolder;
    })
}))