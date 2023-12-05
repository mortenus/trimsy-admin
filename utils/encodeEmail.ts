const encodeEmail = (email: string) => {
  let encodedEmail = '';
  for (var i = 0; i < email.length; i++) {
    var charCode = email.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      encodedEmail += String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      encodedEmail += String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
    } else {
      encodedEmail += email.charAt(i);
    }
  }
  return encodedEmail;
};

export default encodeEmail;
