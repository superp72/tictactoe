var player = 1;

function clickPos(pos){

if (player ===1){
	document.getElementById(pos).innerHTML = "X";
	document.getElementById(pos).removeAttribute('onClick');
	 /*console.log((pos) + " X"); */
	player -= 1;

	}else {
	document.getElementById(pos).innerHTML = "O";
  	document.getElementById(pos).removeAttribute('onClick');
 	/* console.log((pos) + " O"); */
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
			if (allTiles[i].innerHTML === "X"){ // if allTiles[i].innerHTML === 'X'
				xArray.push(allTiles[i].id.slice(3,4))// 	push the allTiles[i].id.slice(3,4) into X array
				// grab player 1 set its color to blue
				// document.getElementById('XP').style.color = blue;
				// document.getElementById('OP').style.color = black; 
				// // grab player 2 set color to black
			//vice versa for 
			}else if (allTiles[i].innerHTML === "O"){// else if innerhtml = 'O'
				oArray.push(allTiles[i].id.slice(3,4))// 	push the allTiles[i].id.slice(3,4) into O array
	// document.getElementById('XP').style.color = black;
	// document.getElementById('OP').style.color = blue; 
		}
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
		
					alert('winner X found') /* + document.getElementById('score-X') +1 */ ;
					
					}else if ( oArray.indexOf(winArr[0].toString()) != -1 && oArray.indexOf(winArr[1].toString()) != -1 && oArray.indexOf(winArr[2].toString()) != -1){
					winner = true;
				
					alert('winner O found')	/*document.getElementById('score-O') + 1*/ ;
					}else if(xArray.length + oArray.length == 9 && !winner) { 
						
					  alert('tie') /* + document.getElementById('score-Tie') + 1*/
					} 

}
}

	
function reset(){
			var player1 = document.getElementById('p1').innerHTML = "player X";
			var player2 = document.getElementById('p2').innerHTML = "player Y";
			var content = document.getElementsByClassName("content")
			for (var i = 0; i < content.length; i++){
				content.innerHTML =''
			// do the same with player 2
			// grab all tiles and loop over setting inner html = ''
	}
}

function clickName(){
	var player1 = document.getElementById('p1').value;
	
	document.getElementById('XP').innerHTML = player1 + ' (X)';
}

function clickName2(){
	
	var player2 = document.getElementById('p2').value;
	
	document.getElementById('OP').innerHTML = player2 + ' (O)';
}



