function find_average(array) {
  return array.reduce(function(num1,num2){
    return num1+num2;
  })/array.length;
}