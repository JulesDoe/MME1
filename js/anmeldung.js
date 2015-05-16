window.onload = function () {
    document.getElementById('login').addEventListener("onsubmit", function () {
        return validateForm();
    });
    //TODO: irgendwie ist das event scheinbar falsch eingehängt. Oder die Browser validierung geht vor .. oder sowas
};


function validateForm() {
    var x = document.getElementById('email').value;
    if (x == null || x == "" || !validateEmail(x)) {
        alert("Hat sich da ein Feler eingeschlichen?");
        return false;
    }
    else {
        return true;
    }
}


/**
 * http://www.regular-expressions.info/email.html
 */

function validateEmail(email) {
    var re = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
    return re.test(email);
}