/**
 * Determines if an applicant qualifies for a mortgage based on basic financial criteria.
 * @param {number} annualIncome - Applicant's annual income.
 * @param {number} creditScore - Applicant's credit score.
 * @param {number} monthlyDebts - Total of applicant's monthly debt payments.
 * @param {number} loanAmount - Desired loan amount.
 * @param {number} downPayment - Amount of money the applicant will pay upfront.
 * @return {string} - Approval status and message.
 */
const assessMortgageQualification = (annualIncome, creditScore, monthlyDebts, loanAmount, downPayment) => {
    // Basic thresholds
    const minCreditScore = 620; // Minimum credit score needed for approval
    const maxDebtToIncomeRatio = 0.36; // Maximum allowed debt-to-income ratio

    // Calculate debt-to-income ratio
    const monthlyIncome = annualIncome / 12;
    const debtToIncomeRatio = (monthlyDebts / monthlyIncome).toFixed(2);

    // Check qualification criteria
    if (creditScore < minCreditScore) {
        return "Mortgage denied: Your credit score is too low.";
    }
    if (debtToIncomeRatio > maxDebtToIncomeRatio) {
        return `Mortgage denied: Your debt-to-income ratio is too high (${debtToIncomeRatio}).`;
    }
    if (downPayment < loanAmount * 0.1) {  // Assuming a minimum 10% down payment is required
        return "Mortgage denied: Your down payment is insufficient.";
    }

    // If all checks pass
    return "Congratulations! You qualify for a mortgage.";
};

// Example usage:
let annualIncome = prompt("Enter your annual income:");
let creditScore = prompt("Enter your credit score:");
let monthlyDebts = prompt("Enter your total monthly debt payments:");
let loanAmount = prompt("Enter the desired loan amount:");
let downPayment = prompt("Enter your down payment:");

annualIncome = parseFloat(annualIncome);
creditScore = parseInt(creditScore);
monthlyDebts = parseFloat(monthlyDebts);
loanAmount = parseFloat(loanAmount);
downPayment = parseFloat(downPayment);

const result = assessMortgageQualification(annualIncome, creditScore, monthlyDebts, loanAmount, downPayment);
alert(result);
