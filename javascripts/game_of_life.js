// This is a JavaScript implementation of the Game of Life - 
// https://en.wikipedia.org/wiki/Conway's_Game_of_Life
// For the demo, please go to http://shreyas.io/demos/game_of_life/
'use strict';
function Cell(position, alive) {
  this.position = position;
  this.alive = alive;
}
Cell.prototype.aliveNeighboursCount = function (world) {
  var neighbours = this.position.neighbours(world.length, world[0].length);
  var count = 0;
  neighbours.map(function(position){
    if (world[position.x][position.y].alive) {
      count += 1;
    }
  });
  return count;
};
function Position(x, y) {
  this.x = x;
  this.y = y;
}
// The grid system used here is Cartesian.
Position.prototype.neighbours = function (rowUpperBound, colUpperBound) {
  var x = this.x;
  var y = this.y;
  var neighbourMap = [
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
  var withinBounds = function (x, y) {
    return x >= 0 && y >= 0 && x < rowUpperBound && y < colUpperBound;
  };
  neighbourMap.map(function(neighbour){
    if (withinBounds(neighbour[0], neighbour[1])) {
      neighbouringPositions.push(new Position(neighbour[0], neighbour[1]));
    }
  });
  return neighbouringPositions;
};
function Controller (){
}
Controller.prototype.populateWorld = function (options) {
  options.config = options.config || [];
  if (options.initialWorld.length === 0){
    for (var x = 0; x < options.rows; x++) {
      for (var y = 0; y < options.cols; y++) {
        if (!options.initialWorld[x]) {
          options.initialWorld[x] = [];
        }
        options.initialWorld[x][y] = new Cell(new Position(x, y), false);
      }
    }
  }
  options.config.map(function (xy) {
    options.initialWorld[xy[0]][xy[1]].alive = true;
  });
  return options.initialWorld;
};
Controller.prototype.updateWorld = function (world) {
  var nextGenMap = [];
  var aliveNeighboursCount;
  world.map(function (row) {
    row.map(function (cell) {
      aliveNeighboursCount = cell.aliveNeighboursCount(world);
      if (aliveNeighboursCount < 2 || aliveNeighboursCount > 3) {
        nextGenMap.push({
          x: cell.position.x,
          y: cell.position.y,
          nextState: false
        });
      }  // Dead cell comes to life amongst 3 alive neighbours
      else if (!cell.alive && aliveNeighboursCount === 3) {
        nextGenMap.push({
          x: cell.position.x,
          y: cell.position.y,
          nextState: true
        });
      }
    });
  });
  nextGenMap.map(function (val) {
    world[val.x][val.y].alive = val.nextState;
  });
  return world;
};


// Setup
var app = angular.module('App', []);

angular.module('App').controller('MainCtrl', function($scope){
  $scope.configs = {
    'glider': [[3,4],[4,4],[5,4],[5,3],[4,2]],
    'slider': [[4,3],[4,4],[4,5]],
    'toad': [[4,4],[4,5],[4,6],[5,3],[5,4],[5,5]],
  };
  var ctrl = new Controller();
  //var timeoutID;
  $scope.initWorld = function(options){
    $scope.cells = ctrl.populateWorld({
      rows: 30,
      cols: 30,
      initialWorld: options.initialWorld,
      config: $scope.configs[options.config]
    });
  };
  $scope.initWorld({
    initialWorld: [],
    config: 'glider'
  });
  window.res = [];
  $scope.toggleStatus = function(cell){
    cell.alive = !cell.alive;
    window.res.push([cell.position.x,cell.position.y]);
    console.log(window.res);
  };
  $scope.runSimulation = function(){
    if(!$scope.$$phase) {
      $scope.$apply(function(){
        $scope.cells = ctrl.updateWorld($scope.cells);
      });
    } else {
      $scope.cells = ctrl.updateWorld($scope.cells);
    }
  };
  $scope.reset = function(config){
    $scope.stopSimulation();
    $scope.cells.map(function(row){
      row.map(function(cell){
        cell.alive = false;
      });
    });
    if(config){
      $scope.initWorld({
        initialWorld: $scope.cells,
        config: config
      });
    }
  };
  $scope.simulate = function(){
    $scope.intervalId = window.setInterval($scope.runSimulation, 500);
  };
  $scope.stopSimulation = function(){
    window.clearInterval($scope.intervalId);
  };
});
