//ANSWERS


const checkunique = str => {

	var allChars = {};

	for (var i = 0; i < str.length; i++) {
		console.log("val: " + str[i]);
		
		if (allChars[str[i]]){
			console.log("char exists: " + str[i] + "\n");
			return false
		}

		allChars[str[i]] = true;
		// console.log(allChars);
	}


	console.log("ALL UNIQUE");
	return true;
}



checkunique("abcdefghijk");
checkunique("abcdedc");
checkunique("lool");
checkunique("jimlpotreae");