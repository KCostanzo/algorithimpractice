


// const fn = () => {

// }


// const checkStringUniqueChars = str => {

// 	var newStr = "";
// 	console.log(str);
// 	console.log(newStr);
// 	for (var i = 0; i < str.length; i++) {
// 		if (newStr.includes(str[i])) {
// 			console.log("non unique char: " + str[i]);
// 			return false;
// 		} else {
// 			newStr = newStr + str[i];
// 			console.log("newString " + newStr);
// 		}
// 	}

// 	console.log("All Good");
// 	return true;
// }


// // checkStringUniqueChars("abcdefghijk");
// // checkStringUniqueChars("abcdedc");
// // checkStringUniqueChars("lool");
// // checkStringUniqueChars("jimlpotreae");
// // console.log("n2, not great");
// // console.log("2: \n");


// const chceckStrPermutation = (str1, str2) => {

// 	var checkObj = {};

// 	if (str1.length != str2.length) {
// 		console.log("false, diff length \n");
// 		return false;
// 	}

// 	for (var i = 0; i < str1.length; i++) {
// 		if (typeof checkObj[str1[i]] == "number") {
// 			// console.log("repeat char");
// 			checkObj[str1[i]] += 1;
// 		} else {
// 			checkObj[str1[i]] = 1;
// 		}
// 		console.log(checkObj);
// 	}

// 	for (var j=0; j < str1.length; j++) {
// 		if (typeof checkObj[str2[j]] == 'number') {
// 			checkObj[str2[j]] -= 1;
// 			console.log("str2 char chceck");
// 			console.log(checkObj);
// 		} else {
// 			console.log("false, not matching char");
// 			return false;
// 		}
// 	}

// 	//after running through all chars, will have returned false 3ith mismatched chars, now check if all 0's to see if the number of chars is the same, any non 0 answer means this is not a permutation
// 	for (var key in checkObj) {
// 		if (checkObj[key] !== 0) {
// 			console.log("mismatched char numbers");
// 			console.log(key + checkObj[key]);
// 			return false;
// 		}
// 	}

// 	console.log("true");
// 	return true;
// }



// chceckStrPermutation("abcd", "abdc"); //true
// chceckStrPermutation("abcdef", "zetyol"); //false
// chceckStrPermutation("checking", "check"); //false
// chceckStrPermutation("longcheck", "gonechlck"); //true
// chceckStrPermutation("abcbcba", "cbaaccb"); //false, last case

//mostly correct, more concise possible, also otyher method w/ sort

//

// console.log("5:  \n");


// const check1 = (str1, str2) => {

// 	const check1dif = (str1, str2) =>	{

// 		var diffVar = 0;
// 		for (var j = 0; j < str1.length; j++) {
// 			if (!str2.includes(str1[j])) {
// 				console.log("str2 not includes");
// 				diffVar += 1;
// 			}

// 			if (diffVar > 1) {
// 				console.log("diffvar > 1");
// 				return false;
// 			}
// 		}
// 		console.log("true - 1 dif length");
// 		return true;
// 	};

// 	const equalCheck = (str1,str2) => {
// 		var eqTracker = 0;
// 		for (var i = 0; i < str1.length; i++) {
// 			if (str1[i] !== str2[i]) {
// 				console.log("non equal char, 1 edit");
// 				eqTracker += 1;
// 			}
// 		}

// 		if (eqTracker > 1) {
// 			console.log("eqCheck > 1\n ");
// 			return false;
// 		}
// 		console.log("true");
// 		return true;
// 	}

// 	if (str1.length === str2.length) {
// 		console.log("equal length");
// 		return(equalCheck(str1,str2));
// 	} else if ((str1.length + 1) === str2.length) {
// 		console.log("second string greater");
// 		return(check1dif(str1,str2));
// 	} else if ((str1.length - 1 ) === str2.length) {
// 		console.log("first string greater");
// 		return(check1dif(str2,str1));
// 	}

// 	console.log("trtue \n");
// 	return true;
// }




// check1("pale","ple"); //true
// check1("pales","pale"); //true
// check1("pale","bale"); //true
// check1("pale","bake"); //false


// console.log("5: \n");


// const rotateMatrix = mtrx => {


	
// }


//console.log("Zero Matricx: \n");

const zeromatrix = mxnarr => {

	let known0arr = [];
	let known0obj = {};

	for (let i = 0; i < mxnarr.length; i++) {
		
	}



	return newMatrix;

})