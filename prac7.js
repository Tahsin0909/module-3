// palindromeChecker 

// 1  make a function taking stiring as a parameteer;
// 2. convert into normalized text, lower case (case sensitive) nad remove all expressions
// 3. split the normalized text  reverse() and join
// 4. compare reverce and mormalized text and return true
// 5. if no match return false


const isPalindrome = (str) =>{
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "")
    console.log(normalized)
const reversestring = normalized.split(" ").reverse().join("")
console.log(reversestring)
if(normalized === reversestring){
    return true
}
return false
};

// console.log(isPalindrome("A man a plan a canal Panama"))

// same probleem with two pointeer 

