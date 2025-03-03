// alert("hiiiiiiiiiiii");

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const accNumber = document.getElementById("acc-number").value;

    const amountStr = document.getElementById("amount").value;
    let amount = parseFloat(amountStr);
    if (isNaN(amount)) {
      alert("Enter amount");
    } else {
      const mainBalanceStr = document.getElementById("main-balance").innerText;
      const mainBalance = parseFloat(mainBalanceStr);

      const selectedBnak = document.getElementById("all-bank").value;
      //console.log(selectedBnak);

      const pin = document.getElementById("pin").value;
      if (pin === "1234") {
        // console.log('addd');
        const sum = mainBalance + amount;
        document.getElementById("main-balance").innerText = sum;

        // transection history
        const container = document.getElementById("transection-container");
        // const p = document.createElement('p');
        // p.innerText = `
        //   added ${amount} from ${accNumber} account
        // `
        // console.log(p);
        // container.appendChild(p);
        const div = document.createElement("div");
        div.classList.add("bg-blue-200","p-4","border");
        div.innerHTML = `
        <h1 class="text-yellow-700">Added Money from ${selectedBnak}</h1>
        <h3>${amount}</h3>
        <p>account no: ${accNumber}</p>
        `
        container.appendChild(div);

      } else {
        alert("Wrong pin");
      }

      document.getElementById("amount").value = "";
    }
  });

document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "index.html";
});


// document.getElementById("").addEventListener("submit", function(event) {
//     let bankSelect = document.getElementById("all-bank");
//     if (bankSelect.value === "") {
//         alert("Please select a valid bank.");
//         event.preventDefault(); // Prevent form submission
//     }
// });