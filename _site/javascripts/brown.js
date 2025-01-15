(function(){
  this.Brown = {

    initialize: function(numberOfCards, numbersCount) {

      function initializeCardIndexes() {
        var indexes = [];
        for(var number = 0; number < numberOfCards; number++) {
          indexes.push(Math.pow(2, number));
        }
        return indexes;
      }

      function findSum(array)  {
        var sum=0;
        array.map(function(x){
          sum += x;
        });
        return sum;
      }

      function getAdditiveIndexes(decreasingOrderIndexes, number) {
        var selectedIndexes = [];

        for (var index = 0; index < decreasingOrderIndexes.length; index++) {
          if (number >= decreasingOrderIndexes[index]) {
            if (findSum(selectedIndexes.concat(decreasingOrderIndexes[index])) <= number) {
              selectedIndexes.push(decreasingOrderIndexes[index]);
            }
          }
        }
        return selectedIndexes;
      }

      function fillCards(indexes) {
        var cards = {};
        var additives;
        var number;
        var additiveIndex;

        for (var i = 0; i < indexes.length; i++) {
          cards[indexes[i]] = [];
        }

        var decreasingOrderIndexes = indexes.sort(function(a, b) {
            return b - a;
        });

        for (number = 1; number <= numbersCount; number++) {
          additives = getAdditiveIndexes(decreasingOrderIndexes, number);
          for (additiveIndex = 0; additiveIndex < additives.length; additiveIndex++) {
            cards[additives[additiveIndex]] = cards[additives[additiveIndex]].concat(number);
          }
        }

        return cards;
      }

      return fillCards(initializeCardIndexes());
    }
  };
}).call(this);