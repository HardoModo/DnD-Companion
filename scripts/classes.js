function createMonsterSheet(entry) {
  const section = document.querySelector("main")

  const section1 = document.createElement("section");
  const section2 = document.createElement("section");
  const section3 = document.createElement("section");
  const section4 = document.createElement("section");
  const section5 = document.createElement("section");

  const name = document.createElement("h2");
  const hit_die = document.createElement("h2");
  const proficiency_choices = document.createElement("h2");
  const proficiencies = document.createElement("h2");
  const saving_throws = document.createElement("h2");
  const starting_equipment = document.createElement("h2");
  const starting_equipment_options = document.createElement("h2");
  const multi_classing = document.createElement("h2");
  const spellcasting = document.createElement("h2");
  const spells = document.createElement("h2");

  name.textContent = `Name: ${entry.name}`;
  hit_die.textContent = `Hit Die: ${entry.hit_die}`;
  proficiency_choices.textContent = `Proficiency Choices: ${entry.proficiency_choices}`;
  proficiencies.textContent = `Proficiencies: ${entry.proficiencies}`;
  saving_throws.textContent = `Saving Throws: ${entry.saving_throws}`;
  starting_equipment.textContent = `Starting Equipment: ${entry.starting_equipment}`;
  starting_equipment_options.textContent = `Starting Equipment Options: ${entry.starting_equipment_options}`;
  multi_classing.textContent = `Multi Classing: ${entry.multi_classing}`;
  spellcasting.textContent = `Spell Casting: ${entry.spellcasting}`;
  spells.textContent = `Spells: ${entry.spells}`;

  // img.src = `https://www.dnd5eapi.co${entry.image}`

  // section1.appendChild(img)
  section1.appendChild(name);
  section1.appendChild(hit_die);
  section1.appendChild(proficiency_choices);
  section1.appendChild(proficiencies);
  section1.appendChild(saving_throws);
  section1.appendChild(starting_equipment);
  section1.appendChild(starting_equipment_options);
  section1.appendChild(multi_classing);
  section1.appendChild(spellcasting);
  section1.appendChild(spells);

  section.appendChild(section1);
  section.appendChild(section2);
  section.appendChild(section3);
  section.appendChild(section4);
  section.appendChild(section5);
}

function loadMonsterList(monsters) {
const section = document.querySelector("section")

for (let entry = 0; entry < monsters.count; entry++) {
  const listItem = document.createElement("h2")
  listItem.textContent = monsters.results[entry].name
  console.log(monsters.results[entry].name)
  section.appendChild(listItem)
}
}

async function fetchAPI(input) {
  const response = await fetch(`https://www.dnd5eapi.co/api/classes/${input}`);
  const monster = await response.json();
  console.log(monster);

  createMonsterSheet(monster)
}

fetchAPI("druid")

// async function fetchAPI() {
//   const response = await fetch(`https://www.dnd5eapi.co/api/classes`);
//   const monsters = await response.json();
//   console.log(monsters);
//   console.log(monsters.count);

//   // console.log(monsters.results[monster].index);

//   loadMonsterList(monsters)
// }

// fetchAPI()

// TO DO
// Not all creatures have images + 
// the ones that have images are AI generated
// Find new source
// Format page
// Explore /api/classes/druid/levels
// Explore /api/classes/druid/spells

// The code below activates whenever you click on the page
// Modify it to active the entry funtion whenever you click
// An entries name
// I'd like it to make a drop down

// document.addEventListener('click', function(event) {
//   console.log(event.target.textContent);
// });