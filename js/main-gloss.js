// DOM elements glossaire
const glTitle = document.getElementById("gl-title");
const glDescriptions = document.getElementById("gl-descriptions");
const nextBtn = document.getElementById("next");

// functions
const randomize = max => Math.floor(Math.random() * max);

const reset = () => {
  glTitle.innerHTML = "";
  glDescriptions.innerHTML = "";
};

console.log(glossaire[randomize(glossaire.length)]);

const displayRandomPractice = () => {
  reset();
  const gloss = randomize(glossaire.length);
  glTitle.innerHTML = `${glossaire[gloss].title}`;
glDescriptions.innerHTML = `${glossaire[gloss].description}`;
  glossaire.splice(gloss, 1);
};
displayRandomPractice();
nextBtn.addEventListener("click", displayRandomPractice);
