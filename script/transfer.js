// alert("dfff");
document
  .getElementById("transfer-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const accNumber = document.getElementById("acc-number").value;

    const pinStr = document.getElementById("transfer-pin").value;
    const pin = parseInt(pinStr);

    const amountStr = document.getElementById("transfer-amount").value;
    let amount = parseFloat(amountStr);
    if (isNaN(amount)) amount = 0;

    const mainBalanceStr = document.getElementById("main-balance").innerText;
    const mainBalance = parseFloat(mainBalanceStr);

    if (pin === 1234) {
      if (mainBalance - amount < 0) {
        alert("Don't have enough money");
      } else {
        const sum = mainBalance - amount;
        document.getElementById("main-balance").innerText = sum;
        alert(`Transfered $${amount} successfully.`);
        // transection history
        // const p = document.createElement("p");
        // p.innerText = `
        //    cashout ${amount} from ${accNumber} account
        // `;
        // console.log(p);
        // const container = document.getElementById("transection-container");
        // container.appendChild(p);
      }
    } else {
      alert("Wrong pin");
    }
    document.getElementById("transfer-amount").value = "";

  });
