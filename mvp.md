
what does it look like as soon as you log on to the site?

+ page loads a gameboard 3 * 3 tiles - responsive design
+ board loads "blank canvas"
+ centered, responsive, mobile, etc..

.: document consists of 
- body 
- game
- board
- square
	:sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9
- Player-text / input "name"

				|			|			
				|			|			
				|			|			
				|			|			
				|			|			
	-------------------------------------
				|			|						
				|			|			
				|			|			
				|			|			
				|			|			
	-------------------------------------
				|			|			
				|			|			
				|			|			
				|			|			
				|			|			
'Required:'
	PLAYER 1 (X)		 	 PLAYER 2 (O)    
	  "Name"				    "Name"

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
'Intermediate:'
	PLAYER 1 (X)	TIES 	 PLAYER 2 (O)    
	  "Name"				    "Name"
		0			 1			2


-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
'Advanced:'
	PLAYER (X)		TIES 	 COMPUTER(O)	"1Player"||"2Player" 
										    "LEVEL 1"||"LEVEL 2"


Player 1 selects a tile to mark it X
Once seclected it can't be selected again.

		
				
  X	| O	| X				
 ---|---|---		
  X	| O	| X			
 ---|---|---		
  O	| X	| O			
		

  1	| 2	| 3				
 ---|---|---		
  4	| 5	| 6			
 ---|---|---		
  7	| 8	| 9	

win=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
then maybe If Statement


It is the end of Monday, even though it is Midday Tuesday:
CSS
Need solution for 1P||2P - but don't waste time - nice to have.
Need to find a way to wrap everthing up as one, center it, and
make it so eveything doesn't change/break when scrolled.
Everything basically done.

JS
Function loads "X" - "O" - "X" and so on.
"disable" not working.
"X's" & "O's" - are not loading in the board.

HTML
Can receive a name, but doesn't have any functionality.
Recieve two names start game


Timeline:
END OF MONDAY FINISH TIMELINE PLANNING.

### Necessary features
1. An interactive board which renders on page load. 
End Tuesday

2. A way for players to set their name. 
End Tuesday

document.getElementById("p1").placeholder = "Type name here..";

var x = document.getElementById("p1") //.placeholder;
	if (x == true ){
	document.getElementById("p1") = 'x' +' (X)'

var o = document.getElementById("p2") //.placeholder;
	if (o == true ){
	document.getElementById("p1") = 'o' +' (O)'




}

3. A way for players to mark an empty space on their turn. Their turns must alternate. Ex: Player one places an 'x' and then player two places an 'o', followed by player one placing an 'x', etc.


function Start()

var player = 1 
function clickSquare()
	document.getElement.... make it "X" & disable it.

var player = 2
	document.getElement.... make it "O" & disable it.


4. A player can't play on a square that has already been played.
End Wednesday

adding this for ghpages

something for git 


### Intermediate features

5. The game should end when there is a winner, or if the game is a tie.

win = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
else = "draw/tie"

6. The game should report the end state.
gameArray = 9, the game is finished.

7. A button on `game over` to **reset** the game back to initial state.
Add reset button - I think that we will just go for clickEvent anywhere on the document as a "reset
"
**** RESET BUTTON = onclick body ...." if possible"

8. A way to keep track of Player 1 vs. Player 2 wins.
Scoreboard


Additionally you should use the CSS skills that you've gained to ensure a reasonable amount of styling to keep your project presentable.

###  Advanced features

You can go above and beyond *should you have the time*.  

1. An option to play vs. a computer with AI
  - Level 1: Random empty space is good enough
  - Level 2: Computer chooses a space which immediately blocks a player win.

  * **Wireframe** Make a drawing of what your app will look like on each page of your application (what does it look like as soon as you log on to the site? What does it look like once a user logs in, etc.).

* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. 

* **Use your Development Tools** (console.log, inspector, alert statements, etc) to debug and solve problems

* Work through the lessons in class for help and inspiration! Think about adding relevant code to your application each day - you are given 7 days so that you can work on it in small chunks, COMMIT OFTEN. We will be looking at your commit dates and comments are part of your scoring.

* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.

* **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.

* **Don’t be afraid to write code that you know you will have to remove later.** Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.

## Project Feedback + Evaluation
​
* __Project Workflow__: Do you have a Github respository for your project (not inside your wdi-remote repo)? Did you complete the user stories, wireframes, and the README.md file as specified above? Did you use source control (Github commits) as expected for the phase of the program you’re in (detailed above)?
​
* __Technical Requirements__: Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?
​
* __Creativity__: Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user (not just a login button and an index page)?
​
* __Code Quality__: Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class?
​
* __Deployment__: Did you deploy your application to a public url?
​
* __Total__: Your instructors will give you a total score on your project between:

