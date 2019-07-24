class SmallestIntegerFinder {
  findSmallestInt(args) {
    var arrange = args.sort(
    function(a, b){return a - b});
    return arrange[0];
  }
}
