// alert("hiiiiiiiiiiii");

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amountStr = document.getElementById("amount").value;
    let amount = parseFloat(amountStr);
    if (isNaN(amount)) {
      alert("Enter amount");
    } else {
      const mainBalanceStr = document.getElementById("main-balance").innerText;
      const mainBalance = parseFloat(mainBalanceStr);

      const pin = document.getElementById("pin").value;
      if (pin === "1234") {
        // console.log('addd');
        const sum = mainBalance + amount;
        document.getElementById("main-balance").innerText = sum;
      } else {
        alert("Wrong pin");
      }

      document.getElementById("amount").value = "";
    }
  });

document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "index.html";
});
