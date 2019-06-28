function loadStockRecommendations() {
  console.log("hi");

}

var max_index = 199;


    function generatePortfolio(data, risk_metric, price_metric, sectors) {
      var options = [];
      for (i = 0; i < max_index; i++) {
        var change = parseFloat(data[i]['Change'].substring(0,data[i]['Change'].length - 1));
        var price = parseFloat(data[i]['CP'].substring(1, data[i]['CP'].length));
        if (price < price_metric && change < risk_metric && sectors.includes(data[i]['Sector'])) {
          options.push([data[i]['Symb'], data[i]['CP'], data[i]['Change'], data[i]['Sector']]);
        }
      }
      console.log(options);
      return options;
    }


    d3.csv("data.csv").then(function(data) {
      //ask the user for the max closing price
      var sector_str = sessionStorage.getItem("interestedSectors").split(",");
      GenerateTable(generatePortfolio(data, .5, 40, sector_str));
    });


    function GenerateTable(options) {
        //Create a HTML Table element.
        var customers = options;
        customers.unshift(['Ticker', 'Current Price', 'One-Day Change', 'Sector']);
        var table = document.createElement("TABLE");
        table.border = "1";

        //Get the count of columns.
        var columnCount = customers[0].length;

        //Add the header row.
        var row = table.insertRow(-1);
        for (var i = 0; i < columnCount; i++) {
            var headerCell = document.createElement("TH");
            headerCell.innerHTML = customers[0][i];
            row.appendChild(headerCell);
        }

        //Add the data rows.
        for (var i = 1; i < customers.length; i++) {
            row = table.insertRow(-1);
            for (var j = 0; j < columnCount; j++) {
                var cell = row.insertCell(-1);
                cell.innerHTML = customers[i][j];
            }
        }

        var dvTable = document.getElementById("dvTable");
        dvTable.innerHTML = "";
        dvTable.appendChild(table);
    }
