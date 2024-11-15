document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var formData = new FormData(this);
  fetch('login.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      document.getElementById('loginMessage').innerHTML = 'Logged in successfully!';
    } else {
      document.getElementById('loginMessage').innerHTML = 'Invalid credentials';
    }
  })
  .catch(error => console.error('Error:', error));
});