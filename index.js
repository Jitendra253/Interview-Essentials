function memoizedSquare() {
  let catched = {};
  return function (num) {
    if (catched[num]) {
      console.log("fromcatched");
      return catched[num];
    } else {
      let result = num * num;
      catched[num] = result;
      console.log("from new calculation");
      return result;
    }
  };
}
console.log(memoizedSquare()(4));
console.log(memoizedSquare()(4));
