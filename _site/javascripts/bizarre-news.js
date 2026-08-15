(function () {
  var data = document.getElementById("bizarre-news-data");
  if (!data || typeof Vue === "undefined") return;

  var newsHeadlines = JSON.parse(data.textContent).filter(function (piece) {
    return piece.active;
  });

  new Vue({
    el: "#app",
    data: {
      newsHeadlines: newsHeadlines,
      currentIndex: 0,
      currentScore: 0,
      mode: "q",
      currentResult: "❌",
      quizDone: false
    },
    methods: {
      ansQ: function (ans) {
        if (this.checkAns(ans)) {
          this.currentScore += 1;
          this.currentResult = "✅";
        }
        this.mode = "a";

        if (this.currentIndex + 1 === this.newsHeadlines.length) {
          this.quizDone = true;
        }
      },
      checkAns: function (ans) {
        return ans === newsHeadlines[this.currentIndex].ans;
      },
      nextQ: function () {
        this.mode = "q";
        if (this.currentIndex + 1 < this.newsHeadlines.length) {
          this.currentIndex += 1;
        }
        this.currentResult = "❌";
      }
    }
  });
}());
