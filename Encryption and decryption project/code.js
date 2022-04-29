function convert(){
	var plTextVal = document.getElementById('plText').value;
	var key = document.getElementById('key').value;
	key = parseInt(key);
	var encrypt="";
	for(var i = 0 ; i < plTextVal.length ; i++){
		var char = plTextVal.charAt(i).charCodeAt(0);
		console.log(char +" "+ (!((char >= 65 && char <= 90) || (char >= 97 && char <=122))));
		if(!((char >= 65 && char <= 90) || (char >= 97 && char <=122))){
			encrypt += String.fromCharCode(char); 
			continue;
		}
		if((char == 122 || char == 90) && key > 0){
			char -= 26;
		}
		if((char == 65 || char == 97) && key < 0){
			char +=26;
		}
		encrypt += String.fromCharCode(char + key);
	}
	document.getElementById('print').innerHTML = encrypt;
}

function convert1(){
	var eText = document.getElementById('encrypted').value;
	var key = document.getElementById('key1').value;
	key = parseInt(key);
	var decrypt="";
	console.log(eText+" "+key);
	for(var i = 0 ; i < eText.length ; i++){
		var char = eText.charAt(i).charCodeAt(0);
		console.log(char);
		console.log(char +" "+ (!((char >= 65 && char <= 90) || (char >= 97 && char <=122))));
		if(!((char >= 65 && char <= 90) || (char >= 97 && char <=122))){
			decrypt += String.fromCharCode(char); 
			continue;
		}
		if((char == 122 || char == 90) && key < 0){
			char -= 26;
		}
		if((char == 65 || char == 97) && key > 0){
			char +=26;
		}
		decrypt += String.fromCharCode(char - key);
	}
	console.log(decrypt);
	 document.getElementById('print1').innerHTML = decrypt;
}