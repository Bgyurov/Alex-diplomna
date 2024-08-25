# CarAvenue
Car sales made for educational purpose, created with React as Front-End,as Back-End SoftUni Practice Server.

<p align="center">
  <img style="text-align: center" src="carAvenue vite/client/public/screen2.png" width="550" title="project-image">
</p>
 
## General information
* The main purpose of the app is to view/add cars for sale.
* Guests are able to see Home Page, All Products and Product Details , Search and Authentication panels.
* Logged in users have access to Public Ad, Profile information, as well they have the ability to Edit/Delete their own products.
* Registered users who are not the owner of the ad they are viewing can favourite it and view the favourites ads in their profile
## Technologies 
* Client
    * React: 18.2.0
    * Material UI: 5.14.18
* Server
  * Vite: 4.4.5
  * SoftUni practice server
 
<p align="center">
  <img style="text-align: center" src="carAvenue vite/client/public/screen1.png" width="550" title="project-image">
</p>

## Setup
To run this project, in the project directory, you should run:

```
$ cd '.\carAvenue vite\'
$ cd .\client\
$ npm install
$ npm run dev
```
Which opens the app at http://localhost:5173/ in your browser.
However it will not work until you don't start the  server.
To start the server you have to be in the project directory and do the following steps:

```
$ cd '.\carAvenue vite\'
$ node .\server.js
```

And the server will start listening on port 3030.
