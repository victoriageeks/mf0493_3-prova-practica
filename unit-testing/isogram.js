function isIsogram(str){
    let foundLetters = '';
    let isIsogram = true;
    let nextLetter = 0;
    while(isIsogram && nextLetter<str.length) {
      isIsogram = (foundLetters).indexOf((str[nextLetter].toLowerCase())) == -1;
      foundLetters+= str[nextLetter].toLowerCase();
      nextLetter++;
    }
    
    return isIsogram;
  }

module.exports = {
    isIsogram
}