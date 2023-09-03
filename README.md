# Fetch-Me

## Shopping as a colaborative experience!
Online shopping for groceries often feels like a lonely experience even if you are shopping for a family or a group: be it because only you have access to that cart and therefore need to decide what goes into the cart, what goes out, decide whether to buy this or that, or even risking getting the wrong item because it was something that someone else asked you to buy, etc... But what if there was an actual app out there that merged the online shopping experience with the colaborative synergy and agility you get when shopping with friends or family? Here comes in Fetch-Me...

## Description & Motivation
This Fetch-Me app is the last of four projects in the General Assembly SEI Course.  The purpose of this project was for us to apply our knowledge of the full MERN stack. This app was a solo development over the course of one week.  The app was developed using the following technologies:  

![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) 
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) |
![Mongoose](https://img.shields.io/badge/Mongoose-880000.svg?style=for-the-badge&logo=Mongoose&logoColor=white)
![Chakra](https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)


### Try it out!
Since this is a free Web-based app, anyone can use it without any requirements. Just click this [link](https://fetch-me-bcf56e1c2a03.herokuapp.com/) to play the game!  

## How to Navigate
The app is currently running only it's mobile version, so in order to better visualize it, it is recommended for the user to run it on a viewport of 428x926 or smaller.

Once Signed-up and Logged in, the user is able to navigate the diferent pages by means of the navbar at the bottom of the screen.  The user can then add/remove other users from their friend list to favorite them or engage straight away in shopping by creating a new order and inviting others to colaborate.  When shopping, items that are added to the cart can be seen by toggling screens and then their quantities can be adjusted. To remove an item, you jsut need to reduce its quantity to zero.  When you are ready, proceed to your order review end, finalaly, to checkout. (currently the payment feature has not yet been implemented)

## Brief

The SEI Project 4 Include the following Technical requirements:

☐ A working full-stack, single-page application hosted on Heroku.
☐ Incorporate the technologies of the MERN-stack:
MongoDB/Mongoose
Express
React
Node
☐ Have a well-styled interactive front-end.
☐ Communicates with the Express backend via AJAX.
☐ Implement token-based authentication. Including the ability of a user to sign-up, log in & log out.
☐ Implement authorization by restricting CUD data functionality to authenticated users. Also, navigation should respond to the login status of the user.
☐ Have a well-scoped feature-set. Full-CRUD data operations are not required if one or more other features are included, for example:
- Consume data from a third-party API.
- Implement additional functionality if the user is an admin.
- Implementation of a highly dynamic UI or data visualization.
- Other, instructor approved, complexity/features.

## About

### Planning

The game was first conceived within the Wireframe displayed below and it's display and functionalities were gradually improved as the development progressed.  The steps were organized acording to a Pseudocode (see below) and the development stages were checked and added/removed using Evernote.

| Main Screen | ![Main Screen](https://github.com/casneno/Battleships-ProjectOne/blob/main/images/startscreen_battleships.png) |
| Battle Screen | ![Battle Screen](https://github.com/casneno/Battleships-ProjectOne/blob/main/images/wireframe_battleships.png) |

### Pseudocode

Below is the initial Pseudocode from the project planning:

* Login/Signup screen with toggle button
* Lannding page with about content
* Add other user as favourites
* User creates a new order and invites colaborators to join him
* Users proceed to add items to the cart by filtering categories in item database
* Quantities are managed inside the cart
* Order Review panel
* Payment with Stripes or similar

*Creative Process and Brainstorming on Evernote*
![brainstorming on evernote](https://github.com/casneno/Battleships-ProjectOne/blob/main/images/brainstorming_battleships.png)

### Building the Code

I wanted to design an app that was scalable in funcitons and that provided the user with a easy-to-use mobile interface with minimum options at first, since the main purpose of this app is to be used on-the-go.

The first step in building the code was to setup my react file with react-create.  Then I proceeded to installing dependencies and setting up my backend. For styling I decided to go with Chakra UI due to its fast learning curve, built-in components and responsiveness. 
  For backend, the project required using no-SQL MongoDB.  I used a Mongoose to model my data.  After having setup and checking the working backend-frontend interface i then proceeded to define my models, starting with my User model.  For my Items model, since I needed two slightly diferent models, I opted to reuse my schema.

The first element to code was the sign-up and authenticetion process.  After creating the authentication page and the sign-up and login forms, I created a send-request.js file where I coded my main fetch to use as default for my CRUDing operations.  This request is responsible for making API calls and dealing with payload and token authorizations.  The sign-up process consisted of creating a user object from the form inputs, 

*Generate my HTML elemnts dynamically*
```sh
function createBoardDisplay(board, rows, columns, hud) {
    for(let row = 0; row < rows; row++) {
        const elRow = document.createElement('div');
        elRow.className = 'row';
        for(let column = 0; column < columns; column++) {
            const elColumn = document.createElement('div');
            elColumn.className = 'cell';
            if(board === playerBoard) {
                elColumn.setAttribute('id', `p${row}${column}`)
            } else {
                elColumn.setAttribute('id', `a${row}${column}`)
            }
            elRow.appendChild(elColumn);
        }
        board.appendChild(elRow);
    }
    for (let i=0; i < SHIPLIST.length; i++) {
        const ship = document.createElement('div');
        if (hud === playerHud) {
            ship.setAttribute('id', `p${SHIPLIST[i].name}`);
            ship.className = SHIPLIST[i].class;
            ship.className = 'shipIcon';
        } else {
            ship.setAttribute('id', `a${SHIPLIST[i].name}`);
            ship.className = SHIPLIST[i].class;
            ship.className = 'shipIcon';
        }
        ship.className = SHIPLIST[i].class;
        hud.appendChild(ship);
    }
}
```
Once my display and data storage mechanisms were in place I began developing the control functions, which are responsible for manipulating the data within the arrays.  Such functions include the handlePlayer and handleAi, which takes an event (human) or logic input (computer) and manipulates the data in the board and HUD arrays. Once the data was manipulated, the functions would check for a winning condition, change turns and call the render function, updating the visual display and changing turns.  If winning conditions were met, the game deters any further action from being taken, display a win message and allow the user to play again, wiping the entire data and generating a new one.

*Check if ships can be placed*
```sh
function checkPlacement(board, rowIdx, colIdx, ship, direction) {
    let length = ship.size
    if (direction === 0) {
        if (colIdx+length > columns) return false;
        for (let i=0; i<length; i++) {
            if(board[rowIdx][colIdx+i].id !== 'w') return false;
        }
    } else {
        if (rowIdx+length > rows) return false;
        for (let i=0; i<length; i++) {
            if(board[rowIdx+i][colIdx].id !== 'w') return false;
        }
    }
    return true;
}
```

*Handle the Player's Move*
```sh
function handlePlayer(evt) {
    if (!startGame) return;
    if (turn === 1) {
        const tgt = evt.target;
        //Guards
        if (tgt.className !== 'cell') return;
        if (tgt.parentElement.parentElement.id !== 'aiboard') return; 
        const colIdx = parseInt(tgt.id.split('').pop()); 
        const rowIdx = parseInt(tgt.id.split('').slice(1,3)); 
        const cellObj = {...aiBoardData[rowIdx][colIdx], hit:true}; 
        aiBoardData[rowIdx][colIdx] = cellObj; 
        if (cellObj.id !== 'w') {  
            let shipHit = aiHudData.find((ship) => ship.name === cellObj.id);
            shipHit.size--;
            if (shipHit.size === 0) {
                aiBoardData.forEach(function (rowArr, rowIdx) {
                    rowArr.forEach(function (cellObj, colIdx) {
                        if (cellObj.id === shipHit.name) { 
                            cellObj = {...aiBoardData[rowIdx][colIdx], destroyed:true}; 
                            aiBoardData[rowIdx][colIdx] = cellObj;
                        }
                    })
                })
            }
            tgt.classList.add(shipHit.name);
        }
        winner = getWinner();
        turn *= -1;
        render();
    } return;
}
```

### Challenges

The game wasn't without it's challenges.  One first challenge I faced was how to get teh grid display properly comunicating with the 2D array so that it would be responsive to any changes I made to the objects. Next, came the array update codes: both HUD displays were being updated when the 'shots' were being taken.  At the time I wasn't so familiar with the spread operator and the array cloning process, so it took me some time to figure out that I needed to make a deep copy of my array, since they both originated from the same constant and thus had the same reference. The AI behaviour wasn't much of a challenge, but more of a process of mimicking the human thought process. 
Another challenging feature was the randomPlacement function and it's guards.  I had to make a check function to make sure that the space the ship was being placed was within the grid limits and did not overlap other ships.

### Wins

The game itself was a win for myself, having been the fist game I developed in any language (apart from the tic-tac-toe).  Having commited to the decision of working with objects was another win, since it took a lot of work and learning in the begining but now the flexibility it gave the game is finally paying off.  Finally, I would say that breaking the human thought process and implementing it into the AI's logic was also a win. 

### Key Learnings

 * DEBUGGING through DevTools and console.logs.
 * How to apply the PEAR method to explain issues to others in a way that they can help me.
 * How to better make use of DOM APIs such as selectors, event listeners, elemnt creation and appending, styling and attribute manipulations in JS.
 * How to make use MDN Web DOCs, W3Schools, GeeksforGeeks, StackOverflow and other online resources when I get stuck.
 * If I were to rebuild my code, I would do it using arrow functions instead of declarations for their practicality and shorthand.

### Bugs & Known Issues

* The MVP version has no Bugs in it and is fully functional.
* The player is wrongly able to click anywhere he has already clicked in the AI Board.
* The Replay Button doesn't change it's text when there is a winner.

### Future Improvements

Here is a list of future improvements:
 * Allow for amnual ship placement, click&drag and with hover effects;
 * Include sound and visual effects. inlcude some epic music;
 * Start the game with a start screen with some game context for immersion and a Insert Player name holder;
 * Develop an option for a 2-player game, taking turns on the same PC (can't peek!)
 * Improve the background by drawing the shoreline + include sprites for the ships, giving the game a more realistic feel.
 * Implement special weapons and maybe a mid-game suffling mechanism, allowing for ships to escape their doom
