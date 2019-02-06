function countLetters(char) {
  let outputObj = {};
  let newStr = char.split('');

  newStr.forEach(function(elm) {
    if (elm != ' ') {
      let letter = elm;

      if(outputObj[letter]) {
        outputObj[letter]++
      } else {
        outputObj[letter] = 1;
      }
    }
  })
  return outputObj;
}

console.log(countLetters('sarah is super awesome'));