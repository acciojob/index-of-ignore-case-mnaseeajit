function indexOfIgnoreCase(s1, s2) {
  // write your code here
	for(let i = 0;i<s1.length;i++)
		{
			if (s1.slice(i,i+s2.length) == s2){
				return i;
			}       
		}
	return -1;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
