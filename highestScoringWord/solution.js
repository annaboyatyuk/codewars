function high(x){
  let word = x.split(' ');
  let highestScore = 0;
  let highestScoreWord = '';
  for(let i = 0; i < word.length; i++) {
    let current = 0;
    for(let j = 0; j < word[i].length; j++) {
      current += (word[i].charCodeAt(j) - 96);
    }
    if(current > highestScore) {
      highestScore = current;
      highestScoreWord = word[i];
    }
  }
  return highestScoreWord;
}

