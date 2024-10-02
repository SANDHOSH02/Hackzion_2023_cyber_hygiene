const input_val = document.getElementById('input-field');
let special_characters = /.[!"#$%&'()*+,-./: ;<=>? @[\] ^ _`{|}~]/;
let numbers = /.[0123456789]/;
let alphabets = /.[a-z]/;
let valid = document.getElementsByClassName('valid-color');
let content_text = document.getElementById('content-text');
const Password_button = document.getElementById('pass_btn');
let submit_button = document.getElementById('submit_btn');
let state = true;
let check = document.querySelectorAll('i');
let alerting = document.getElementById('alert');
let alert_text = document.getElementById('alert-text');

// <i class="fa-solid fa-circle-check" style="color: #2fff2f;"></i>
//<i class="fa-solid fa-circle-xmark" style="color: #ff5f5f;"></i>
for (let i = 0; i < valid[0].children.length; i++) {

    valid[0].children[i].classList.add('default');
}


// console.log(input_val.value);
input_val.addEventListener('keyup', () => {
    let myval = input_val.value;
    content_text.innerHTML = "";
    // alert_text.innerHTML = "*Kindly Enter a text*";
    // alerting.style.backgroundColor = "#ff5f5f";

    if (myval != "") {
        content_text.innerText = "Password Not Strong";
        valid[0].children[0].style.color = 'rgb(255, 95, 95)';
        valid[0].children[0].classList.add('low-sec');
        check[0].className = "fa-solid fa-circle-check";
        check[0].style.color = "#2fff2f";

    }

    else {
        valid[0].children[0].classList.remove('low-sec');
        check[0].className = "fa-solid fa-circle-xmark";
        check[0].style.color = "#ff5f5f";

    }

    if (myval.length >= 3 && myval.match(special_characters)) {
        content_text.innerText = "Medium Password";
        valid[0].children[1].style.color = 'rgb(255, 95, 95)';
        valid[0].children[1].classList.add('mid-sec');
        check[1].className = "fa-solid fa-circle-check";
        check[1].style.color = "#2fff2f";
    } else {
        valid[0].children[1].classList.remove('mid-sec');
        check[1].className = "fa-solid fa-circle-xmark";
        check[1].style.color = "#ff5f5f";

    }
    if (myval.length >= 3 && myval.match(special_characters) && myval.match(numbers)) {
        check[2].className = "fa-solid fa-circle-check";
        check[2].style.color = "#2fff2f";

    }
    else {
        check[2].className = "fa-solid fa-circle-xmark";
        check[2].style.color = "#ff5f5f";

    }
    if (myval.length >= 8 && myval.match(special_characters) && myval.match(numbers) && myval.match(alphabets)) {
        content_text.innerText = "Strong Password";
        valid[0].children[2].style.color = 'rgb(85, 248, 85)';
        valid[0].children[2].classList.add('high-sec');
        check[3].className = "fa-solid fa-circle-check";
        check[3].style.color = "#2fff2f";
        submit_button.disabled = false;
        submit_button.addEventListener('click', () => {
            alert_text.innerHTML = "*Password added Successfully*";
            alerting.style.backgroundColor = "#2fff2f";
            alerting.classList.add('trigger');
            setTimeout(() => {
                alerting.classList.remove('trigger');
            }, 3000)
        })
    }

    else {
        valid[0].children[2].classList.remove('high-sec');
        check[3].className = "fa-solid fa-circle-xmark";
        check[3].style.color = "#ff5f5f";

    }

})

Password_button.addEventListener('click', () => {
    if (input_val.value == "") {
        alert_text.innerHTML = "*Kindly Enter a text*";
        alerting.style.backgroundColor = "#ff5f5f";

        alerting.classList.add('trigger');
        state = false
        setTimeout(() => {
            alerting.classList.remove('trigger');
        }, 3000)
    }

    if (state) {
        input_val.type = "text";
        Password_button.innerText = "Hide Password";
        state = false
    }
    else {
        input_val.type = "password";
        Password_button.innerText = "Show Password";
        state = true;
        // alerting.classList.remove('trigger');
    }


})





