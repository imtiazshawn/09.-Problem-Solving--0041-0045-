// 0041. Write a function that takes an array of strings as input and returns a new array with only the strings that have more than 5 characters.

let stringsArray = ['Shawn', 'Fardeen', 'Tusher', 'Jahid', 'Khaled', 'Tiash', 'Al-Amin'];

function filterStrings(arr) {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length > 5) {
      result.push(arr[i]);
    }
  }
  return result;
}

let filteredStrings = filterStrings(stringsArray);
console.log(filteredStrings);