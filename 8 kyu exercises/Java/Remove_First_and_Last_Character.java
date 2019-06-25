public class RemoveChars {
    public static String remove(String str) {
  String nstr = "";
    for(int i=1;i<str.length()-1;i++)
    nstr+=str.charAt(i);
    return nstr;
}
}