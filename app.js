
var player = 1;

function clickPos(pos){

if (player ===1){
	document.getElementById(pos).innerHTML = "X";
	document.getElementById(pos).removeAttribute('onClick');
	
 	console.log((pos) + " X");

	player -= 1;

	}else {
	document.getElementById(pos).innerHTML = "O";
  	document.getElementById(pos).removeAttribute('onClick');

 	console.log((pos) + " O");

	player += 1;
	}
checkForWinner()
}

function checkForWinner(){
var win = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
var allTiles = document.getElementsByClassName("content")
console.log(allTiles);
for (var i = 0; i < win.length; i++) {
	var posToCheck = win[i];
	for (var i = 0; i < posToCheck.length; i++) {
		console.log(allTiles[posToCheck[i]]);
	};
	// check the tiles at the positions from the current wins index
}; 
}


// for.each win[i] === innerHTML="X"

// check allTiles for a win;
// if this.innerHTML= "X" is in win[0][1,2,3] in the win[i.j] & we need positions we the winning positions;
// else if  this.innerHTML="O"  we have a winner;
// else && if allTiles[]=9 then its a tie.

// grab all tiles using a selector
// loop over our win array, checking the pos at the contents of the array ex 1,2,3
// win[0] js split function to give us 1,2,3 
// check innerHTML of tiles at those three positions
// if they are all the same there is a winner



// loop over array 
