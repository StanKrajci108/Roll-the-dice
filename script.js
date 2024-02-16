const btn = document.querySelector(".btn");
const cubeImage = document.querySelector(".cube-image");
const resultSection = document.querySelector(".result");

let counter = 0;
let clicks = 0;

// Function to create paragraph
const createParagraph = (content) => {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = content;
  resultSection.append(newParagraph);
};

btn.addEventListener("click", () => {
  const randomNumber = Math.ceil(Math.random() * 6);
  cubeImage.src = "images/" + randomNumber + ".png";
  // counter adds random number
  counter += randomNumber;

  // clear result section
  resultSection.textContent = "";

  // create paragraph with counter
  createParagraph(counter);

  // clicks counter
  clicks += 1;

  // check if clicks are less than 5 and counter is greater than 15
  if (clicks <= 5 && counter >= 17) {
    createParagraph("You won!! :)");
    btn.style.visibility = "hidden";
  } else if (clicks >= 5 && counter < 17) {
    createParagraph("You loose!! :(");
    btn.style.visibility = "hidden";
  } else if (clicks < 5 && counter < 17) {
    createParagraph("Roll again!");
  }
});
