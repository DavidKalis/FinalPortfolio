'use strict';
"e.preventDefault();"


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
        contact_form_subject: document.getElementById("sub").value,
        contact_form_name: document.getElementById("name").value,
        contact_form_email: document.getElementById("mail").value,
        contact_form_message: document.getElementById("msg").value,
    };

    emailjs.send("service_8081u2r", "template_g3i821h", tempParams, publicKey).then(
        function(res) {
            console.log("success", res.status);
        }
    )
};