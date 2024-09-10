// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Here you can perform validation and authentication logic
    // For simplicity, let's just check if both fields are filled
    if (username && password) {
      // Simulating successful login
      alert('Login successful! Welcome, ' + username + '!');
      // You can redirect user to another page or perform other actions here
    } else {
      // Display error message
      var errorMessage = document.getElementById('errorMessage');
      errorMessage.textContent = 'Please fill in both username and password fields.';
    }
  });
  