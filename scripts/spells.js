function createMonsterSheet(entry) {
  const section = document.querySelector("main")

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
  const damage_type = document.createElement("h2");
  const damage = document.createElement("h2");
  const school = document.createElement("h2");
  const classes = document.createElement("h2");
  const subclasses = document.createElement("h2");

  const damageSection = document.createElement("section");
  damageSection.setAttribute("id", "damage")

  const classesSection = document.createElement("section");
  classesSection.setAttribute("id", "class")

  const subclassSection = document.createElement("section");
  subclassSection.setAttribute("id", "subclass")

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
  damage.textContent = `Damage:`;
  damage_type.textContent = `Damage Type: ${entry.damage.damage_type.name}`;
  school.textContent = `School: ${entry.school.name}`;
  classes.textContent = `Classes:`;
  subclasses.textContent = `Subclasses:`;

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
  damageSection.appendChild(damage_type)
  damageSection.appendChild(damage);
  section1.appendChild(school);
  classesSection.appendChild(classes);
  subclassSection.appendChild(subclasses);

  section.appendChild(section1);
  section.appendChild(section2);
  section.appendChild(section3);
  section.appendChild(section4);
  section.appendChild(section5);
  section.appendChild(damageSection);
  section.appendChild(classesSection);
  section.appendChild(subclassSection);

  displayDamage(entry)
  displayClasses(entry)
  displaySubclasses(entry)
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

// The code below activates whenever you click on the page
// Modify it to active the entry funtion whenever you click
// An entries name
// I'd like it to make a drop down

// document.addEventListener('click', function(event) {
//   console.log(event.target.textContent);
// });

function displayDamage(entry) {
  const traits = entry.damage.damage_at_slot_level
  const section = document.getElementById("damage");

  for (const trait in traits) {
    const listItems = document.createElement("h2");
    listItems.textContent = `Level ${trait}: Damage ${traits[trait]}`;
    section.appendChild(listItems);
  }
}

function displayClasses(entry) {
  const traits = entry.classes
  const section = document.getElementById("class");

  for (const trait of traits) {
    const listItems = document.createElement("h2");
    listItems.textContent = trait.name;
    section.appendChild(listItems);
  }
}

function displaySubclasses(entry) {
  const traits = entry.subclasses
  const section = document.getElementById("subclass");

  for (const trait of traits) {
    const listItems = document.createElement("h2");
    listItems.textContent = trait.name;
    section.appendChild(listItems);
  }
}