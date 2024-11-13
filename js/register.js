document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var formData = new FormData(this);
  fetch('register.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      document.getElementById('registerMessage').innerHTML = 'Account created successfully!';
    } else {
      document.getElementById('registerMessage').innerHTML = data.message;
    }
  })
  .catch(error => console.error('Error:', error));
});