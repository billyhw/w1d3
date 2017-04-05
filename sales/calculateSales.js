var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

"use strict";

function calculateSalesTax(salesData, taxRates) {

  var addTotalSalesAndTax = function(company,salesTaxRate) {

    company['totalSales'] = company.sales.reduce(function(a,b) {return a + b;});
    company['totalTax'] = company.totalSales * salesTaxRate[company.province];
    return company;

  }

  companySalesData.map(function(company) { return addTotalSalesAndTax(company, salesTaxRates); });

  var resultObj = {};

  for (var i = 0; i < companySalesData.length; i++) {
    if (!resultObj.hasOwnProperty(companySalesData[i].name)) {
      resultObj[companySalesData[i].name] = {
        totalSales: 0,
        totalTaxes: 0
      }
    }
  }

  for (var i = 0; i < companySalesData.length; i++) {
      resultObj[companySalesData[i].name].totalSales += companySalesData[i].totalSales;
      resultObj[companySalesData[i].name].totalTaxes += companySalesData[i].totalTax;
  }

  return resultObj

}

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/