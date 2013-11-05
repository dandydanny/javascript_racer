javascript_racer
================

'Racer' game implemented in JS, to accompany http://socrates.devbootcamp.com/challenges/295

JavaScript Racer 2: Back-end Challenge

Objectives
We'll now add a back-end to our JavaScript racer game using a simple Sinatra app. The game still runs in a single browser instance, i.e., two players don't play each other across different browsers, but rather on a single browser.

The flow goes like this:

Two people get on a computer and visit the application
The application prompts each player to enter their name
The players fill out the form and this creates a new game
The new game starts, and each player smashes their respective key until one of them wins
After one of them wins, the winning player and amount of time it took to win is sent to the server and the game is recorded as being "done"
The players can choose to start another game using their same initials, or restart using different initials
After a game is finished the players are given a unique URL at which they can view the results of that particular game
Objectives
Models
You should have two core models: Player and Game. A player can be in many games and a game can have multiple players. For now it's "just two," which can be hard-coded into the game creation form.

Player names should be unique. If someone chooses the game initials/name/etc. as someone else they'll be playing the same "player." This means there should be a uniqueness constraint at both the database level by using a UNIQUE INDEX and a uniqueness constraint on the Player model.

You can make a UNIQUE INDEX by adding :unique => true to your add_index call. See the add_index documentation.

It's important to enforce this at both the ActiveRecord and database level. Your database is the only thing that can truly, 100% guarantee uniqueness, but an error at the database level is both very expensive and hard for user-land to interactive with.

You should use a custom ActiveRecord validation to ensure that every game has exactly two players. This constraint is hard to model on the database level, so we leave it to ActiveRecord.

Routes
Remember, you need routes which correspond to:

Starting / creating a new game
Playing a new game
Viewing the results of an old game
Views and Flow
Implement the flow from the description above and submit your Sinatra app! If it's a GitHub repository, submit it as a gist with a link to your repository.
