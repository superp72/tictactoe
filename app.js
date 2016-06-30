
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
					// console.log(xArray.indexOf(winArr[0].toString());
					// win[i] == xArray;
					winner = true;
					alert('winner X found');

					}else if ( oArray.indexOf(winArr[0].toString()) != -1 && oArray.indexOf(winArr[1].toString()) != -1 && oArray.indexOf(winArr[2].toString()) != -1){
					winner = true;
					alert('winner O found');
		// // 			winner = true;alert('winner O found'); 
		// // 			else if (xArray.length + oArray.length == 9 && !winner) 
		// // 			alert('draw');
					// }
		// // // 	}
		// } 
	}

}
}

// //check X array to see if it contains 1,2,3
// //1 ,2 ,3
// //if xArray.indexOf(winArr[0]) && xArray.indexOf(winArr[1]) && xArray.indexOf(winArr[2]) && 
// //if there is a match, winner = true
// //return winning array, either X or O
// //if xArray.length + oArray.length == 9  && !winner alert its a draw
// }


// console.log(win[i]); undefined

// console.log(allTiles[posToCheck[i]]);

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

 //|| oArray.indexOf(win[1]) && oArray.indexOf(win[2])) && oArray.indexOfwin[3])

// loop over array 
