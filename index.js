document.getElementById("depositBtn").addEventListener("click", deposit);
document.getElementById("withdrawalBtn").addEventListener("click", withdraw);

function deposit() {
  let inputAmount = parseFloat(document.getElementById("depositInput").value);
  let balance = parseFloat(document.getElementById("balance").innerHTML);

  // Validate deposit amount
  if (isNaN(inputAmount) || inputAmount <= 0) {
    alert("Please enter a valid deposit amount (positive number).");
    return;
  }

  let totalBalance = balance + inputAmount;
  document.getElementById("balance").innerHTML = totalBalance.toFixed(2);
  document.getElementById("depositInput").value = ""; // Clear the input field
}

function withdraw() {
  let inputAmount = parseFloat(
    document.getElementById("withdrawalInput").value
  );
  let balance = parseFloat(document.getElementById("balance").innerHTML);

  // Validate withdrawal amount
  if (isNaN(inputAmount) || inputAmount <= 0) {
    alert("Please enter a valid withdrawal amount (positive number).");
    return;
  }

  if (inputAmount > balance) {
    alert(
      `Insufficient funds. Your current balance is $${balance.toFixed(
        2
      )}. Please enter an amount less than or equal to your current balance.`
    );
    return;
  }

  let totalBalance = balance - inputAmount;
  document.getElementById("balance").innerHTML = totalBalance.toFixed(2);
  document.getElementById("withdrawalInput").value = ""; // Clear the input field
}
// ${currentbalance}
