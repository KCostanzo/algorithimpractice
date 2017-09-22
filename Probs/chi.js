


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


// checkStringUniqueChars("abcdefghijk");
// checkStringUniqueChars("abcdedc");
// checkStringUniqueChars("lool");
// checkStringUniqueChars("jimlpotreae");
// console.log("n2, not great");
console.log("2: \n");


const chceckStrPermutation = (str1, str2) => {

	var checkObj = {};

	if (str1.length != str2.length) {
		console.log("false, diff length \n");
		return false;
	}

	for (var i = 0; i < str1.length; i++) {
		if (typeof checkObj[str1[i]] == "number") {
			// console.log("repeat char");
			checkObj[str1[i]] += 1;
		} else {
			checkObj[str1[i]] = 1;
		}
		console.log(checkObj);
	}

	for (var j=0; j < str1.length; j++) {
		if (typeof checkObj[str2[j]] == 'number') {
			checkObj[str2[j]] -= 1;
			console.log("str2 char chceck");
			console.log(checkObj);
		} else {
			console.log("false, not matching char");
			return false;
		}
	}

	for (var key in checkObj) {
		if (checkObj[key] !== 0) {
			console.log("mismatched char numbers");
			console.log(key + checkObj[key]);
			return false;
		}
	}


	console.log("true");
	return true;
}



chceckStrPermutation("abcd", "abdc"); //true
chceckStrPermutation("abcdef", "zetyol"); //false
chceckStrPermutation("checking", "check"); //false
chceckStrPermutation("longcheck", "gonechlck"); //true
chceckStrPermutation("abcbcba", "cbaaccb"); //false, last case

