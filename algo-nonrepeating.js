// method 1
function nonRepeated(str) {
    for(let i = 0; i < str.length; i++) {
       let j = str.charAt(i)
       if (str.indexOf(j) == str.lastIndexOf(j)) {
         return j;
       }
    }
    return null;
 }
 
 console.log(nonRepeated("aabcbd")); //c


// method 2
 function firstNotRepeatingCharacter(s) {
    const array = s.split("");
    let scores = new Array(array.length).fill(0);

    for (let char of array) {
        scores[array.indexOf(char)]++;
    }

    const singleChar = array[scores.indexOf(1)];
    return singleChar ? singleChar : "_"
}
console.log(firstNotRepeatingCharacter("aabcbd")); //c