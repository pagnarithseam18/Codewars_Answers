function disemvowel(str) {
var nstr="";
  for(i=0;i<str.length;i++)
  {
  if(str[i].toLowerCase()=='a'||str[i].toLowerCase()=='e'||str[i].toLowerCase()=='i'||str[i].toLowerCase()=='o'||str[i].toLowerCase()=='u')
  continue;
  else 
  nstr = nstr + str[i];
  }
  return nstr;
}