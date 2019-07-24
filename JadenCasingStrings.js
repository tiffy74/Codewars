String.prototype.toJadenCase = function() {
  //...
var words = this.toLowerCase().split(' ');
for (var i = 0; i < words.length; i++){
words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1); 
}
return words.join(' ');
};
