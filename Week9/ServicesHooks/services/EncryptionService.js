//Two basic kinds of encryption one way and two way
//One way is more secure - your user password should always be one way
//password => #$%^&^%$@!@#$%^&^%$#$%^
//password - re encrypt : compare the encrypted values
//Anything senstive that you dont need to display back to the user
//Two Way encryption there is an encrypt and a decrypt
//This is for information that is sensitive that you may need to display

class EncryptionService {
  constructor() {
    //here you would either take in a seed or a key as parameter and set it
    //we are just going to re-arrange letters in the alphabet
    //shift letters forward or backward on letter in the alphabet
    this.SHIFT = 1;
    //You probaly need to set up a key
    //you might to set up a salt
  }

  //encrypts by shifting each letter forward by 1
  encrypt(text) {
    if (!text) return "";
    //we can get the ASCII code of a character
    return text.split("").map((char) => {
      //Get the code of the character
      let code = char.charCodeAt(0);
      //add 1 to the code and then return the new character
      return String.fromCharCode(code + this.SHIFT);
    });
  }

  decrypt(text) {
    if (!text) return "";
    //we can get the ASCII code of a character
    return text.split("").map((char) => {
      //Get the code of the character
      let code = char.charCodeAt(0);
      //add 1 to the code and then return the new character
      return String.fromCharCode(code - this.SHIFT);
    });
  }
}

//export the entire class as default
export default new EncryptionService();
