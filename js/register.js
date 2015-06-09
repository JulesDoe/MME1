window.onload = function () {
    document.getElementById('validate').addEventListener("submit", validate);
};

var valid = true;

function validate(event)
{
	valid = true;

	var name = document.getElementById('name');
	simpleText(name);

	var nachname = document.getElementById('nachname');
	simpleText(nachname);

	var gebdat = document.getElementById('alter');
	date(gebdat);

	var plz = document.getElementById('plz');
	numberPLZ(plz);

	var ort = document.getElementById('ort');
	simpleText(ort);

	var land = document.getElementById('land');
	simpleText(land);

	var ktnr = document.getElementById('ktnr');
	numberKntnr(ktnr);

	var ort = document.getElementById('ort');
	simpleText(land);

	var email = document.getElementById('email');
	valiEmail(email);

	if(!valid)
		event.preventDefault();
}


function date(object)
{
	var text = object.value;
	var reg = new RegExp("[0-9][0-9]\.[0-9][0-9]\.[0-9][0-9][0-9][0-9]");
	if(text != null && text != "" && text.match(reg))
	{
		Unmark(object);

	}
	else
	{
		MarkasFalse(object);
		object.setAttribute("title","Kein Datumsvormat (DD.MM.YYYY)");
	}
}

function valiEmail(email) {
    var x = email.value;
    if (x == null || x == "" || !validateEmail(x)) {
       	MarkasFalse(email);
       	email.setAttribute("title","Keine EmailAddresse");
    }
    else {
    	Unmark(email);
    }
}

function validateEmail(email) {
    var re = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
    return re.test(email);
}

function simpleText(object){
	var text = object.value;
	var reg = new RegExp("[0-9]+");
	if(text != null && text != "" && !text.match(reg))
	{
		Unmark(object);
		object.setAttribute("title","Nur Buchstaben erlaubt");
	}
	else
	{
		MarkasFalse(object);
		//console.log("false" + text);
	}
}

function numberPLZ(object)
{
	var value = object.value;
	if(isNaN(value) || value.length != 5)
	{
		MarkasFalse(object);
		object.setAttribute("title","Nur 5 Stellige Zahlen");
	}
	else
	{
		Unmark(object);
	}
}

function numberKntnr(object)
{
	var value = object.value;
	if(isNaN(value) || value.length != 10){
		MarkasFalse(object);
		object.setAttribute("title","Nur 10 Stellige Zahlen");
	}
	else
		Unmark(object);
}

function MarkasFalse(object)
{
	valid = false;
	if(!object.classList.contains("false")){
		object.classList.add("false");
	}
}

function Unmark(object)
{
	object.classList.remove("false");
	object.setAttribute("title","");
}