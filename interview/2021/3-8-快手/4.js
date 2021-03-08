//统计字符串中连续出现的最多的字符，以及字符的个数

function getCharArr(str){
	let charArr = str.split('');
	let result  = {}
	
	for(let i = 0; i< charArr.length; i++){
		let char = charArr[i];
		
		if(result[char] && result[char] > 0) {
			char === charArr[i-1] ? (result[char] = result[char] + 1) : ''; 
		} else {
			result[char] = 1
		}
	}
	return  Object.entries(result).sort((a,b) => a[1] < b[1])[0]
}




console.log(getCharArr('abbkejsbcccwqaa')) //b,2

console.log(getCharArr('abcabcabcccccdefefefefefef'))