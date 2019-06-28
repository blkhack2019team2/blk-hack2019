function loadProfileData() {
  console.log(sessionStorage.getItem("userAge"));
  document.getElementById("ageCard").innerHTML = sessionStorage.getItem("userAge");
  document.getElementById("riskScore").innerHTML = sessionStorage.getItem("userRiskFactor") + "/100";
  var interestedSectors = sessionStorage.getItem("interestedSectors");
  console.log(interestedSectors);
  var notInterestedSectors = sessionStorage.getItem("notInterestedSectors");
  var userGoal = sessionStorage.getItem("userGoal");
  var allSectors = ["Tech", "Finance", "Health", "Consumer Goods", "Bonds", "International"];
  var goals = ["Higher Education", "Larger Purchases", "Extra Spending Money"];
  //

  document.getElementById("favoriteSectors").innerHTML = interestedSectors;
  document.getElementById("notInterestedSectors").innerHTML = notInterestedSectors;
  document.getElementById("userGoal").innerHTML = goals[userGoal];
  document.getElementById("stockPriceLimit").innerHTML = sessionStorage.getItem("spendingLimit");

}
