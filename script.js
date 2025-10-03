// Function to mask the email
function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  if (username.length <= 2) {
    return username + domain; // Nothing to mask if too short
  }

  const masked =
    username[0] + "*".repeat(username.length - 2) + username[username.length - 1];

  return masked + domain;
}

// Handle button click
document.getElementById("maskBtn").addEventListener("click", function () {
  const emailInput = document.getElementById("emailInput").value.trim();
  const resultBox = document.getElementById("resultBox");

  if (emailInput === "" || !emailInput.includes("@")) {
    resultBox.innerHTML = `<p class="masked-email">⚠️ Please enter a valid email address.</p>`;
    return;
  }

  const maskedEmail = maskEmail(emailInput);
  resultBox.innerHTML = `<p class="masked-email">${maskedEmail}</p>`;
  
  console.log(maskedEmail); // For testing and console output
});
