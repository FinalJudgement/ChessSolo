const chessBoard = document.querySelector(".grid");
const chessBoardArr = [];
const chessSquare = document.querySelectorAll(".square");
const coordinatesX = ["a", "b", "c", "d", "e", "f", "g", "h"];
const coordinatesY = [8, 7, 6, 5, 4, 3, 2, 1];
const pieces = {
  a1: "/images/w_rook_png_shadow_128px.png",
  b1: "/images/w_knight_png_shadow_128px.png",
  c1: "/images/w_bishop_png_shadow_128px.png",
  d1: "/images/w_king_png_shadow_128px.png",
  e1: "/images/w_queen_png_shadow_128px.png",
  f1: "/images/w_bishop_png_shadow_128px.png",
  g1: "/images/w_knight_png_shadow_128px.png",
  h1: "/images/w_rook_png_shadow_128px.png",
  a2: "/images/w_pawn_png_shadow_128px.png",
  b2: "/images/w_pawn_png_shadow_128px.png",
  c2: "/images/w_pawn_png_shadow_128px.png",
  d2: "/images/w_pawn_png_shadow_128px.png",
  e2: "/images/w_pawn_png_shadow_128px.png",
  f2: "/images/w_pawn_png_shadow_128px.png",
  g2: "/images/w_pawn_png_shadow_128px.png",
  h2: "/images/w_pawn_png_shadow_128px.png",
  a8: "/images/b_rook_png_shadow_128px.png",
  b8: "/images/b_knight_png_shadow_128px.png",
  c8: "/images/b_bishop_png_shadow_128px.png",
  d8: "/images/b_king_png_shadow_128px.png",
  e8: "/images/b_queen_png_shadow_128px.png",
  f8: "/images/b_bishop_png_shadow_128px.png",
  g8: "/images/b_knight_png_shadow_128px.png",
  h8: "/images/b_rook_png_shadow_128px.png",
  a7: "/images/b_pawn_png_shadow_128px.png",
  b7: "/images/b_pawn_png_shadow_128px.png",
  c7: "/images/b_pawn_png_shadow_128px.png",
  d7: "/images/b_pawn_png_shadow_128px.png",
  e7: "/images/b_pawn_png_shadow_128px.png",
  f7: "/images/b_pawn_png_shadow_128px.png",
  g7: "/images/b_pawn_png_shadow_128px.png",
  h7: "/images/b_pawn_png_shadow_128px.png",
};

function createBoard() {
  let boardArranger = 0;
  let rowOrganizer = 0;
  let coordinateCountX = 0;
  let coordinateCountY = 0;

  chessSquare.forEach((e, i) => {
    // chessSquare[i].textContent =
    //   coordinatesX[coordinateCountX] + coordinatesY[coordinateCountY];

    e.setAttribute(
      "data-id",
      coordinatesX[coordinateCountX] + coordinatesY[coordinateCountY]
    );

    if (coordinateCountX === 7) {
      coordinateCountY++;
      coordinateCountX = 0;
    } else if (coordinateCountX < 7) {
      coordinateCountX++;
    }
    if (boardArranger === 8 && rowOrganizer === 0) {
      rowOrganizer++;
      boardArranger = 0;
    } else if (boardArranger === 8 && rowOrganizer === 1) {
      rowOrganizer--;
      boardArranger = 0;
    }
    if (i % 2 === rowOrganizer && boardArranger < 8) {
      e.setAttribute("id", "white-square");
      boardArranger++;
    } else if (i % 2 !== rowOrganizer && boardArranger < 8) {
      e.setAttribute("id", "black-square");
      boardArranger++;
    }
  });
  console.log(chessSquare);
}
createBoard();

function generatePieces() {
  Object.keys(pieces).forEach((i) => {
    const piece = document.createElement("img");
    piece.setAttribute("src", pieces[i]);
    console.log(pieces[i]);
    document.querySelector(`[data-id=${i}]`).appendChild(piece);
  });
}

generatePieces();
