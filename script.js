function start() {
  var txt;
  var itemtypes = prompt("Please enter the number of itemtypes you need to caculate:", "");
  if (itemtypes > 0) 
  {
    let totalcost=0;
    for (i=0; i<itemtypes; i++)
    {
       var cost = prompt("Please enter the price of the "+(i+1)+"/ "+(itemtypes)+" items:", "");
       if (cost > 0)
       {
         for (x=0; x<1; x++)
          {
            var amount = prompt("Please enter the amount of the "+(i+1)+"/ "+(itemtypes)+" chosen item:\n(<number>doublechests for doublechest amount)\n(<number>chests for chest amount)\n(<number>stacks for stack amount)", "");
            if (amount.includes("doublechest")&&(amount.includes("0")||amount.includes("1")||amount.includes("2")||amount.includes("3")||amount.includes("4")||amount.includes("5")||amount.includes("6")||amount.includes("7")||amount.includes("8")||amount.includes("9")))
            {
              amount = (amount.slice(0,amount.length-11)*3456);
            }
            else if (amount.includes("doublechests")&&(amount.includes("0")||amount.includes("1")||amount.includes("2")||amount.includes("3")||amount.includes("4")||amount.includes("5")||amount.includes("6")||amount.includes("7")||amount.includes("8")||amount.includes("9")))
            {
              amount = (amount.slice(0,amount.length-12)*3456);
            }
            else if (amount.includes("chests")&&(amount.includes("0")||amount.includes("1")||amount.includes("2")||amount.includes("3")||amount.includes("4")||amount.includes("5")||amount.includes("6")||amount.includes("7")||amount.includes("8")||amount.includes("9")))
            {
              amount = (amount.slice(0,amount.length-6)*1728);
            }
            else if (amount.includes("chest")&&(amount.includes("0")||amount.includes("1")||amount.includes("2")||amount.includes("3")||amount.includes("4")||amount.includes("5")||amount.includes("6")||amount.includes("7")||amount.includes("8")||amount.includes("9")))
            {
              amount = (amount.slice(0,amount.length-5)*1728);
            }
            else if (amount.includes("stacks")&&(amount.includes("0")||amount.includes("1")||amount.includes("2")||amount.includes("3")||amount.includes("4")||amount.includes("5")||amount.includes("6")||amount.includes("7")||amount.includes("8")||amount.includes("9")))
            {
              amount = (amount.slice(0,amount.length-6)*64);
            }
            else if (amount.includes("stack")&&(amount.includes("0")||amount.includes("1")||amount.includes("2")||amount.includes("3")||amount.includes("4")||amount.includes("5")||amount.includes("6")||amount.includes("7")||amount.includes("8")||amount.includes("9")))
            {
              amount = (amount.slice(0,amount.length-5)*64);
            }
            if (amount > 0)
            {
              totalcost += (amount*cost)
            }
            else
            {
              x--;
              alert("Please Enter a Valid number!");
            }
          }
       }
       else
       {
         i--;
         alert("Please Enter a Valid number!");
       }
    }
    alert("The total amount of money earned from selling these items would be "+(totalcost)+"$.");
  }
  else
  {
    alert("Please Enter a Valid number!");
    start();
  }
}
