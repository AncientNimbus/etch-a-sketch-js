const canvas = document.querySelector(".canvas");
/** Grid size @type {HTMLDivElement} */
const gridSizeElem = document.querySelector("#grid-size");
const s = gridSizeElem;
let randomized = false;

function initGrid(gridSize = 16, container, sqWidth) {
  s.textContent = gridSize;
  generateGrid(gridSize, container, sqWidth);
}

/**
 *
 * @param {HTMLElement} container
 * @param {number} gridSize
 */
function resetGrid(container, gridSize, sqrtNum) {
  const grids = document.querySelectorAll(".grid-element");
  grids.forEach((elem) => {
    container.removeChild(elem);
  });
  generateGrid(gridSize, container, sqrtNum);
}

function setGridSize(gridMin = 5, gridMax = 100) {
  const gridControls = document.querySelector("#dial-l");
  const buttons = document.querySelectorAll("#dial-l .action-btn");

  gridControls.addEventListener("click", (e) => {
    let target = e.target;
    let gridSize = Number(s.textContent);

    switch (target.id) {
      case "increase-size":
        gridSize = gridSize < gridMax ? gridSize + 1 : gridSize;
        s.textContent = gridSize;
        resetGrid(canvas, gridSize);

        target.disabled = gridSize === gridMax ? true : false;
        break;
      case "decrease-size":
        gridSize = gridSize > gridMin ? gridSize - 1 : gridSize;
        s.textContent = gridSize;
        resetGrid(canvas, gridSize);

        target.disabled = gridSize === gridMin ? true : false;
        break;
    }

    if (gridSize < gridMax && gridSize > gridMin) {
      buttons.forEach((btn) => {
        btn.disabled = false;
      });
    }
  });
}

function setColorMode() {
  const colorControls = document.querySelector("#dial-r");
  colorControls.addEventListener("click", (e) => {
    let target = e.target;

    switch (target.id) {
      case "mono":
        randomized = false;
        break;
      case "random":
        randomized = true;
        break;
    }
  });
}

/**
 * Generate a square grid based on the provided value
 * @param {number} gridSize
 * @param {HTMLElement} container
 */
function generateGrid(gridSize, container, sqWidth = 2) {
  const sqrtNum = Math.pow(gridSize, 2);
  const tileSize = 100 / gridSize;

  for (let i = 0; i < sqrtNum; i++) {
    const gridElem = document.createElement("div");
    gridElem.classList = "grid-element";
    gridElem.id = `g-${i}`;
    gridElem.style.width = `${tileSize}%`;
    gridElem.style.height = `${tileSize}%`;
    gridElem.style.opacity = 0.5;

    addToContainer(container, gridElem);
  }
}

/**
 *
 * @param {HTMLElement} container
 * @param {HTMLElement} elem
 */
function addToContainer(container, elem) {
  container.appendChild(elem);
}

/**
 *
 * @param {string} id
 * @param {number} rate
 */
function increaseOpacity(id, rate = 10) {
  const elem = document.querySelector(`.grid-element#${id}`);
  elem.style.opacity = Number(elem.style.opacity) + rate * 0.01;
}

/**
 *
 * @param {bool} randomized
 * @returns {string} A RGB color in string value
 */
function colorMode(randomized = false) {
  const randNum = (range = 255) => {
    return Math.round(Math.random() * range);
  };

  if (randomized) {
    return `rgb(${randNum()}, ${randNum()}, ${randNum()})`;
  } else {
    return "black";
  }
}

// Main
initGrid(16, canvas, 4);
setGridSize();
setColorMode();

canvas.addEventListener("mouseover", (e) => {
  let target = e.target;

  if (target.classList.value === "grid-element" && target.style.opacity <= 1) {
    target.style.backgroundColor = colorMode(randomized);
    increaseOpacity(target.id);
  }
});
