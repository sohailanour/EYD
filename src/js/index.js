let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    grid: {
      rows: 2,
      fill: 'row',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: 'row',
      },
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: 'row',
      },
      spaceBetween: 30,
    },
  },
});

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
    if(Input.type != "radio"){
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

// images array

if(window.location.href.includes("index.html")){
    let imgs = [
        '../../images/asset\ 16.png',
        '../../images/asset\ 20.jpeg',
        '../../images/asset\ 21.png',
        '../../images/asset\ 22.jpeg',
        '../../images/asset\ 23.jpeg',
        '../../images/asset\ 24.jpeg',
        '../../images/asset\ 25.png',
        '../../images/asset\ 26.jpeg',
        '../../images/asset\ 27.jpeg',
        '../../images/asset\ 28.png',
        '../../images/asset\ 29.jpeg',
        '../../images/asset\ 30.png',
        '../../images/asset\ 31.jpeg',
        '../../images/asset\ 32.jpeg',
        '../../images/asset\ 33.png',
        '../../images/asset\ 34.jpeg',
        '../../images/asset\ 35.png',
        '../../images/asset\ 36.jpeg',
        '../../images/asset\ 37.jpeg',
        '../../images/asset\ 38.jpeg',
        '../../images/asset\ 39.png',
        '../../images/asset\ 40.png',
        '../../images/asset\ 41.png',
        '../../images/asset\ 42.png',
        '../../images/asset\ 43.png',
        '../../images/asset\ 44.png',
        '../../images/asset\ 45.jpeg',
        '../../images/asset\ 46.jpeg',
        '../../images/asset\ 47.jpeg',
        '../../images/asset\ 48.jpeg',
        '../../images/asset\ 49.jpeg',
        '../../images/asset\ 50.jpeg',
    ]
    
    let swiperDiv = document.getElementById("swiper-div")
    
    imgs.forEach(imag => {
        let node = document.createElement("div");
        // node..backgroundImage = `url(${imag})`
        node.className = "swiper-slide"
        node.style.backgroundImage = `url('${imag}')`
        swiperDiv.appendChild(node)
    
        // console.log(swiperDiv.lastChild)
    })
} 

if(window.location.href.includes("faq.html")){
    let quetionsLi = [
        {quetion : 'What is the Technology Fellowship for Arab Youth?' , answer : 'It is a platform that will connect the Arab youth with the needed skills that will support their journey within the tech sector. This program will prepare 100 youth by providing them with a series of workshops, training programs, certified sessions, mentorship from the top technology and innovation partners.'},
        {quetion : 'How can I apply to be part of the program?' , answer : 'Applications can be submitted through the registration form available at the program’s official website technology.arabyouthcenter.org'},
        {quetion : 'What is the age group that is eligible to apply?' , answer : 'Youth between the age of 18-35 can apply to the program    '},
        {quetion : 'What are the terms and conditions of applying to the program?' , 
            answer : ['Students majoring in related fields',
            'Young professionals within the technology industry',
            'Young professionals with basic knowledge of technical skills',
            'Youth that has published research and achieved proved innovative milestones within the technology',
            'Youth aged 18-35',
            'English and Arabic Proficiency',]},
        {quetion : 'Are there registration fees?' , answer : 'The Technology Fellowship for Arab Youth is free of charge, similar to all the programs and initiatives under the Arab Youth Center'},
        {quetion : 'When will the Technology Fellowship for Arab Youth start?' , answer : 'The program will commence in December for a duration of 3 months. The agenda of the program will be shared for the qualifying participants.'},
        {quetion : 'What is the program structure and components?' , 
            answer : ['Technical workshops',
                'Mentorship sessions from the leaders of the technology' ,
                'Remote internship opportunities',
                'Training sessions',
                'Certified classes',
                'The program will offer the opportunity of linking the participants with the top technology giants',
                'Publishing studies and insights to support the infrastructure of youth participating in building the technology ecosystem.']},
        {quetion : 'What languages will the program offers?' , answer : 'The program will be in English and Arabic, but the proficiency in both is mandatory.'},
        {quetion : 'Will the program require a full-time dedication/ will I need to take some time off work or university?' , answer : 'The program sessions and classes will be run through different timings and will be recorded; hence you do not require to take time off.'},
        {quetion : 'In what format will the program sessions/classes be?' , answer : 'The program will be fully virtual    '},
        {quetion : 'Should I prepare for the program?' , answer : 'Yes! It is recommended to starting reading articles and books related to the fields of technology and innovation to get a head start.'},
        {quetion : 'Do I need to attend all the sessions/classes of the program?' , answer : 'Yes, the participating youth should complete the assigned program tracks where each participant will be assigned the required hours ahead of the program.'},
        {quetion : 'Does the program offer internship opportunities?' , answer : 'Internship opportunities will be offered by some of the program’s local and international partners. Participation in these internships will be exclusive to the program’s participants.'},
        {quetion : 'Are there limited number of seats available for the program?' , answer : 'Yes, the program will select 100 applicants. Hence, it is advised to start registration as soon as possible.'},
        {quetion : 'Will I get a certificate once I complete the program?' , answer : `Participants will receive a professional certification of completion upon completing their assigned program requirements. The certificate will complement the participants' profiles and increase their competitiveness in the job markets.`},
        {quetion : 'I have a background and experience in the field of technology, how can I participate in the program as a partner?    ' , answer : 'We are open to discussing partnerships and collaborations with government entities, private sector, and/or international organizations. Kindly reach us out on technology@arabyouthcenter.org    '},
        {quetion : 'How many editions will the Arab Youth technology program have?' , answer : 'The program will have annual editions.'},
        {quetion : 'I read all the FAQs and could not find an answer to my question. how can I reach out to you?' , answer : 'You can Email us your inquires in regards to the Technology Fellowship for Arab Youth on technology@arabyouthcenter.org'},
    ]
    
    const FAQ = document.getElementById("faq")
    
    let faqContent = ""
    
    for(let i=0 ; i < quetionsLi.length; i++){
    
        let ansContent ;
        let answer = quetionsLi[i].answer
        if(Array.isArray(answer)){
            ansContent = '<ul>'
            for(let j = 0; j < answer.length; j++){
                ansContent += `<li data-i18n-key="Ans-${i+1}-${j+1}" >${answer[j]}</li>`
            }
            ansContent += '</ul>'
        }else{
            ansContent = `<p  data-i18n-key="Ans-${i+1}" >${answer}</p>`
        }
        faqContent += `<div class="quetion-box">
                            <div class="quetion-header ">
                                <h3 data-i18n-key="Q-${i+1}" class="text-mid">${quetionsLi[i].quetion}</h3>
                                <div class="toggel-icon">+</div>
                            </div>
                            <div class="answer hidden">
                                ${ansContent}
                            </div>
                        </div>`
    }
    
    
    FAQ.innerHTML = faqContent;
    
    const QBoxs = document.querySelectorAll(".quetion-box")
    
    QBoxs.forEach((targetDiv => {
        targetDiv.addEventListener("click" ,function(){
    
            QBoxs.forEach((Div => {
                if(Div !== targetDiv){
                    Div.firstElementChild.lastElementChild.innerHTML = "+"
                    Div.lastElementChild.classList.add("hidden")
                }
            }))
       
            if(targetDiv.firstElementChild.lastElementChild.innerHTML == "-"){
                targetDiv.firstElementChild.lastElementChild.innerHTML = "+"
            }else(
                targetDiv.firstElementChild.lastElementChild.innerHTML = "-"
            )
            
            targetDiv.lastElementChild.classList.toggle("hidden")
    
        })
    }))
}




