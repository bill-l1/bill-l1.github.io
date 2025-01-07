const DELAY = 15000;

const TITLES = [
  "cs graduate",
  "software engineer",
  "recording artist",
  "web developer",
  "game developer",
  "mobile developer",
  "hip-hop dancer",
  "music producer",
  "graphic designer",
  "graphics engineer",
  "ml engineer",
  "researcher",
  "dreamer",
  "entrepreneur",
  "leader",
];

var currentTitles = TITLES.slice();

var Messenger = function (el, offset) {
  "use strict";
  var m = this;

  m.init = function () {
    $(el).html(currentTitles.shift());
    if (currentTitles.length == 0) {
      currentTitles = TITLES.slice();
    }
    setTimeout(m.cycleText, offset);
  };

  m.cycleText = function () {
    $(el).html(
      currentTitles.splice(
        Math.floor(Math.random() * currentTitles.length - 1),
        1
      )
    );
    if (currentTitles.length == 0) {
      currentTitles = TITLES.slice();
    }
    $(el).hide();
    $(el).effect("highlight", { color: "#bfbfbf" }, "slow");
    $(el).fadeIn();
    setTimeout(m.cycleText, DELAY);
  };

  m.init();
};

var messenger1 = new Messenger(document.getElementById("messenger1"), 5000);
var messenger1 = new Messenger(document.getElementById("messenger2"), 10000);
var messenger1 = new Messenger(document.getElementById("messenger3"), 15000);

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
