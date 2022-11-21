function intro() {
    const header = document.getElementsByClassName("header")[0];
    const logo = document.getElementsByClassName("logo")[0];
    const pre = document.getElementById("pre");

    logo.style.transform = "translateY(0)";
    logo.style.fontSize = "20px";
    header.style.height = "48px";
    pre.style.opacity = "0";

    setTimeout(function () { pre.style.display = "none"; }, 1200);
}

const buttons = document.querySelectorAll(".btns");

buttons.forEach((cadabtn) => {
    cadabtn.addEventListener("touchstart", () => {
        cadabtn.classList.add("btnsHover");
        // window.navigator.vibrate(200);
    })

    cadabtn.addEventListener("touchend", () => {
        cadabtn.classList.remove("btnsHover");
    });

    cadabtn.addEventListener("click", (evento) => {
        let inputID = evento.target.name;
        let btn = evento.target.innerText;
        let visorCont = document.getElementById(inputID);
        let min = visorCont.min;
        let max = visorCont.max;
        let step = visorCont.step;
        let val = visorCont.value;
        let calc = (btn == "+") ? (step * 1) : (step * -1);
        let novoValue = Math.abs(val) + calc;
        if (inputID == "duracaoM" && novoValue == 60 || novoValue == -1) {

            let Horas = document.getElementById("duracaoH");
            if (novoValue == 60) {
                Horas.value = parseInt(Horas.value) + 1;
                visorCont.value = 0;
            } else if (Horas.value != 0) {
                Horas.value = parseInt(Horas.value) - 1;
                visorCont.value = 59;
            }
        }
        if (novoValue >= min && novoValue <= max) {
            visorCont.value = novoValue;
        }



    })


})

const btcCalc = document.getElementsByClassName("buttonCalc")[0];

btcCalc.addEventListener("touchstart", () => {
    btcCalc.classList.add("buttonCalcHover");
})

btcCalc.addEventListener("touchend", () => {
    btcCalc.classList.remove("buttonCalcHover");
})

function calcular(btn) {
    const imp = document.getElementsByClassName("change");
    const impUl = imp[1].getElementsByTagName("UL");

    if (btn.value === "calc") {
        imp[0].style.opacity = "100%";
        imp[1].style.opacity = "100%";
        imp[2].style.opacity = "100%";
        imp[1].style.height = "calc(140px + 5vh)";
        impUl[0].style.display = "flex";
        setTimeout(function () { impUl[0].style.transform = "translateY(0px)"; }, 1);
        btn.innerHTML = "Novo Calculo";
        btn.value = "Novo";

        let adultos = document.getElementById("adultos").value;
        let criancas = document.getElementById("criancas").value;
        let duracaoH = document.getElementById("duracaoH").value;
        let duracaoM = document.getElementById("duracaoM").value;
        let duracao = (+duracaoH + (+duracaoM / 60));

        let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) * criancas);
        let qdtTotalCerveja = cervejaPP(duracao) * adultos;
        let qdtTotalRefrigerante = refrigerantePP(duracao) * adultos + (refrigerantePP(duracao) * criancas);

        resultado.innerHTML = `<li>${qdtTotalCarne / 1000}Kg de Carne</li>`
        resultado.innerHTML += `<li>${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</li>`
        resultado.innerHTML += `<li>${Math.ceil(qdtTotalRefrigerante / 2000)} Garrafas de Refrigerante</li>`


    } else {
        //apaga resutado e diminui impresora  
        imp[0].style.opacity = "0";
        imp[1].style.opacity = "0";
        imp[2].style.opacity = "0";
        imp[1].style.height = "5vh";
        impUl[0].style.transform = "translateY(-20vh)";
        setTimeout(function () { impUl[0].style.display = "none"; }, 500);
        btn.innerHTML = "Calcular";
        btn.value = "calc";

    }
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    }
    else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    }
    else {
        return 1200;
    }
}
function refrigerantePP(duracao) {
    if (duracao >= 6) {
        return 1500;
    }
    else {
        return 1000;
    }
}




