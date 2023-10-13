document.addEventListener("DOMContentLoaded", function () {
  const rangeOption = document.getElementById("myRange");

  rangeOption.addEventListener("input", function () {
      const size = sizeOptions(rangeOption);
      makeRows(size);
  });

  makeRows(16);
});

function sizeOptions(rangeOption) {
  return rangeOption.value; // Use the range input element to get the value
}

function makeRows(size) {
  const container = document.getElementById("container");
  container.innerHTML = ''; // Clear the container before re-populating it.
  container.style.gridTemplateColumns=`repeat(${size},1fr)`;
  container.style.gridTemplateRows=`repeat(${size},1fr)`;

  for (c = 0; c < (size * size); c++) {
    let cells = document.createElement("div");
    container.insertAdjacentElement("beforeend",cells);
    //cell.innerText = (c+1);
      container.appendChild(cells).className = "grid-item";
  };

  const boxes=document.querySelectorAll(".grid-item");

boxes.forEach(darkBox =>darkBox.addEventListener('mouseover',()=> {
      darkBox.style.backgroundColor = "black";

  }));

  };

//makeRows(100);

function Reset(){
  let divs=document.querySelectorAll(".grid-item");
  divs.forEach(resetBox=>resetBox.style.backgroundColor="white")
}