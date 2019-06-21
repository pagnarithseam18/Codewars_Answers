function GetSum( a,b )
{
  if(a==b)
  return a;
   var sum = 0;
   if(a>b)
   for(i=b;i<=a;i++)
     sum = sum + i;
   else if(b>a)
   for(i=a;i<=b;i++)
     sum = sum + i;
   return sum;
}