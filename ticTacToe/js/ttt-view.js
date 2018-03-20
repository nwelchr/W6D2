class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    const $ul = $('.ttt ul');
    console.log($ul);
    $ul.on("click", "li", (event) => {
      const $li = $(event.target);
      this.makeMove($ul, $li);
    });

  }

  makeMove($ul, $square) {
    let pos = ($square.data("pos"));
    const currentPlayer = this.game.currentPlayer;

    try {
      this.game.playMove(pos);
    } catch(err) {
      alert(err.msg);
      return;
    }

    $square.addClass(`${currentPlayer} clicked`);

    if (this.game.isOver()) {
      $('li').addClass('loser');
      const $winnerSquares = $(`.${this.game.winner()}`);
      $winnerSquares.addClass('winner');
      if (this.game.winner()) {
        $('body').append(`<figcaption>You win, ${this.game.winner()}!<figcaption>`);
      } else {
        $('body').append(`<figcaption>It's a draw!<figcaption>`);
      }
      $ul.off("click", "li");
    }

  }

  setupBoard() {
    this.$el.append('<ul class="board"></ul>');
    const $ul = $('.ttt ul');
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const $li = $('<li></li>');
        $li.data("pos", [i, j]);
        $ul.append($li);
      }
    }
  }
}

module.exports = View;
