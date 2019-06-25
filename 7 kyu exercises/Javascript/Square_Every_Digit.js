function squareDigits(num){
var str ="";
  num =num.toString().split('').map(function(num)
  {
    return Math.pow(num,2);
  });
  for(i=0;i<num.length;i++)
  str = str + num[i];
  return parseInt(str);
}