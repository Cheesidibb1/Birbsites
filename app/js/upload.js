// Get the drag area element
// JavaScript
const dragArea = document.getElementById('drag-area');
const fileInput = document.getElementById('file-input');
const uploadButton = document.getElementById('upload-button');
const chooseFileButton = document.getElementById('choose-file-button');

// Add event listeners for drag and drop
dragArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  dragArea.classList.add('dragging');
});

dragArea.addEventListener('dragleave', () => {
  dragArea.classList.remove('dragging');
});

dragArea.addEventListener('drop', (e) => {
  e.preventDefault();
  const files = e.dataTransfer.files;
  handleFiles(files);
});

// Add event listener for file input
fileInput.addEventListener('change', (e) => {
  const files = e.target.files;
  handleFiles(files);
});

// Add event listener for upload button
uploadButton.addEventListener('click', () => {
  const files = fileInput.files;
  uploadFiles(files);
});

// Add event listener for choose file button
chooseFileButton.addEventListener('click', () => {
  fileInput.click();
});

// Function to handle files
function handleFiles(files) {
  // Do something with the files
  console.log(files);
}

// Function to upload files
function uploadFiles(files) {
  // Upload the files to a server
  const serverUrl = 'https://your-filezilla-server.com/api';
  const username = 'your-username';
  const password = 'your-password';

  const xhr = new XMLHttpRequest();
  xhr.open('PUT', `${serverUrl}/upload`, true);
  xhr.setRequestHeader('Authorization', `Basic ${btoa(`${username}:${password}`)}`);
  xhr.setRequestHeader('Content-Type', 'application/octet-stream');
  xhr.send(files[0]);

  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log('File uploaded successfully!');
    } else {
      console.error('Error uploading file:', xhr.statusText);
    }
  };
}