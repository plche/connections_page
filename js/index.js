let cnRqtsElm = document.querySelector(".cr-counter-value");
let cnCntrElm = document.querySelector(".cn-counter-value");
let curCnRqts = Number(cnRqtsElm.innerText);
let curCnCntr = Number(cnCntrElm.innerText);
// console.log(curCnRqts);
// console.log(curCnCntr);

function remCR(e) {    
    if (curCnRqts >= 1) {
        e.remove();
    } else {
        e.parentElement.parentElement.remove();
    }    
}

function aReq(e) {
    curCnRqts--;
    remCR(e.parentElement.parentElement);
    cnRqtsElm.innerText = curCnRqts;
    curCnCntr++;
    cnCntrElm.innerText = curCnCntr;
}

function cReq(e) {
    curCnRqts--;
    remCR(e.parentElement.parentElement);
    cnRqtsElm.innerText = curCnRqts;
}

function edUsr(e) {
    let elm = e.closest(".jd-tarjetaInformacion");
    elm.querySelector("h2").innerText = "John Doe";
    elm.previousElementSibling.innerHTML = '<img src="./images/user.png" alt="John picture" />';
    // console.log(elm.previousElementSibling);
}