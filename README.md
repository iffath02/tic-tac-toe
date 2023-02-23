Game link: https://iffath02.github.io/tic-tac-toe/

### TECHNOLOGIES USED
- HTML
- CSS
- JavaScript

### Project Requirements

Your app must:

* **Render a game in the browser** :white_check_mark:
* **Switch turns** between more than one player (2 player playing on a single computer) :white_check_mark:
* **Design logic for winning** & **visually display which player won** :white_check_mark:
* **Design logic for a draw game** & **visually display when there is a draw** :white_check_mark:
* **Include separate HTML / CSS / JavaScript files** :white_check_mark:
* Stick with **KISS (Keep It Simple Stupid)** principles :white_check_mark:
* Use **Javascript** for **DOM manipulation** :white_check_mark:
* **Deploy your game online**, where the rest of the world can access it :white_check_mark:
* Use **semantic markup** for HTML and CSS (adhere to best practices :white_check_mark:


### INITIAL THOUGHT PROCESS
- Create a game with two game modes - one-player & two-player
- One player would be player vs computer
- Two player would be between two players
- Ask user to enter name and use this to display turns
- Have a scorecard
- Have three buttons - Play, Play Again and Quit
- Play button starts the game
- Play Again retains scores
- Quit resets the entire state and returns to main screen

### FINAL MODEL
- Create a game with two game modes - one-player & two-player 
- One player would be player vs computer
- Two player would be between two players
- Ask user to enter name and use this to display turns 
- Have a scorecard :white_check_mark:
- Have three buttons - Play, Play Again and Quit :white_check_mark:
- Play button starts the game :white_check_mark:
- Play Again retains scores :white_check_mark:
- Quit resets the entire state and returns to main screen :white_check_mark:

### PSEUDOCODE

### on_page_load
- Disabled tic-tac-toe grid
- Play Button
- Click on play button to start game

### on_game_begin
- Enable click on grid
- Scorecard appears
- Player turn displayed

### if_game_won or draw
- Update scorecard
- Disable tic-tac-toe grid
- Play again and Quit buttons appear

### if_play_again
- Scores retained
- Enable click on grid
- Player turn displayed

### if_quit
- Scores reset
- Disable tic-tac-toe grid
- Play button appear 