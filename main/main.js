module.exports = function main(email, suffixes) {
  var mail = email.split("@")[1];
  if(mail == suffixes)
  return true;
  
  else return false;
};
