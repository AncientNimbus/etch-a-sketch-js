const canvas = document.querySelector(".canvas");
/** Grid size @type {HTMLDivElement} */
const gridSizeElem = document.querySelector("#grid-size");
const s = gridSizeElem;

function initGrid(gridSize = 16, container, sqWidth) {
  s.textContent = gridSize;
  generateGrid(gridSize, container, sqWidth);
}

function setGridSize(gridMin = 5, gridMax = 100) {
  const gridControls = document.querySelector("#dial-l");
  gridControls.addEventListener("click", (e) => {
    let target = e.target;
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

/**
 * Generate a square grid based on the provided value
 * @param {number} gridSize
 *
 */
function generateGrid(gridSize, container, sqWidth = 5) {
  const sqrtNum = Math.pow(gridSize, 2);
  for (let i = 0; i < sqrtNum; i++) {
    const gridElem = document.createElement("div");
    gridElem.classList = "grid-element";
    gridElem.id = `g-${i}`;
    gridElem.style.width = `${sqWidth}rem`;
    gridElem.style.height = `${sqWidth}rem`;
    gridElem.style.opacity = 0;

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

canvas.addEventListener("mouseover", (e) => {
  let target = e.target;

  if (target.classList.value === "grid-element" && target.style.opacity <= 1) {
    target.style.backgroundColor = colorMode(true);
    increaseOpacity(target.id);
  }
});

// Main
initGrid(16, canvas, 2);
setGridSize();
