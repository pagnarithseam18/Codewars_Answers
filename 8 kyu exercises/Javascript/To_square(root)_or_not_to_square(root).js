function squareOrSquareRoot(array) {
array = array.map(function(num){
    if(Math.sqrt(num)==Math.floor(Math.sqrt(num)))
    return Math.sqrt(num);
    else
    return Math.pow(num,2);
  });
return array;
}