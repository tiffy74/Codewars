function isPangram(string){
  //...
  let n = string.toLowerCase().split("");
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
   var i;
   for (i = 0; i < 26;i++){
    if (n.indexOf(alphabet[i]) < 0) return false
   };
   
    return true;

}
