function calculateInterest() {
  const apr = parseFloat(document.getElementById("apr").value);
  const amount = parseFloat(document.getElementById("amount").value);

  const monthlyInterestRate = apr / 12 / 100;
  const dailyInterestRate = monthlyInterestRate / 30;
  const weeklyInterestRate = dailyInterestRate * 7;
  const yearlyInterestRate = apr / 100;

  const dayInterest = amount * dailyInterestRate;
  const weekInterest = amount * weeklyInterestRate;
  const monthInterest = amount * monthlyInterestRate;
  const yearInterest = amount * yearlyInterestRate;

  document.getElementById("dayInterest").innerText = `${dayInterest.toFixed(
    2
  )}`;
  document.getElementById("weekInterest").innerText = `${weekInterest.toFixed(
    2
  )}`;
  document.getElementById("monthInterest").innerText = `${monthInterest.toFixed(
    2
  )}`;
  document.getElementById("yearInterest").innerText = `${yearInterest.toFixed(
    2
  )}`;

  // Show the result section
  document.getElementById("resultSection").style.display = "block";
}
