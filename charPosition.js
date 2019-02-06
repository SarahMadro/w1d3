function countLetters(word) {
  let indexObj = {};

  for (let i = 0; i <= word.length; i++) {

    let letter = word[i];
    //prints out letters instring

    if (indexObj[letter]) {
      console.log('******', indexObj[letter]);
      indexObj[letter].push(i); //and prints out letters with

    } else {
      indexObj[letter] = [i]; //turns sting in to array
    }
    delete indexObj[' '];
  }
  return indexObj;

}
console.log(countLetters('sarah is awesome'));

//**************with for each *******************//
function countLetters(word) {
  let obj = {};
  let letters = word.split('');

  letters.forEach(function (elm, index) { // for each element in "Letters" array
    if (elm !== ' ') { // if the "elm" is not a space
      let char = elm; // element is a letter

      if (obj[char]) { //if there is a letter in object
        obj[char].push(index);
      } else {
        obj[char] = [index];
      }

    }
  })
  return obj;
}
console.log(countLetters('lighthouse in the house'));