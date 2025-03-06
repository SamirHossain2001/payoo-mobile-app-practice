// Show nothing by default
handleToggle("history", "none");
handleToggle("addmoney", "none");
handleToggle("cashout", "none");
handleToggle("transfer", "none");
// handleToggle("transection-history", "none");

document.getElementById("add-money-box").addEventListener("click", function () {
  handleToggle("addmoney", "block");
  handleToggle("cashout", "none");
  handleToggle("transfer", "none");
  // document.getElementById("addmoney").style.display = "block";
});

document.getElementById("cashout-box").addEventListener("click", function () {
  handleToggle("cashout", "block");
  handleToggle("addmoney", "none");
  handleToggle("transfer", "none");
  // handleToggle("transection-history", "none");
});

document.getElementById("transfer-box").addEventListener("click", function () {
  handleToggle("transfer", "block");
  handleToggle("addmoney", "none");
  handleToggle("cashout", "none");
});

function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}
