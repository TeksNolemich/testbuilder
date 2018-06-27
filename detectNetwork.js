// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
	if (cardNumber.slice(0,2) === '38' || cardNumber.slice(0,2) === '39' && (cardNumber.length === 14)){
			return 'Diner\'s Club';

	}else if(cardNumber.slice(0,2) === '34' || cardNumber.slice(0,2) === '37' && (cardNumber.length === 15)){
			return 'American Express';
	}else if(cardNumber[0] === '4' && [13,16,19].includes(cardNumber.length)) {
		if (['4903', '4905', '4911', '4936', '6333', '6759'].includes(cardNumber.slice(0,4))){
			return 'Switch';
		}else{		
			return 'Visa';
		}
	}else if((['51', '52', '53', '54', '55'].includes(cardNumber.slice(0,2)) && cardNumber.length === 16)) {
		// if ((cardNumber.slice(0,3) === '525') || (cardNumber.slice(0,3) === '524') || (cardNumber.slice(0,3) === '526')){
			// return 'China UnionPay';
		// }else{
			return 'MasterCard';
	}else if((cardNumber.slice(0,4) === '6011' || cardNumber.slice(0,2) === '65' || discLoop(cardNumber)) && (cardNumber.length === 16 || cardNumber.length === 19)) {
		return 'Discover';
	}else if(['5018', '5020', '5038', '6304'].includes(cardNumber.slice(0,4)) && ([12,13,14,15,16,17,18,19].includes(cardNumber.length))) {
		return 'Maestro';
	}else if((['624', '625', '626'].includes(cardNumber.slice(0,3)) || chinaLoopQuad(cardNumber) || chinaLoopHex(cardNumber)) && [16,17,18,19].includes(cardNumber.length)){
		return 'China UnionPay';
	}else if(['633110', '564182'].includes(cardNumber.slice(0,6)) || ['4903', '4905', '4911', '4936', '6333', '6759'].includes(cardNumber.slice(0,4)) && [16,18,19].includes(cardNumber.length)){
		return 'Switch';
	}
};

// ['633110', '564182'].includes(cardNumber.slice(0,6)) || 

var discLoop = function(cardNumber){
	for (var prefix = 644; prefix <= 649; prefix++) {
		var prefixStr = prefix.toString();
		if (prefixStr === cardNumber.slice(0,3)){
			return true;
		}
	}
};
var chinaLoopQuad = function(cardNumber){
	for (var prefix = 6282; prefix <= 6288; prefix++) {
		var prefixStr = prefix.toString();
		if (prefixStr === cardNumber.slice(0,4)){
			return true;
		}
	}
}

var chinaLoopHex = function(cardNumber){
	if (cardNumber.slice(0,3) === '622'){
		for (var prefix = 622126; prefix <= 622925; prefix++) {
			var prefixStr = prefix.toString();
			if (prefixStr === cardNumber.slice(0,6)){
				return true;
			}
		}
	}

}
console.log(detectNetwork('5641820000000000'));
