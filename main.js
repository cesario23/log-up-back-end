// These variables are our "database" for users.
// You can actually change the values to whatever you'd like!
// And you can and should use them in your `isRegisteredUser` function.
// But we use them in your test code as well, so whatever you do, don't delete them!

const user1 = 'colin.jaffe@codeimmersives.com';
const password1 = 'Hotforhimself';
const user2 = 'mesuara@codeimmersives.com';
const password2 = 'Console.logger';
const user3 = 'anthony@codeimmersives.com';
const password3 = 'like a BOSS';


// **YOUR** code below. Pass those tests!

function isValidEmail (str){
  if (str.endsWith ("@codeimmersives.com")){
    return true;
  } else {
    return false;
  }
}
function isValidPassword (str){
  if (str && str !== str.toUpperCase() && str !== str.toLowerCase()){
  return true;
  }else {
  return false;
  }
}
function isRegisteredUser(str){
  if (str === user1){
return true;
  } else if (str === user2){
return true;
  } else if (str === user3){
return true;
  }else {
return false
  }
}
function passwordMatches (str1, str2){
  if (str1 === "colin.jaffe@codeimmersives.com" && str2 === "Hotforhimself"){
    return true;
  }else if (str1 === 'mesuara@codeimmersives.com' && str2 ==="Console.logger"){
    return true;
  }else if (str1 === "anthony@codeimmersives.com" && str2 === "like a BOSS"){
    return true;
  } else {
    return false;
  }

}




// Our code below. Do not touch!


if (typeof isValidEmail === 'undefined') {
  isValidEmail = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof isRegisteredUser === 'undefined') {
  isRegisteredUser = undefined;
}

if (typeof passwordMatches === 'undefined') {
  passwordMatches = undefined;
}

if (typeof user1 === 'undefined') {
  user1 = undefined;
}

if (typeof user2 === 'undefined') {
  user2 = undefined;
}

if (typeof user3 === 'undefined') {
  user3 = undefined;
}

if (typeof password1 === 'undefined') {
  password1 = undefined;
}

if (typeof password2 === 'undefined') {
  password2 = undefined;
}

if (typeof password3 === 'undefined') {
  password3 = undefined;
}



module.exports = {
  isValidEmail,
  isValidPassword,
  isRegisteredUser,
  passwordMatches,
  user1,
  user2,
  user3,
  password1,
  password2,
  password3,
}
