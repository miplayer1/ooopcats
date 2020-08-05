// this script was used to scrape data from opquast website
// copy it in chrome console
// add copy('pratiques') after last line copies the json to the clipboard
/*

const checkList = Array.from(document.querySelectorAll('.check-bonne'))

const list = []
checkList.map(listItem => {
  const bp = {}
  bp.title = listItem.querySelector('.bp-title').innerText
  bp.objectives = []
  Array.from(listItem.querySelectorAll('.op_data_objectif p')).map(item => {
    bp.objectives.push(item.innerText)
  })
  bp.phases = []
  Array.from(listItem.querySelectorAll('.op_data_phase-projet ul li')).map(item => {
    bp.phases.push(item.querySelectorAll('.oq_tag')[0].childNodes[1].nodeValue)
  })
  list.push(bp)
})

copy(list)

*/

// DOM elements
const gpContainer = document.getElementById("gp-container");
const gpTitle = document.getElementById("gp-title");
const gpObjectives = document.getElementById("gp-objectives");
const nextBtn = document.getElementById("next");

// functions
const randomize = max => Math.floor(Math.random() * max);

const reset = () => {
  gpTitle.innerHTML = "";
  gpObjectives.innerHTML = "";
};

// console.log(bonnesPratiques[randomize(bonnesPratiques.length)]);

const displayRandomPractice = () => {
  reset();
  const index = randomize(bonnesPratiques.length);
  gpTitle.innerHTML = `${bonnesPratiques[index].title}`;
  bonnesPratiques[index].objectives.map(objective => {
    gpObjectives.innerHTML += `<li>${objective}</li>`;
  });
  bonnesPratiques.splice(index, 1);
};
displayRandomPractice();
nextBtn.addEventListener("click", displayRandomPractice);
