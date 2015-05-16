//document.getElementByName("suche").onchange = suchen;

function suchen()
{
	var suche = document.getElementById("suche");
	var elements = document.getElementsByTagName('h2');
	var namen = ["Dexter", "Breaking Bad" , "Game of Thrones" , "Grey's Anatomy"];
	var ids = ["dexter"	,"breakingbad" ,"gameofthrones","greyanatomy"];

	for(var i = 0; i < namen.length; i++)
	{
		var div = document.getElementById(ids[i]);
		if(namen[i].search(suche.value) == -1)//  && suche.value.length >= 3
		{
			div.style.display = "none";
		}
		else
		{
			div.style.display = "block";
		}

	}


}