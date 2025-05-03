const canvas = document.querySelector(".canvas");
/** Grid size @type {HTMLDivElement} */
const gridSizeElem = document.querySelector("#grid-size");
const s = gridSizeElem;

function initGrid(gridSize = 16) {
  s.textContent = gridSize;
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
  for (let i = 0; i < Number(gridSize); i++) {
    const gridElem = document.createElement("div");
    gridElem.classList = "grid-element";
    gridElem.style.width = `${sqWidth}rem`;
    gridElem.style.height = `${sqWidth}rem`;
    gridElem.textContent = `Grid ${i + 1}`;

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

// Main
initGrid(16);
setGridSize();
generateGrid(s.textContent, canvas, 5);
