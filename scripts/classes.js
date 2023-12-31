function createMonsterSheet(entry) {
  const section = document.getElementById(entry.index);

  var entryLength = section.childNodes.length
  if (entryLength == 0) {
    
    const section1 = document.createElement("section");
    const section2 = document.createElement("section");
    const section3 = document.createElement("section");
    const section4 = document.createElement("section");
    const section5 = document.createElement("section");

    const proficiencyChoicesSection = document.createElement("section");
    proficiencyChoicesSection.setAttribute("id", "proficiencyChoices")

    const proficienciesSection = document.createElement("section");
    proficienciesSection.setAttribute("id", "proficiencies")

    const savingThrowsSection = document.createElement("section");
    savingThrowsSection.setAttribute("id", "savingThrows")

    const startingEquipmentSection = document.createElement("section");
    startingEquipmentSection.setAttribute("id", "startingEquipment")

    const startingEquipmentOptionsSection = document.createElement("section");
    startingEquipmentOptionsSection.setAttribute("id", "startingEquipmentOptions")

    const multiClassingSection = document.createElement("section");
    multiClassingSection.setAttribute("id", "multiClassing")

    const spellCastingSection = document.createElement("section");
    spellCastingSection.setAttribute("id", "spellCasting")

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
    spells.textContent = `Spells: ${entry.spells}`;

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

    section.appendChild(proficiencyChoicesSection)
    section.appendChild(proficienciesSection)
    section.appendChild(savingThrowsSection)
    section.appendChild(startingEquipmentSection)
    section.appendChild(startingEquipmentOptionsSection)
    section.appendChild(multiClassingSection)
    section.appendChild(spellCastingSection)

    displayProficiencyChoices(entry)
    displayProficiencies(entry)
    displaySavingThrows(entry)
    displayStartingEquipment(entry)
    displayStartingEquipmentOptions(entry)
    displayMultiClassing(entry)
    displaySpellCasting(entry)  
  } else if (entryLength != 0) {
    section.innerHTML = ""
  }
}

function loadMonsterList(monsters) {
  const section = document.querySelector("main")

  for (let entry = 0; entry < monsters.count; entry++) {
    const listItem = document.createElement("h1")
    listItem.textContent = monsters.results[entry].name
    const monsterInfo = document.createElement("section")
    monsterInfo.setAttribute("id", monsters.results[entry].index)
    section.appendChild(listItem)
    section.appendChild(monsterInfo)
  }
}

async function fillClassInfo(input) {
  const response = await fetch(`https://www.dnd5eapi.co/api/classes/${input}`);
  const monster = await response.json();

  createMonsterSheet(monster)
}

async function fetchAPI() {
  const response = await fetch(`https://www.dnd5eapi.co/api/classes`);
  const monsters = await response.json();

  loadMonsterList(monsters)
}

fetchAPI()

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

document.addEventListener('click', function(event) {
  var entry = event.target.textContent
  entry = entry.toLowerCase()
  entry = entry.replace(/ /g, "-")
  entry = entry.replace(/\(|\)/g, "")
  if (event.target.nodeName == "H1") {
  fillClassInfo(entry)
  }
});

function displaySense(entry) {
  const traits = Object.entries(entry.senses)
  const section = document.getElementById("senses");

  for (const trait of traits) {
    const listItems = document.createElement("h2");
    listItems.textContent = `${trait[0]}: ${trait[1]}`
    section.appendChild(listItems);
  }
}

function displaySpecialAbilities(entry) {
  const traits = entry.special_abilities
  const section = document.getElementById("specialAbilities");

  for (const trait of traits) {
    const listItems = document.createElement("h2");
    listItems.textContent = `${trait.name}: ${trait.desc}`
    section.appendChild(listItems);
  }
}

function displayProficiencyChoices(entry) {
  const traits = entry.proficiency_choices
  const section = document.getElementById("proficiencyChoices");

  for (const trait of traits) {
    const listItems = document.createElement("h2");
    listItems.textContent = `${trait.desc}`
    section.appendChild(listItems);
  }
}

function displayProficiencies(entry) {
  const traits = entry.proficiencies
  const section = document.getElementById("proficiencies");

  for (const trait of traits) {
    const listItems = document.createElement("h2");
    listItems.textContent = `${trait.name}`
    section.appendChild(listItems);
  }
}

function displaySavingThrows(entry) {
  const traits = entry.saving_throws
  const section = document.getElementById("savingThrows");

  for (const trait of traits) {
    const listItems = document.createElement("h2");
    listItems.textContent = `${trait.name}`
    section.appendChild(listItems);
  }
}

function displayStartingEquipment(entry) {
  const traits = entry.starting_equipment
  const section = document.getElementById("startingEquipment");

  for (const trait of traits) {
    const listItems = document.createElement("h2");
    listItems.textContent = `${trait.equipment.name}`
    section.appendChild(listItems);
  }
}

function displayStartingEquipmentOptions(entry) {
  const traits = entry.starting_equipment_options
  const section = document.getElementById("startingEquipmentOptions");

  for (const trait of traits) {
    const listItems = document.createElement("h2");
    listItems.textContent = `${trait.desc}`
    section.appendChild(listItems);
  }
}

function displayMultiClassing(entry) {
  const traits = entry.multi_classing.proficiencies
  const section = document.getElementById("multiClassing");

  for (const trait of traits) {
    const listItems = document.createElement("h2");
    listItems.textContent = `${trait.name}`
    section.appendChild(listItems);
  }
}

function displaySpellCasting(entry) {
  const traits = entry.spellcasting.info
  const section = document.getElementById("spellCasting");

  for (const trait of traits) {
    const listItems = document.createElement("h2");
    listItems.textContent = `${trait.name}`
    // listItems.textContent = `${trait.name}: ${trait.desc}`
    section.appendChild(listItems);
  }
}