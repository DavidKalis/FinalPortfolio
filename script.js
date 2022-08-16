'use strict';
"e.preventDefault();"

const { EmailJSResponseStatus } = require("@emailjs/browser");

const menuToggle = document.querySelector (".menuToggle");
const navigation = document.querySelector(".navigation");

menuToggle.onclick = function() {
    navigation.classList.toggle("open");
}

const list = document.querySelectorAll(".list");
function activeLink() {
    list.forEach((item) => 
    item.classList.remove("active"));
    this.classList.add("active");
}

list.forEach((item) => item.addEventListener("click", activeLink));

let publicKey = "fixJgTQRCqSyzhwQl";
function sendMail(params) {
    let tempParams = {
        contact_form_subject: document.getElementByClass("contact-form-subject").value,
        contact_form_name: document.getElementByClass("contact-form-name").value,
        contact_form_email: document.getElementByClass("contact-form-email").value,
        contact_form_message: document.getElementByClass("contact-form-message").value,
    };

    emailjs.send("service_8081u2r", "template_g3i821h", tempParams, publicKey).then(
        function(res) {
            console.log("success", res.status);
        }
    )
};