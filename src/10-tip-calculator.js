/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  let tipAmount = 0, tipPercentage = 0, totalAmount = 0;
  if (billAmount <= 0) return null;
  switch (serviceRating) {
    case 1:
      tipPercentage = 5;
      tipAmount = billAmount * 0.05;
      totalAmount = billAmount + tipAmount;
      break;
    case 2:
      tipPercentage = 10;
      tipAmount = billAmount * 0.1;
      totalAmount = billAmount + tipAmount;
      break;
    case 3:
      tipPercentage = 15;
      tipAmount = billAmount * 0.15;
      totalAmount = billAmount + tipAmount;
      break;
    case 4:
      tipPercentage = 20;
      tipAmount = billAmount * 0.2;
      totalAmount = billAmount + tipAmount;
      break;
    case 5:
      tipPercentage = 25;
      tipAmount = billAmount * 0.25;
      totalAmount = billAmount + tipAmount;
      break;
    default:
      return null;
  }
  return { tipPercentage, tipAmount: twoDecimals(tipAmount), totalAmount: twoDecimals(totalAmount) };
}

function twoDecimals(num) {
  return Math.round(num * 100) / 100
}

console.log(calculateTip(50, 4));
