# Tic Tac Toe

This is the very first project of the General Assembly cohort.
We are tasked to make a simple website that contains a fully
operational Tic Tac Toe game.  There are also several other
objectives that I as a developer wish for the user to experience
those are as follow:

For the user, the user can create a profile to save his or her game data.

As a developer I want to present the proper game information to
guide the users through each turn of the game.

As a developer I want the game to track who wins so users find
purpose in playing.

As a developer website should be responsive so user can view on
it on all platforms.

## Wireframe

For wireframe see jpg image.

## Website design

My original intent of the website's design was to take a
minimalist approach.  The website should look clean and concise
but also offer high functionality to the user. Through using
bootstrap and modals the users have an interface to create
profiles.  Through ajax users can log in and log out as well as
change their password.  The buttons for sign in and sign out
toggle between show and hide through the use of Jquery selectors.
Though incomplete I wanted the user to have access to game data
(i.e. win perecentages, game history, and number of games)
through a drop down menu within the game board.  This was not
implemented due to insufficient time and issues with some ajax
functions.  The website was also supposed to have a responsive
design.  This was not done due to again insuffcient time and
indecisiveness to select between using bootstrap and classic
media queries.

## Game Engine

The game engine is created through the use of javascript as the
core logic of the game and jquery as a means to interact with
game board.  The game is able to detect winning games and games
that have tied.  Originally the game engine could keep track of
how many times each player has won, however I was heavily
debating on whether to have this function internal or using data
over Ajax. Development of this functionality was never sought
through.

## User Experience

The user has a prompt at the bottom of the screen which
communicates to the code running in the background.  The user
will be able to know who's turn it is.  This is accomplished
through again jquery selectors and the text function to change
the html based on the condition.  The user is also able to enjoy
an interface with limited amount of buttons.  To reset the board
one only has to click on the board once a round is over.
