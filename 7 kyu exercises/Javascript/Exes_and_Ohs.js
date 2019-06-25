function XO(str) {
    var x=0,o=0;
    for(i=0;i<str.length;i++)
    {
      if(str[i].toLowerCase()=='x')
      x++;
      if(str[i].toLowerCase()=='o')
      o++;
    }
    if(x==o)
    return true;
    else
    return false;
}