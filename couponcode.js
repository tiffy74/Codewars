function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return correctCode === enteredCode && Date.parse(expirationDate) >= Date.parse(currentDate);
}
