var zeit;
window.onload = resetTimer;
document.onmousemove = resetTimer;
document.onkeypress = resetTimer;

function logout() {
	alert("Du warst zu lange inaktiv!");
	location.href = 'mainsite.html';
}

function resetTimer() {
	clearTimeout(zeit);
	zeit = setTimeout(logout, 5000)
	// 1000 = 1 sec
}