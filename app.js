const btnEl = document.getElementById("calculate");
const amountEl = document.getElementById("amount");
const percentageEl = document.getElementById("percentage");
const totalEl = document.getElementById("total");

function calculateTotal() {
  const amountValue = amountEl.value;
  const percentageValue = percentageEl.value;

  const totalValue = amountValue * (1 + percentageValue / 100);

  totalEl.innerText = totalValue.toFixed(2);
}
btnEl.addEventListener("click", calculateTotal);
