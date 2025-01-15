

// This is a JavaScript implementation of the Game of Life - 
// https://en.wikipedia.org/wiki/Conway's_Game_of_Life

// For the demo, please go to http://shreyas.io/demos/game_of_life/

// Define a starting configuration, like the one below:
// var startingGrid = [
//   ['.', '.', '.', '.', '.', '.'],
//   ['.', '.', '.', '.', '.', '.'],
//   ['.', '.', 'x', 'x', 'x', '.'],
//   ['.', '.', '.', '.', '.', '.'],
//   ['.', '.', '.', '.', '.', '.'],
//   ['.', '.', '.', '.', '.', '.']
// ];

// Initiate the grid or the 'world' - 
// var world = Controller.populateWorld(startingGrid);

// To step through each iteration :
// world = Controller.updateWorld(world);


(function(){

  var Controller = {
    populateWorld: function (startingGrid) {
      var initialWorld = [];
      // true is alive
      var symbolStatusMap = {
        'x': true,
        '.': false
      };

      for (var x = 0; x < startingGrid.length; x++) {
        for (var y = 0; y < startingGrid[x].length; y++) {
          if (!initialWorld[x]) {
            initialWorld[x] = [];
          }
          initialWorld[x][y] = new Cell(new Position(x, y), symbolStatusMap[startingGrid[x][y]]);
        }
      };
      return initialWorld;
    },
    updateWorld: function (world) {
      for (var rowIndex = 0; rowIndex < world.length; rowIndex++) {
        for (var cellIndex = 0; cellIndex < world[rowIndex].length; cellIndex++) {
          world[rowIndex][cellIndex].was_alive = world[rowIndex][cellIndex].alive;
          var aliveNeighboursCount = world[rowIndex][cellIndex].aliveNeighboursCount(world);
          
          // Cell becomes/stays alive if too few or too many alive neighbors
          if ((aliveNeighboursCount < 2) || (aliveNeighboursCount > 3)) {
            world[rowIndex][cellIndex].alive = false;
          }
          // Dead cell comes to life amongst 3 alive neighbours
          else if (!world[rowIndex][cellIndex].alive && aliveNeighboursCount === 3) {
            world[rowIndex][cellIndex].alive = true;
          }
         
        };
      };
      for (rowIndex = 0; rowIndex < world.length; rowIndex++) {
        for (cellIndex = 0; cellIndex < world[rowIndex].length; cellIndex++) {
          world[rowIndex][cellIndex].was_alive = world[rowIndex][cellIndex].alive;
        }
      }
      return world;
    }
  }

  // All the cells have to be updated simultaneously. So, at t1, if cell no. 1
  // has it's 'alive' status changed (status to be represented in t2),
  // we store the cell 1's status at t1 in the was_alive property,
  // which allows us to simulate a 'concurrent' process.
  function Cell (position, alive) {
    this.position = position;
    this.alive = alive && true;
    this.was_alive = this.alive;
    console.log(this.alive);
  }

  Cell.prototype.aliveNeighboursCount = function(world) {
    var neighbors = this.position.neighbors(world.length, world[0].length);
    var count = 0;
    var position;
    for (var i = 0; i < neighbors.length; i++) {
      position = neighbors[i];
      if (world[position.x][position.y].was_alive) {
        count += 1;
      }
    };
    return count;
  }

  function Position(x, y) {
    this.x = x;
    this.y = y;
  }

  // The grid system used here is Cartesian.
  Position.prototype.neighbors = function(rowUpperBound, colUpperBound) {
    var x = this.x;
    var y = this.y;
    var neighborMap = [
      [x + 1, y],
      [x, y + 1],
      [x + 1, y + 1],
      [x - 1, y + 1],
      [x - 1, y],
      [x, y - 1,],
      [x - 1, y - 1],
      [x + 1, y - 1]
    ];
    var neighbouringPositions = [];

    var withinBounds = function(x, y) {
      return (x >= 0) && (y >= 0) && (x < rowUpperBound) && (y < colUpperBound);
    }
    for (var i = 0; i < neighborMap.length; i++) {
      if (withinBounds(neighborMap[i][0], neighborMap[i][1])){
        neighbouringPositions.push(new Position(neighborMap[i][0], neighborMap[i][1]));
      }
    };
    return neighbouringPositions;
  }

  window.Controller = Controller;

  // Support for unsupported browsers.
  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (fn, scope) {
      'use strict';
      var i, len;
      for (i = 0, len = this.length; i < len; ++i) {
        if (i in this) {
          fn.call(scope, this[i], i, this);
        }
      }
    };
  }
}).call(this);
