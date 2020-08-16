function palindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g,'');
  let backwards = str.split('');
  backwards = backwards.reverse().join('').toString();
  if (backwards == str)
  {
    return true;
  }
  else
  {
    return false;
  }
}



palindrome("eye");
