/**
 *  Buatlah fungsi dengan input array integer untuk mengurutkan angka dari kecil kebesar
 *  dan besar kekecil dengan manual tanpa fungsi bawaan javascript,
 *
 */

function sortAscOrDesc(arr, sort) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (sort === "asc") {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      } else if (sort === "desc") {
        if (arr[j] < arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  return arr;
}

const numbers = [5, 3, 11, 8, 4, 2];
console.log(sortAscOrDesc(numbers, "desc"));

module.exports = sortAscOrDesc;
