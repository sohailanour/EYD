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
let formInputs = document.querySelectorAll("input")

function focusStyle(Input){
    Input.style.paddingBottom = "0.625rem"
    Input.style.paddingTop = "1.625rem"
    Input.style.outline = "none"
    const label =Input.nextElementSibling
    console.log(label)
    label.style.opacity = "0.65"
    label.style.transform = "scale(0.85) translateY(-1rem) translateX(0.15rem)"
    if(Input.type == "date"){
        Input.style.fontSize= "inherit";
    }
}

// console.log(formInputs)

formInputs.forEach((Input => {
    // console.log("intialVal: "+ Input.value)
    Input.addEventListener("blur" , function(){
        console.log("finallVal: "+ Input.value)
        if(Input.value != ""){
            if(Input.style.paddingBottom != "0.625rem")
            {
                focusStyle(Input)
            }
        }else{
            if( Input.style.paddingBottom == "0.625rem"){
                Input.style.paddingBottom = "1rem"
                Input.style.paddingTop = "1rem"
                const label =Input.nextElementSibling
                console.log(label)
                label.style.opacity = "1"
                label.style.transform = "none"
                if(Input.type == "date"){
                    Input.style.fontSize= "0";
                }
            }
        }
    })

    Input.addEventListener("focus",function(){
        focusStyle(Input)
    })
}))

const FAQ = document.getElementById("faq")

const QBoxs = document.querySelectorAll(".quetion-box")

QBoxs.forEach((Div => {
    Div.addEventListener("click" ,function(){
        const iconContent = Div.firstElementChild.lastElementChild

        if(iconContent.innerHTML == "+" ){
            iconContent.innerHTML = "-"
        }else{
            iconContent.innerHTML = "+"
        }

        Div.lastElementChild.classList.toggle("hidden")
    })
}))

