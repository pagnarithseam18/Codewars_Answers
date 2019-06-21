function isIsogram(str){
str = str.match(/\w/g);
if(str==null)
return true;
else{
for(i=0;i<str.length;i++)
{
  for(j=0;j<str.length;j++)
  {
  if(i==j)
  continue;
  else if(str[i].toLowerCase()==str[j].toLowerCase())
  return false;
  else
  continue;
  }
}
}
return true;
}