window.onload = function () {
    document.getElementById('login').addEventListener("submit", validateForm);
    //TODO: irgendwie ist das event scheinbar falsch eingehängt. Oder die Browser validierung geht vor .. oder sowas
};


function validateForm(event) {
    var emailinput = document.getElementById('email');
    var x = emailinput.value;
    if (x == null || x == "" || !validateEmail(x)) {
        emailinput.classList.add("false");
        event.preventDefault();

    }
    else {
    }
}


/**
 * http://www.regular-expressions.info/email.html
 */

function validateEmail(email) {
    var re = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
    return re.test(email);
}