var testGlobal

// var classArray = [name, hit_die, proficiency_choices, proficiencies, saving_throws, starting_equipment,
//   starting_equipment_options, multi_classing, spellcasting, spells]

// Section 1

function createMainSections(section) {
  const section1 = document.createElement("section");
  const section2 = document.createElement("section");
  const section3 = document.createElement("section");
  const section4 = document.createElement("section");
  const section5 = document.createElement("section");

  section.appendChild(section1);
  section.appendChild(section2);
  section.appendChild(section3);
  section.appendChild(section4);
  section.appendChild(section5);
}

// Section 2

function createMoreClassSections(section) {
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

  section.appendChild(proficiencyChoicesSection)
  section.appendChild(proficienciesSection)
  section.appendChild(savingThrowsSection)
  section.appendChild(startingEquipmentSection)
  section.appendChild(startingEquipmentOptionsSection)
  section.appendChild(multiClassingSection)
  section.appendChild(spellCastingSection)
}

function createMoreSpellSections(section) {
  const damageSection = document.createElement("section");
  damageSection.setAttribute("id", "damage")

  const classesSection = document.createElement("section");
  classesSection.setAttribute("id", "class")

  const subclassSection = document.createElement("section");
  subclassSection.setAttribute("id", "subclass")

  section.appendChild(damageSection);
  section.appendChild(classesSection);
  section.appendChild(subclassSection);
}

// Section 3

function createClassElements(entry, section) {
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

  section.appendChild(name);
  section.appendChild(hit_die);
  section.appendChild(proficiency_choices);
  section.appendChild(proficiencies);
  section.appendChild(saving_throws);
  section.appendChild(starting_equipment);
  section.appendChild(starting_equipment_options);
  section.appendChild(multi_classing);
  section.appendChild(spellcasting);
  section.appendChild(spells);
}

function createSpellElements(entry, section) {
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
  // damage_type.textContent = `Damage Type: ${entry.damage.damage_type.name}`;
  school.textContent = `School: ${entry.school.name}`;
  classes.textContent = `Classes:`;
  subclasses.textContent = `Subclasses:`;

  section.appendChild(name);
  section.appendChild(desc);
  section.appendChild(higher_level);
  section.appendChild(range);
  section.appendChild(components);
  section.appendChild(material);
  section.appendChild(ritual);
  section.appendChild(duration);
  section.appendChild(concentration);
  section.appendChild(casting_time);
  section.appendChild(level);
  section.appendChild(attack_type);
  section.appendChild(damage_type)
  section.appendChild(damage);
  section.appendChild(school);
  section.appendChild(classes);
  section.appendChild(subclasses);
}

// Section 4

function tempNameClass(entry) {
  displayProficiencyChoices(entry)
  displayProficiencies(entry)
  displaySavingThrows(entry)
  displayStartingEquipment(entry)
  displayStartingEquipmentOptions(entry)
  displayMultiClassing(entry)
  displaySpellCasting(entry)
}

function tempNameSpells(entry) {
  displayDamage(entry)
  displayClasses(entry)
  displaySubclasses(entry)
}

// Main Funtion

function createSheet(chapter, entry) {
  const section = document.getElementById(entry.index);

  var entryLength = section.childNodes.length
  if (entryLength == 0) {
    
    // createMainSections(section)
  
    if (chapter == 'classes') {
      createMoreClassSections(section)
      createClassElements(entry, section)
      tempNameClass(entry)
    } else if (chapter == 'spells') {
      createMoreSpellSections(section)
      createSpellElements(entry, section)
      tempNameSpells(entry)
    }
    
    

  } else if (entryLength != 0) {
    section.innerHTML = ""
  }
}

function loadList(entries) {
  const section = document.querySelector("main")
  section.innerHTML = ""

  for (let entry = 0; entry < entries.count; entry++) {
    const listItem = document.createElement("h1")
    listItem.textContent = entries.results[entry].name
    const entryInfo = document.createElement("section")
    entryInfo.setAttribute("id", entries.results[entry].index)
    section.appendChild(listItem)
    section.appendChild(entryInfo)
  }
}

async function fillEntryInfo(chapter, input) {
  const response = await fetch(`https://www.dnd5eapi.co/api/${chapter}/${input}`);
  const entry = await response.json();

  createSheet(chapter, entry)
}

async function fetchAPI(input) {
  const response = await fetch(`https://www.dnd5eapi.co/api/${input}`);
  const entries = await response.json();

  testGlobal = input

  loadList(entries)
}

fetchAPI("classes")

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
  fillEntryInfo(testGlobal ,entry)
  }
});

// Class Functions

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

// Spell Functions

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