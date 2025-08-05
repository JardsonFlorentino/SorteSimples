 function generateNumber() {
    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)
   
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
  
   const resultContainer = document.getElementById('resultContainer');
  const resultNumber = document.getElementById('resultNumber');

  resultNumber.textContent = result;
  resultContainer.style.display = 'flex';
  }
  