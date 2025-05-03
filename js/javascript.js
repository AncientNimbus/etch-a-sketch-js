const canvas = document.querySelector(".canvas");
const gridSizeElem = document.querySelector("#grid-size");

canvas.textContent = "Grid area";

function initGrid(gridSize = 16) {
  let s = gridSizeElem;

  s.textContent = gridSize;
}

function setGridSize(gridMin = 5, gridMax = 100) {
  const gridControls = document.querySelector("#dial-l");
  gridControls.addEventListener("click", (e) => {
    let target = e.target;
    let s = gridSizeElem;
    let gridSize = Number(s.textContent);

    switch (target.id) {
      case "increase-size":
        gridSize = gridSize < gridMax ? gridSize + 1 : gridSize;
        s.textContent = gridSize;
        break;
      case "decrease-size":
        gridSize = gridSize > gridMin ? gridSize - 1 : gridSize;
        s.textContent = gridSize;
        break;
    }

    // TODO: Change buttons state when it reaches min or max
  });
}

// Main
initGrid();
setGridSize();
