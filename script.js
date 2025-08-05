const modal = document.getElementById('resultModal');

function generateNumber() {

  const min = Math.ceil(document.querySelector('.input-min').value);
  const max = Math.floor(document.querySelector('.input-max').value);


  if (isNaN(min) || isNaN(max) || document.querySelector('.input-min').value.trim() === '' || document.querySelector('.input-max').value.trim() === '') {
    alert("Por favor, preencha os dois campos com números.");
    return;
  }


  if (min >= max) {
    alert("O primeiro número deve ser MENOR que o segundo.");
    return;
  }

  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  const resultNumber = document.getElementById('resultNumber');

  resultNumber.textContent = result;
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}


window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
}