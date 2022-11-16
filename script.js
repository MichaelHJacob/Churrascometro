const buttons = document.querySelectorAll(".btns");
buttons[0].classList.add("buttonCalcHover");

buttons.forEach((cadabtn) => {
    cadabtn.addEventListener("touchstart" , () => {

        cadabtn.classList.add("btnsHover");
        // window.navigator.vibrate(200);
    })
})

buttons.forEach((cadabtn) => {
    cadabtn.addEventListener("touchend" , () => {

        cadabtn.classList.remove("btnsHover");
        
    })
})
const btcCalc = document.getElementsByClassName("buttonCalc")[0];

btcCalc.addEventListener("touchstart", () => {
   btcCalc.classList.add("buttonCalcHover");
})

btcCalc.addEventListener("touchend", () => {
    btcCalc.classList.remove("buttonCalcHover");
})

function exibirImp(btn) {
const imp = document.getElementsByClassName("change"); 
const impUl = imp[1].getElementsByTagName("UL");

    if (btn.value === "calc") {
        // exibe resultado
        imp[0].style.opacity = "100%";
        imp[1].style.opacity = "100%";
        imp[2].style.opacity = "100%";
        imp[1].style.height = "calc(140px + 5vh)";
        impUl[0].style.display = "flex";
        setTimeout(function () { impUl[0].style.transform = "translateY(0px)"; }, 1);
        btn.innerHTML = "Novo Calculo";
        btn.value = "Novo";
    } else {
        //apaga resutado e diminui impresora  
        imp[0].style.opacity = "0";
        imp[1].style.opacity = "0";
        imp[2].style.opacity = "0";
        imp[1].style.height = "5vh";
        impUl[0].style.transform = "translateY(-20vh)";
        setTimeout(function () {impUl[0].style.display = "none"; }, 500);
        btn.innerHTML = "Calcular";
        btn.value = "calc";

    }
}


function intro() {
    const header = document.getElementsByClassName("header")[0];
    const logo = document.getElementsByClassName("logo")[0];
    const pre = document.getElementById("pre");

    logo.style.transform = "translateY(0)";
    logo.style.fontSize = "20px";
    header.style.height = "48px";
    pre.style.opacity = "0";
   
    setTimeout(function () {pre.style.display = "none"; }, 1200);
} 

