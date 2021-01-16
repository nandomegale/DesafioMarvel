var toList = {
	
	list: function(url,click){
		var message = document.getElementById("message");
		var marvelContainer = document.getElementById("marvel-container");
		var footer = document.getElementById("footer");
		
		$.ajax({
			url: url,
			type: "GET",
			beforeSend: function(){
				message.innerHTML = "Loading..";
			},
			complete: function(){
				message.innerHTML = "Sucessfuly done!";
			},
			success: function(data){
				footer.innerHTML = data.attributionHTML;
				var string = "";
				
				string += "<div class='row'>";
				for(var i=0; i<data.data.results.length; i++){
					var element = data.data.results[i];
					
					
					string += "<div class='col-md-3'>";
					string += "	<img src='"+ element.thumbnail.path +"/portrait_fantastic."+element.thumbnail.extension+ "' />";
					
					if(click==0){
					string += "<h3>" +element.name + "</h3>";
					}
					else string += "<h3>" +element.title + "</h3>";
					string += "</div>";
					
					if((i+1)%4 == 0){
						string += "</div>";
						string += "<div class='row'>";
					}
				}
				marvelContainer.innerHTML = string;
			},
			error: function(){
				message.innerHTML = "Error";
			}
		});
	}
};

var toSearch = {
	
	search: function(click){
		var message = document.getElementById("message");
		var marvelContainer = document.getElementById("marvel-container");
		var footer = document.getElementById("footer");
		var searchBoxChar = document.getElementById("searchBoxChar");
		var searchBoxComic = document.getElementById("searchBoxComic");
		var searchBoxEvent = document.getElementById("searchBoxEvent");
		if(click==0) var url = "http://gateway.marvel.com/v1/public/characters?name="+searchBoxChar.value+"&ts=1500494691124&apikey=273f9e86fccbbca04ffc3a409ba151c4&hash=a34103063bc7fab32254cb67bb21120c"
		if(click==1) var url = "http://gateway.marvel.com/v1/public/comics?title="+searchBoxComic.value+"&ts=1500494691124&apikey=273f9e86fccbbca04ffc3a409ba151c4&hash=a34103063bc7fab32254cb67bb21120c"
		if(click==2) var url = "http://gateway.marvel.com/v1/public/events?name="+searchBoxEvent.value+"&ts=1500494691124&apikey=273f9e86fccbbca04ffc3a409ba151c4&hash=a34103063bc7fab32254cb67bb21120c"
		
		$.ajax({
			url: url,
			type: "GET",
			beforeSend: function(){
				message.innerHTML = "Loading..";
			},
			complete: function(){
				message.innerHTML = "Sucessfuly done!";
			},
			success: function(data){
				footer.innerHTML = data.attributionHTML;
					var string = "";
					string += "<div class='row'>";
						
					for(var i=0; i<data.data.results.length; i++){
						var element = data.data.results[i];
							
							
						string += "<div class='col-md-3'>";
						string += "	<img src='"+ element.thumbnail.path +"/portrait_fantastic."+element.thumbnail.extension+ "' />";
						
						
						if(click==0){
						string += "<h3>" +element.name + "</h3>";
						string += "<p> Description: "+element.description+" </p>";
						}
						
						else{ 
							string += "<h3>" +element.title + "</h3>";
							string += "<p> Description: "+element.description+" </p>";
							string += "</div>";
						}
						if((i+1)%4 == 0){
							string += "</div>";
							string += "<div class='row'>";
						}
					}
						
					marvelContainer.innerHTML = string;
			},
			error: function(){
				message.innerHTML = "Error";
			}
		});
	}
};