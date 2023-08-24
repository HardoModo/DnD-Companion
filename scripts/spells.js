function createMonsterSheet(entry) {
  const section = document.querySelector("section")

  const section1 = document.createElement("section");
  const section2 = document.createElement("section");
  const section3 = document.createElement("section");
  const section4 = document.createElement("section");
  const section5 = document.createElement("section");

  const name = document.createElement("h2");
  const desc = document.createElement("h2");
  const higher_level = document.createElement("h2");
  const range = document.createElement("h2");
  const components = document.createElement("h2");
  const material = document.createElement("h2");
  const ritual = document.createElement("h2");
  const duration = document.createElement("h2");
  const concentration = document.createElement("h2");
  const casting_time = document.createElement("h2");
  const level = document.createElement("h2");
  const attack_type = document.createElement("h2");
  const damage = document.createElement("h2");
  const school = document.createElement("h2");
  const classes = document.createElement("h2");
  const subclasses = document.createElement("h2");

  name.textContent = `Name: ${entry.name}`;
  desc.textContent = `Description: ${entry.desc}`;
  higher_level.textContent = `Higher Level: ${entry.higher_level}`;
  range.textContent = `Range: ${entry.range}`;
  components.textContent = `Components: ${entry.components}`;
  material.textContent = `Material: ${entry.material}`;
  ritual.textContent = `Ritual: ${entry.ritual}`;
  duration.textContent = `Duration: ${entry.duration}`;
  concentration.textContent = `Concentration: ${entry.concentration}`;
  casting_time.textContent = `Casting Time: ${entry.casting_time}`;
  level.textContent = `Level: ${entry.level}`;
  attack_type.textContent = `Attack Type: ${entry.attack_type}`;
  damage.textContent = `Damage: ${entry.damage}`;
  school.textContent = `School: ${entry.school}`;
  classes.textContent = `Classes: ${entry.textContent}`;
  subclasses.textContent = `Subclasses: ${entry.subclasses}`;

  // img.src = `https://www.dnd5eapi.co${entry.image}`

  // section1.appendChild(img)
  section1.appendChild(name);
  section1.appendChild(desc);
  section1.appendChild(higher_level);
  section1.appendChild(range);
  section1.appendChild(components);
  section1.appendChild(material);
  section1.appendChild(ritual);
  section1.appendChild(duration);
  section1.appendChild(concentration);
  section1.appendChild(casting_time);
  section1.appendChild(level);
  section1.appendChild(attack_type);
  section1.appendChild(damage);
  section1.appendChild(school);
  section1.appendChild(classes);
  section1.appendChild(subclasses);

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
  const response = await fetch(`https://www.dnd5eapi.co/api/spells/${input}`);
  const monster = await response.json();
  console.log(monster);

  createMonsterSheet(monster)
}

fetchAPI("acid-arrow")
// fetchAPI("adult-black-dragon")

// async function fetchAPI() {
//   const response = await fetch(`https://www.dnd5eapi.co/api/spells`);
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