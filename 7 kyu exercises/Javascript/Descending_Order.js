function descendingOrder(n){
  n = n.toString();
  n=n.match(/\d/g);
  n.sort(function(a,b)
  {
    return b-a;
  });
  n = n.join('');
  return parseInt(n);
}