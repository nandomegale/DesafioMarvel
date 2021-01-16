var listCharBtn = document.getElementById("listCharacter");
var searchCharBtn = document.getElementById("searchCharacterBtn");;

var listComicBtn = document.getElementById("listComic");
var searchComicBtn = document.getElementById("searchComicBtn");

var listEventBtn = document.getElementById("listEvent");
var searchEventBtn = document.getElementById("searchEventBtn");

var pageheader = document.getElementById("pageHeader");

listCharBtn.onclick = function listCharClick(){
	//console.log("Clicou no List Character");
	var click = 0;
	pageheader.innerHTML = "List Characters";
	var listCharLink = marvelLink("characters");
	toList.list(listCharLink, click);
}
searchCharBtn.onclick = function searchCharClick(){
	//console.log("Clicou no Search Character");
	var searchBoxChar = document.getElementById("searchBoxChar");
	if(searchBoxChar.value=='') alert("Insert a information");
	else{
		pageheader.innerHTML = "Search Character";
		var click = 0;
		toSearch.search(click);
		searchBoxChar.value='';
	}
}

listComicBtn.onclick = function listComicClick(){
	//console.log("Clicou no List Comic");
	var click = 1;
	pageheader.innerHTML = "List Comics";
	var listComicLink = marvelLink("comics");
	toList.list(listComicLink, click);
}
searchComicBtn.onclick = function searchComicClick(){
	//console.log("Clicou no Seach Comic");
	var searchBoxComic = document.getElementById("searchBoxComic");
	if(searchBoxComic.value=='') alert("Insert a information");
	else{
		pageheader.innerHTML = "Search Comics";
		var click = 1;
		toSearch.search(click);
		searchBoxComic.value='';
	}
}

listEventBtn.onclick = function listEventClick(){
	//console.log("Clicou no List Event");
	var click = 2;
	pageheader.innerHTML = "List Events";
	var listEventLink = marvelLink("events");
	toList.list(listEventLink, click);
}
searchEventBtn.onclick = function searchEventClick(){
	//console.log("Clicou no Search Event");
	var searchBoxEvent = document.getElementById("searchBoxEvent");
	if(searchBoxEvent.value=='') alert("Insert a information");
		else{
		pageheader.innerHTML = "Search Event";
		var click = 2;
		toSearch.search(click);
		searchBoxEvent.value='';
	}
}
