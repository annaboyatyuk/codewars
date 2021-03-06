function formatWords(words){
  if (!words) return '';
  
  words = words.filter((word) => {
    return word.length;
  });
  
  if (words.length === 0) {
    return '';
  }
  else if (words.length == 1) {
    return words[0];
  } 
  else {
    return [words.slice(0, words.length -1).join(', '), words.slice(words.length - 1)[0]].join(' and ');
  }
}
