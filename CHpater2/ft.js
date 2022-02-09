/*    JavaScript 6th Edition
 *    Chapter 2
 *    Chapter case

 *    Fan Trick Fine Art Photography
 *    Variables and functions
 *    Author: Alex Wolf
 *    Date:   2-2-22

 *    Filename: ft.js
 */

// calculate all costs based on staff and adds to total cost
function calcstaff() {
}


        // sets all form field values to default
var photographerCost = 0;
var totalCost = 0;
var memoryBook = false;
var reproductionRights = false;



function calcstaff() {
var num = document.getElementById('photognum');
var num = document.getElementById('photoghrs');
total -= photographerCost;
photographerCost = num.value * 100 * hrs.value;
totalCost += photographerCost;
document.getElementById('estimate').innerHtML = '$' +
totalCost;
}




funtction resetForm(){
		document.getElementById('photognum').value = 1;
		document.getElementById('photoghrs').value = 1;
		document.getElementById('membook').checked = memoryBook;
		document.getElementById('reprodright').checked = reproductionRights;
		document.getElementById('distance').value = 0;
calcstaff();
createEventListner();
}

funtction createEventListeners() {
document.getElementById('photognum').
addEventListener('change', calcStaff, false);
document.getElementById('photoghrs').
addEventListener('change', calcStaff, false);



}
