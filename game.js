const style = document.createElement('style');
style.innerHTML = `
 .no-results img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    /* Removed the solid black outline */
    padding: 10px; /* Add some padding inside the box */
     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add a shadow to the box */
    -moz-box-shadow: 0 0 10px #777777;
  -webkit-box-shadow: 0 0 10px #777777;
  box-shadow: inset 0 0 10px #777777;
  -moz-box-align: center;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  }
`;
document.head.appendChild(style);

// Assuming you have a function to show the result not found image
function showResultNotFound() {
  const img = document.createElement('img');
  img.src = '/image-robert-added/res.webp';
  img.className = 'no-results';
  document.body.appendChild(img);
}
