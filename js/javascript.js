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
    gridElem.style.width = `${sqWidth}rem`;
    gridElem.style.height = `${sqWidth}rem`;
    gridElem.textContent = `G${i + 1}`;

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

canvas.addEventListener("mouseover", (e) => {
  let target = e.target;

  //   console.log(target.classList.value);
  if (target.classList.value === "grid-element") {
    target.style.backgroundColor = "black";
  }
});

// Main
initGrid(16, canvas);
setGridSize();
