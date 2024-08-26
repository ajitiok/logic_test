/**
 *  Buatlah fungsi dengan input string jika string tersebut dibalik dan tetap sama dengan string yang diinputkan
 *  maka return true jika tidak return false
 */

function isPalindrome(str) {
  const cleanedStr = str.replace(/\s+/g, "").toLowerCase();

  const reversedStr = cleanedStr.split("").reverse().join("");

  return cleanedStr === reversedStr;
}

console.log(isPalindrome("kASUR rusak"));
console.log(isPalindrome("ikan naki"));
console.log(isPalindrome("Hello Dunia"));

module.exports = isPalindrome;
