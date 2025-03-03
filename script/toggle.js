
// Show nothing by default
handleToggle("addmoney","none");
handleToggle("cashout","none");
handleToggle("transection-history", "none");

document.getElementById("add-money-box").addEventListener("click", function () {
  handleToggle("addmoney", "block");
  handleToggle("cashout", "none");
  handleToggle("transection-history", "none");
  // document.getElementById("addmoney").style.display = "block";
});

document.getElementById("cashout-box").addEventListener("click", function () {
  handleToggle("addmoney", "none");
  handleToggle("cashout", "block");
  handleToggle("transection-history", "none");
});

function handleToggle(id, status){
  document.getElementById(id).style.display = status;
}

