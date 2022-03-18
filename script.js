// Assignment Code
let generateBtn = document.querySelector("#generate");
let charactorArray = [a,b,c,d,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,1,2,3,4,5,6,7,8,9,0];

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  let passsize = charactorArray.length;
  passwordText.value = password;
  for(let i = 0; i< passwordLength; i++){
    let randomPassword = Math.floor(Math.random() * characters.passwordLength)
    password += cjaracter/sibstromg(randomPassword, randomPassword + 1)
  }
  holder.value=password
}
  



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




        