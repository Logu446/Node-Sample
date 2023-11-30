const readline = require('readline');

// Create interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to calculate simple interest
function calculateSimpleInterest(principal, rate, time) {
  return (principal * rate * time) / 100;
}

// Get user input for principal, rate, and time
rl.question('Enter principal amount: ', (principal) => {
  rl.question('Enter interest rate (in percentage): ', (rate) => {
    rl.question('Enter time (in years): ', (time) => {
      // Convert input to numbers
      principal = parseFloat(principal);
      rate = parseFloat(rate);
      time = parseFloat(time);

      // Calculate simple interest
      const simpleInterest = calculateSimpleInterest(principal, rate, time);

      // Display the result
      console.log(`Simple Interest: ${simpleInterest.toFixed(2)}`);

      // Close the interface
      rl.close();
    });
  });
});
