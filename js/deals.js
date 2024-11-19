// Hide the iframe initially
document.getElementById('iframeDeal').style.display = 'none';
const random = Math.random()*10000;
console.log(random)
// Show the iframe after random seconds
setTimeout(function() {
  document.getElementById('iframeDeal').style.display = 'block';
}, random);
