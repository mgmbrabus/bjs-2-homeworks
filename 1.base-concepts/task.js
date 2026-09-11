"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return arr;
  }

  if (d === 0) {
    const root = -b / (2 * a);
    arr.push(root);
  } else {
    const root1 = (-b + Math.sqrt(d)) / (2 * a);
    const root2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(root1, root2);
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);

  
  if (
    Number.isNaN(percent) ||
    Number.isNaN(contribution) ||
    Number.isNaN(amount) ||
    Number.isNaN(countMonths)
  ) {
    return false;
  }

  
  const creditBody = amount - contribution;

  if (creditBody <= 0) {
    return 0;
  }
   const monthlyRate = (percent / 100) / 12;
   const monthlyPayment =
    creditBody *
    (monthlyRate + monthlyRate / ((1 + monthlyRate) ** countMonths - 1));
    const totalAmount = monthlyPayment * countMonths;
    return Number(totalAmount.toFixed(2));
}