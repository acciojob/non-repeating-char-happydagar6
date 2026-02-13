function firstNonRepeatedChar(str) {
 // Write your code here
	for(let ch of str) {
		if(str.indexOf(ch) === str.lastIndexOf(ch)){
			return ch;
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
