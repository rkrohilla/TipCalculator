function tipcalculator()
{
  var bill_ammount = document.getElementById("billamt").value;
  var service_quality = document.getElementById("serviceQual").value;
  var noOfPeople = document.getElementById("peopleamt").value;
  if(bill_ammount==="" || service_quality==0 || noOfPeople==="")
  {
    alert("Enter values");
    return;
  } 
  var tip = (bill_ammount * service_quality)/noOfPeople;
  document.getElementById("tip").innerHTML = tip;
}

document.getElementById("calculate").onclick = function()
{
tipcalculator();  
};
