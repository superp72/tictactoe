
var player = 1;
function clickPos(pos){

// if (content.innerHTML = "X" || content.innerHTML "O"){
// 			return;

// }
if (player ===1){

	
	document.getElementById(pos).innerHTML = "X";
document.getElementById(pos).removeAttribute('onClick');
	
 	console.log((pos) + " X");

player -= 1;


}	

else {
	document.getElementById(pos).innerHTML = "O";
 
 	document.getElementById(pos).removeAttribute('onClick');

 	console.log((pos) + " O");

player += 1;
}
}


// var player = 1;
// function clickPos(pos){
// 	if(player ===1){
// 	document.getElementById(pos).innerText = "X";
// 	document.getElementById(pos).disabled = true;  

//  	console.log((pos) + " X");
// player -= 1;

// else{
// 	document.getElementById(pos).innerHTML = "O";
// 	document.getElementById(pos).disabled = "disabled";
//  	console.log((pos) + " O");
// player += 1;
// }
// }
// if(player ===1){
// 	document.getElementById(pos).innerHTML = "X";
// 	// return (pos) = 

// }
// // var player = 1;
// function clickPos(pos){
// 	if(player ===1){
// 	document.getElementById(pos).innerHTML = "X";
// 	else{
// 		document.getElementById(pos).setAttribute("disabled", true);
// 	}


// document.getElementById(pos).disabled = "disabled";

//Disabled not working
// var player = 1;
// function clickPos(pos){
// 	if(player ===1){
// 	document.getElementById(pos).innerHTML = "X";


// 	}
//  	// document.getElementById(pos).disabled = "disabled";
//  	console.log((pos) + " X");
// player -= 1;
// }else{
// 	document.getElementById(pos).innerHTML = "O";
// 	document.getElementById(pos).disabled = "disabled";
//  	console.log((pos) + " O");
// player += 1;
// }
// }
// var player = 1;
// function clickPos(pos){

// 	if(player ===1){
// 	document.getElementById(pos).innerHTML = "X";
//  	document.getElementById(pos).disabled = "disabled";
// player -= 1;
// }	
// 	else{
// 	document.getElementById(pos).innerHTML = "O";
//  	document.getElementById(pos).disabled = "disabled";
// player += 1;
// }
// }
