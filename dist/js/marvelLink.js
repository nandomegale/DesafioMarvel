function marvelLink(info){
	
		var ts = Date.now();
		var PublicKey = "273f9e86fccbbca04ffc3a409ba151c4";
		var PrivateKey = "b949f52ffd14ae210d9ae2255b0549f3e1057c5a";
		var uni = ts+PrivateKey+PublicKey;
		var md5hash = md5(uni);
		var marvelLink = "http://gateway.marvel.com/v1/public/"+info+"?limit=100&offset=0&ts="+ts+"&apikey="+PublicKey+"&hash="+md5hash;
		return marvelLink;
		
}