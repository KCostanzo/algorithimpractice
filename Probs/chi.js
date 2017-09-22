


const fn = () => {

}


const checkStringUniqueChars = str => {

	var newStr = "";
	console.log(str);
	console.log(newStr);
	for (var i = 0; i < str.length; i++) {
		if (newStr.includes(str[i])) {
			console.log("non unique char: " + str[i]);
			return false;
		} else {
			newStr = newStr + str[i];
			console.log("newString " + newStr);
		}
	}

	console.log("All Good");
	return true;
}


checkStringUniqueChars("abcdefghijk");
checkStringUniqueChars("abcdedc");
checkStringUniqueChars("lool");
checkStringUniqueChars("jimlpotreae");
console.log("n2, not great");
console.log("2: \n");