var player = 1;

function clickPos(pos){

if (player ===1){
	document.getElementById(pos).innerHTML = "X";
	document.getElementById(pos).removeAttribute('onClick');
	 //console.log((pos) + " X");
	player -= 1;

	}else {
	document.getElementById(pos).innerHTML = "O";
  	document.getElementById(pos).removeAttribute('onClick');
 	//console.log((pos) + " O");
	player += 1;
	}
 checkForWinner()
}

function checkForWinner(){
	
	var xArray = []; // an array for X tiles
	var oArray = [];// an array for O tiles
	var allTiles = document.getElementsByClassName("content");
	console.log(allTiles);

		for (var i = 0; i < 9; i++) {
			if (allTiles[i].innerHTML === "X") // if allTiles[i].innerHTML === 'X'
				xArray.push(allTiles[i].id.slice(3,4))// 	push the allTiles[i].id.slice(3,4) into X array
			else if (allTiles[i].innerHTML === "O")// else if innerhtml = 'O'
				oArray.push(allTiles[i].id.slice(3,4))// 	push the allTiles[i].id.slice(3,4) into O array
		}

checkXandO(xArray, oArray);//send our two arrays to a function that checks the arrays vs the master win array

}

function checkXandO (xArray, oArray){
console.log(xArray, oArray);
		var winner = false;
		var win = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

				for (var i = 0; i < win.length; i++) {//for loop over the win array, grab each index ie: index 0 : 1,2,3
				var winArr = win[i];
		  			if ( xArray.indexOf(winArr[0].toString()) != -1 && xArray.indexOf(winArr[1].toString()) != -1 && xArray.indexOf(winArr[2].toString()) != -1 ) {
					winner = true;
					alert('winner X found');

					}else if ( oArray.indexOf(winArr[0].toString()) != -1 && oArray.indexOf(winArr[1].toString()) != -1 && oArray.indexOf(winArr[2].toString()) != -1){
					winner = true;
					alert('winner O found');

					// else if (xArray.length + oArray.length == 9 && !winner) {
					// else  alert('tie')}
		}

}
}

// function name (placeholder){
// 			var x = document.getElementById("p1") //.placeholder;
// 				for (x == true ){
// 				document.getElementById("p1") = 'x' +' (X)'
// 				}
// 			var o = document.getElementById("p2") //.placeholder;
// 				for (o == true ){
// 				document.getElementById("p1") = 'o' +' (O)'
// }


