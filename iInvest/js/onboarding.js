// import * as fs from 'fs';

function saveTextAsFile()
{
    var textToSave = document.getElementById("age").value;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = "savedText.txt";

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();
}

function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}

function saveProfileData() {
  //getting stored information

  var ageToSave = document.getElementById("age").value;
  window.sessionStorage.setItem("userAge", ageToSave);

  var higherEd = document.getElementById("higherEd").checked;
  var largerPurchases = document.getElementById("largerPurchases").checked;
  var extraMoney = document.getElementById("extraMoney").checked;
  if(higherEd) {
    window.sessionStorage.setItem("userGoal", 0);
  } else if (largerPurchases) {
    window.sessionStorage.setItem("userGoal", 1);
  } else {
    window.sessionStorage.setItem("userGoal", 2);
  }


  var coinRiskFactor = document.getElementById("coinRiskFactor").value;
  window.sessionStorage.setItem("userRiskFactor", coinRiskFactor);

  var interestedSectors = [document.getElementById("techInterested").checked, document.getElementById("financeInterested").checked, document.getElementById("healthInterested").checked, document.getElementById("consumerInterested").checked, document.getElementById("bondsInterested").checked, document.getElementById("intlInterested").checked];
  var notInterestedSectors = [document.getElementById("techNInterested").checked, document.getElementById("financeNInterested").checked, document.getElementById("healthNInterested").checked, document.getElementById("consumerNInterested").checked, document.getElementById("bondsNInterested").checked, document.getElementById("intlNInterested").checked];
  window.sessionStorage.setItem("interestedSectors", interestedSectors);
  window.sessionStorage.setItem("notInterestedSectors", notInterestedSectors);

  var spendingLimit = document.getElementById("stockPriceLimit").value;
  window.sessionStorage.setItem("spendingLimit", spendingLimit);


  // const fs = require('fs');
  //
  // // Data which will write in a file.
  // let data = "Learning how to write in a file."
  //
  // // Write data in 'Output.txt' .
  // fs.writeFile('Output.txt', data, (err) => {
  //
  //     // In case of a error throw err.
  //     if (err) throw err;
  // })

}

function loadFileAsText()
{
    var fileToLoad = document.getElementById("fileToLoad").files[0];

    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent)
    {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("inputTextToSave").value = textFromFileLoaded;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}
