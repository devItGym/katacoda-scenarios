console.log(squareNum(process.argv[2]));

function squareNum(x) {

  if(isNaN(x)){
      return "Incorrect input, please use a number"
  }else{
      return x**=2;
  }
}


