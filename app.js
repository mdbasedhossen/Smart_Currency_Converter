/* ===========================
   CURRENCIES
=========================== */
const currencies = [
  "USD","EUR","GBP","BDT","INR","JPY","CAD","AUD","CNY","SAR"
];

const amount = document.getElementById("amount");
const from = document.getElementById("from");
const to = document.getElementById("to");
const result = document.getElementById("result");
const rateInfo = document.getElementById("rateInfo");
const swap = document.getElementById("swap");
const box = document.querySelector(".result-box");

/* Populate dropdowns */
currencies.forEach(c => {
  from.innerHTML += `<option value="${c}">${c}</option>`;
  to.innerHTML += `<option value="${c}">${c}</option>`;
});

from.value = "USD";
to.value = "BDT";

/* ===========================
   LIVE DATE & TIME
=========================== */
function updateDateTime() {
  const now = new Date();
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  document.getElementById("day").innerText = days[now.getDay()];
  document.getElementById("date").innerText = now.toLocaleDateString();
  document.getElementById("time").innerText = now.toLocaleTimeString();
}
setInterval(updateDateTime, 1000);
updateDateTime();

/* ===========================
   EXCHANGE RATE (NO KEY)
=========================== */
async function getRate(fromCur, toCur) {
  const res = await fetch(`https://open.er-api.com/v6/latest/${fromCur}`);
  const data = await res.json();
  return data.rates[toCur];
}

/* ===========================
   CONVERT
=========================== */
async function convert() {
  result.innerText = "…";
  try {
    const rate = await getRate(from.value, to.value);
    const converted = (amount.value * rate).toFixed(4);

    result.innerText = converted;
    rateInfo.innerText = `1 ${from.value} = ${rate} ${to.value}`;

    box.classList.remove("flash");
    void box.offsetWidth;
    box.classList.add("flash");

  } catch {
    result.innerText = "API Error";
    rateInfo.innerText = "";
  }
}

/* EVENTS */
swap.onclick = () => {
  [from.value, to.value] = [to.value, from.value];
  convert();
};

amount.oninput = convert;
from.onchange = convert;
to.onchange = convert;

convert();
