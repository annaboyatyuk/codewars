function filter_list(l) {
  return l.filter(n => typeof n == "number")
  // Return a new array with the strings filtered out
}


// and the first attempt



function filter_list(l) {
  return l.reduce((a, b) => { if (typeof b === 'number') a.push(b); return a; }, []);
}






