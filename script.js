const salaryInput = document.querySelector("#salary");
const money = new Intl.NumberFormat("th-TH", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

function updateResults() {
  const salary = Math.max(0, Number(salaryInput.value) || 0);
  document.querySelector("#needs").textContent =
    `${money.format(salary * 0.5)} บาท`;
  document.querySelector("#wants").textContent =
    `${money.format(salary * 0.3)} บาท`;
  document.querySelector("#savings").textContent =
    `${money.format(salary * 0.2)} บาท`;
  document.querySelector("#summary").textContent =
    `รวมทั้งหมด ${money.format(salary)} บาท`;
}

salaryInput.addEventListener("input", updateResults);
updateResults();
