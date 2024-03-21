const button = document.querySelector("#fetch");

const fetchDolar = async () => {
  const dolar = await fetch(
    "https://economia.awesomeapi.com.br/json/last/USD-BRL"
  );
  const dolarData = await dolar.json();
  console.log(dolarData);
};

const fetchEuro = async () => {};

const fetchBitcoin = async () => {};

button.addEventListener("click", async () => {
  await fetchDolar();
});
