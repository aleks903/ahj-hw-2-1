class GameBoard {
  constructor(boardSize) {
    this.boardSize **= boardSize;
    this.oldIndex = 0;
    this.itemIndex = 0;
  }

  drawBoard() {
    const board = document.getElementsByClassName('board')[0];
    for (let index = 0; index < this.boardSize; index += 1) {
      const itemBoard = document.createElement('div');
      itemBoard.className = 'field';
      itemBoard.id = `field${index}`;
      board.appendChild(itemBoard);
    }
    this.randomImg();
  }

  randomImg() {
    setInterval(() => {
      do {
        this.itemIndex = Math.floor(Math.random() * this.boardSize);
      } while (this.itemIndex === this.oldIndex);
      if (this.oldIndex >= 0) {
        const oldItemField = document.getElementById(`field${this.oldIndex}`);
        oldItemField.innerHTML = '';
      }
      const itemField = document.getElementById(`field${this.itemIndex}`);
      itemField.innerHTML = '<img src = "./src/img/goblin.png">';
      this.oldIndex = this.itemIndex;
    }, 1000);
  }
}

const gamesBoard = new GameBoard(4);
gamesBoard.drawBoard();
