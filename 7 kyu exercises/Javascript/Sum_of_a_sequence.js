const sequenceSum = (begin, end, step) => {
  var sum=0;
  while(begin<=end)
  {
    sum+=begin;
    begin+=step;
  }
  return sum;
};