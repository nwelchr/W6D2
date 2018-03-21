class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupTowers();
    this.render();
  }

  setupTowers() {
    for (let i = 0; i < 3; i++) {
      const $ul = $('<ul></ul>')
      $ul.data("row", i);
      for (let j = 0; j < 3; j++) {
        const $li = $('<li></li>')
        $ul.append($li);
      }
      this.$el.append($ul);
    }

    const $li = $('.hanoi ul:first-child li');
    console.log($li.eq(0));
    $li.eq(0).addClass('big');
    $li.eq(1).addClass('med');
    $li.eq(2).addClass('small');
  }

  render () {
    const $ul = $('.hanoi ul');
    const getMove = curriedGetMove();
    $ul.on("click", (event) => {
      const $currUl = $(event.currentTarget);
      $currUl.toggleClass('red-border');
      const tower =
      this.getMove(tower);
    });
  }
}

module.exports = HanoiView;

// to be added to render()
function curriedGetMove() {
  const positions = [];

  function _curriedGetMove(tower) {
    positions.push(tower);
    if (positions.length === 2) {

      this.game.move(positions[0], positions[1]);
    }
    else {
      return _curriedGetMove;
    }
  }.bind(this);

  return _curriedGetMove;
}
