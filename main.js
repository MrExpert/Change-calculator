// Write your JavaScript here

var purchase;
var paid;
var dollaAmount;
var dollar;
var quarter;
var dime;
var nickel;
var penny;
var change;

function calculateChange() {

     purchase = document.getElementById("purchase").value;
     paid = document.getElementById("paid").value;
    dollaAmount = (paid - purchase).toFixed(2); // 15.76
    document.getElementById("change").innerHTML = "Change is due $" + dollaAmount;

    change = (dollaAmount%1).toFixed(2); ///  0.76

    dollar = dollaAmount - change; // 15
    document.getElementById("dollar").innerHTML = " $ Dollars:   " + dollar;
// Quarters

    quarter = Math.floor((change*100/25).toFixed(2)) ;  // 2
    change = (change%0.25).toFixed(2); // 0.16 
    document.getElementById("quarter").value = "Change in Quarters: " + quarter;

// use % Modulo to return remainder after quarters 64%25 =14

// Dimes
if (change>0.10 && change<0.25 ) { /// how to keep value of if statement?
dime = Math.floor(change*100/10) ;  // 
change = (change - dime*10/100).toFixed(2); // 0.01 (if it was 16)
document.getElementById("dime").value = "Change in DIME: " + dime;    
} else {  document.getElementById("dime").value = "Change in: 0";}

//Nickels
// if (change)
nickel = Math.floor(change*100/5) ;  // 3
change = (change - nickel*5/100).toFixed(2); // 0.01 (if it was 16)
document.getElementById("nickel").value = "Change in NICKEL: " + nickel;

// Penny

penny = Math.floor(change*100/1) ;  // 1
change = (change - penny*1/100).toFixed(2); // 0
document.getElementById("penny").value = "Change in Penny: " + penny;

//     var leftAfterQuarter = rChange*100%25;
// if (leftAfterQuarter > 0.1) {
//     return  leftAfterQuarter*100/10};
// console.log(dime);
//     var qChange = (rChange%0.25).toFixed(2);

//     var smallChange = Math.round(rChange);


};

