function abbrevName(name){
  var nameSplit = name.split(' ');
  return (nameSplit[0][0] + '.' + nameSplit[1][0]).toUpperCase();
}

https://www.codewars.com/kata/abbreviate-a-two-word-name/train/javascript


Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot seperating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F

