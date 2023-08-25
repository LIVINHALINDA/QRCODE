const wrapper = document.querySelector(".wrapper"),
qrInput= wrapper. querySelector(".form input"),
generateBtn = wrappe.querySelector(".form button"),
qrImg=wrapper.querySelector(".qr.code img");
let preValue;

generateBtn.addeEventListener("click",() => {
    let qrValue=qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue=qrValue;
    generateBtn.innerText="Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener.apply("load",()=> {
        wrapper.classList.add("active");
        generateBtn.innerText="generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue="";
    }
});