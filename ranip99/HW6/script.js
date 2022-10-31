function calculator(){
  principal = parseFloat(document.getElementById('principal').value);
  interest = parseFloat(document.getElementById('interest').value);
  term = parseInt(document.getElementById('term').value);

  if (isNaN(principal) || isNaN(interest) || isNaN(term) || principal < 0 || interest < 0 || term < 0) {
    if (isNaN(principal) || isNaN(interest) || isNaN(term)) {
      alert("Enter a number for each of the top 3 fields.")
    }
    if (principal < 0 || interest < 0 || term < 0) {
      alert("Enter positive numbers only.")
    }

  } else {
      monthlyPayment = principal * (interest/100 / 12) / (1 - (1 / ( 1 +  (interest/100 / 12)) ** term));
      document.getElementById('monthly').value = Math.round(monthlyPayment * 100) / 100;
      sum = monthlyPayment * term;
      document.getElementById('sumPayments').value = Math.round(sum * 100) / 100;
      totalI = sum - principal
      document.getElementById('totalInterest').value = Math.round(totalI * 100) / 100;
  }
}
