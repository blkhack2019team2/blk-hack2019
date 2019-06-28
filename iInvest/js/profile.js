function loadProfileData() {
  document.getElementById("ageCard").innerHTML = sessionStorage.getItem("userAge");
  document.getElementById("riskScore").innerHTML = sessionStorage.getItem("userRiskFactor") + "/100";
  var interestedSectors = sessionStorage.getItem("interestedSectors");
  console.log(interestedSectors);
  var notInterestedSectors = sessionStorage.getItem("notInterestedSectors");
  var userGoal = sessionStorage.getItem("userGoal");
  var allSectors = ["Tech", "Finance", "Health", "Consumer Goods", "Bonds", "International"];
  var goals = ["Higher Education", "Larger Purchases", "Extra Spending Money"];
  //
  var int = "";
  var notInt = "";
  for (var x = 0; x < 6; x++) {
    console.log(typeof(interestedSectors[x]))
    if (interestedSectors[x]) {
      int += allSectors[x] + ", ";
    }
    if (notInterestedSectors[x]) {
      notInt += allSectors[x] + ", ";
    }
  }
  document.getElementById("favoriteSectors").innerHTML = int;
  document.getElementById("notInterestedSectors").innerHTML = notInt;
  document.getElementById("userGoal").innerHTML = goals[userGoal];
  document.getElementById("stockPriceLimit").innerHTML = sessionStorage.getItem("spendingLimit");

}
