
//What will be the output?

console.log(squareNum(process.argv[2]));

var squareNum = function(x) {

  if(isNaN(x)){
      return "Incorrect input, please use a number"
  }else{
      return x**=2;
  }
}




