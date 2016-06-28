var player = 1;
function clickPos(pos){
	if(player ===1){
	document.getElementById(pos).value = "X";
	
 	document.getElementById(pos).disabled = "disabled";
 	console.log((pos) + " X");
player -= 1;
}else{
	document.getElementById(pos).value = "O";
	document.getElementById(pos).disabled = "disabled";
 	console.log((pos) + " O");
player += 1;
}
}