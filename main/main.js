module.exports = function main(email, suffixes) {
  var mail = email.split("@");
  if(mail == suffixes)
  return true;
  else return false;
};
