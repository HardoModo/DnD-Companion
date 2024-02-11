var testGlobal

// Continue trying to make a global array with global variables to reduce function sizes

// var classArray = [name, hit_die, proficiency_choices, proficiencies, saving_throws, starting_equipment,
//   starting_equipment_options, multi_classing, spellcasting, spells]

// Section 1

function createMainSections(section) {
  // This section should be moved to the top of the main function
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

function createMoreRaceSections(section) {
  const languageSection = document.createElement("section");
  languageSection.setAttribute("id", "language")

  const traitSection = document.createElement("section");
  traitSection.setAttribute("id", "traits")

  const profSection = document.createElement("section");
  profSection.setAttribute("id", "start_prof")

  section.appendChild(traitSection);
  section.appendChild(languageSection);
  section.appendChild(profSection);
}

function createMoreMonsterSections(section) {
  const speedSection = document.createElement("section");
  speedSection.setAttribute("id", "speed")

  const senseSection = document.createElement("section");
  senseSection.setAttribute("id", "senses")

  const specialAbilitiesSection = document.createElement("section");
  specialAbilitiesSection.setAttribute("id", "specialAbilities")

  const actionsSection = document.createElement("section");
  actionsSection.setAttribute("id", "actions")

  const legendaryActionsSection = document.createElement("section");
  legendaryActionsSection.setAttribute("id", "legendaryActions")

  const armorClassSection = document.createElement("section");
  armorClassSection.setAttribute("id", "armorClass")

  const proficienciesSection = document.createElement("section");
  proficienciesSection.setAttribute("id", "proficiencies")

  section.appendChild(speedSection);
  section.appendChild(senseSection);
  section.appendChild(specialAbilitiesSection);
  section.appendChild(actionsSection);
  section.appendChild(legendaryActionsSection);
  section.appendChild(armorClassSection);
  section.appendChild(proficienciesSection);
}

function createMoreConSections(section) {
  console.log("Yup")
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

function createRaceElements(entry, section) {
  const race = document.createElement("h2");
  const speed = document.createElement("h2");
  const ability_bonuses = document.createElement("h2");
  const age = document.createElement("h2");
  const alignment = document.createElement("h2");
  const size = document.createElement("h2");
  const size_description = document.createElement("h2");
  const starting_proficiencies = document.createElement("h2");
  const languages = document.createElement("h2");
  const language_desc = document.createElement("h2");
  const traits = document.createElement("h2");
  const subraces = document.createElement("h2");

  race.textContent = `Name: ${entry.name}`;
  speed.textContent = `Speed: ${entry.speed}`;
  ability_bonuses.textContent = `Ability Bonus: ${entry.ability_bonuses[0].ability_score.name} +${entry.ability_bonuses[0].bonus}`;
  age.textContent = `Age: ${entry.age}`;
  alignment.textContent = `Alignment: ${entry.alignment}`;
  size.textContent = `Size: ${entry.size}`;
  size_description.textContent = `Size Description: ${entry.size_description}`;
  starting_proficiencies.textContent = `Starting Proficiencies:`;
  languages.textContent = `Languages:`;
  language_desc.textContent = `Language Description: ${entry.language_desc}`;
  traits.textContent = `Traits:`;
  // subraces.textContent = `Subraces: ${entry.subraces[0].name}`;

  section.appendChild(race);
  section.appendChild(speed);
  section.appendChild(ability_bonuses);
  section.appendChild(age);
  section.appendChild(alignment);
  section.appendChild(size);
  section.appendChild(size_description);
  section.appendChild(starting_proficiencies);
  section.appendChild(language_desc);
  section.appendChild(languages);
  section.appendChild(traits);
  section.appendChild(subraces);
}

function createMonsterElements(entry, section) {
  const section1 = document.createElement("section");
  const section2 = document.createElement("section");
  const section3 = document.createElement("section");
  const section4 = document.createElement("section");
  const section5 = document.createElement("section");
  const proficiencySection = document.createElement("section");

  const monsterName = document.createElement("h2");
  const monsterDesc = document.createElement("h2");
  const hitPointsInfo = document.createElement("h2");
  const armorClass = document.createElement("h2");
  const cha = document.createElement("h2");
  const conditionalImmunities = document.createElement("h2");
  const con = document.createElement("h2");
  const dmgImmunities = document.createElement("h2");
  const dmgResistances = document.createElement("h2");
  const dmgVulnerabilities = document.createElement("h2");
  const dex = document.createElement("h2");
  const challengeInfo = document.createElement("h2");
  const speed = document.createElement("h2");
  const str = document.createElement("h2");
  const int = document.createElement("h2");
  const wis = document.createElement("h2");
  const senses = document.createElement("h2");
  const languages = document.createElement("h2");

  monsterName.textContent = `Name: ${entry.name}`;
  monsterDesc.textContent = `${entry.size} ${entry.type}, ${entry.alignment}`

  hitPointsInfo.textContent = `Hit Points: ${entry.hit_points} (${entry.hit_dice}) (${entry.hit_points_roll})`

  cha.textContent = `Charisma: ${entry.charisma}`;
  con.textContent = `Constitution: ${entry.constitution}`;
  dex.textContent = `Dexterity: ${entry.dexterity}`;
  str.textContent = `Strength: ${entry.strength}`;
  int.textContent = `Intelligence: ${entry.intelligence}`;
  wis.textContent = `Wisdom: ${entry.wisdom}`;

  dmgVulnerabilities.textContent = `Damage Vulnerabilities: ${entry.damage_vulnerabilities}`;
  dmgResistances.textContent = `Damage Resistances: ${entry.damage_resistances}`;
  dmgImmunities.textContent = `Damage Immunities: ${entry.damage_immunities}`;
  conditionalImmunities.textContent = `Condition Immunities: ${entry.condition_immunities}`;

  languages.textContent = `Languages: ${entry.languages}`;
  challengeInfo.textContent = `Challenge Rating: ${entry.challenge_rating} (${entry.xp} XP)`

  section1.appendChild(monsterName);
  section1.appendChild(monsterDesc);

  section2.appendChild(armorClass);
  section2.appendChild(hitPointsInfo);
  section2.appendChild(speed);

  section3.appendChild(str);
  section3.appendChild(dex);
  section3.appendChild(con); 
  section3.appendChild(int);
  section3.appendChild(wis);
  section3.appendChild(cha);

  section4.appendChild(dmgVulnerabilities);
  section4.appendChild(proficiencySection);
  section4.appendChild(dmgResistances);
  section4.appendChild(dmgImmunities);
  section4.appendChild(conditionalImmunities);
  section4.appendChild(senses);
  section4.appendChild(languages);
  section4.appendChild(challengeInfo);

  section.appendChild(section1);
  section.appendChild(section2);
  section.appendChild(section3);
  section.appendChild(section4);
  section.appendChild(section5);
}

function createConElements(entry, section) {
  const name = document.createElement("h2");
  const desc = document.createElement("h2");

  name.textContent = `Name: ${entry.name}`;
  desc.textContent = `Description: ${entry.desc}`

  section.appendChild(name);
  section.appendChild(desc);
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

function tempRacesSpells(entry) {
  displayTraits(entry)
  displayLanguge(entry)
  displayProf(entry)
}

function tempMonsterSpells(entry) {
  displaySpeed(entry)
  displaySense(entry)
  displaySpecialAbilities(entry)
  displayLegendaryActions(entry)
  displayActions(entry)
  displayArmorClass(entry)
  displayProficiencies(entry)
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
    } else if (chapter == 'races') {
      createMoreRaceSections(section)
      createRaceElements(entry, section)
      tempRacesSpells(entry)
    } else if (chapter == 'monsters') {
      createMoreMonsterSections(section)
      createMonsterElements(entry, section)
      tempMonsterSpells(entry)
    } else if (chapter == 'magic-items') {
      createMoreItemSections(section)
      createItemElements(entry, section)
      tempItemSpells(entry)
    } else if (chapter == 'conditions') {
      createConElements(entry, section)
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

// Race Functions

function displayTraits(entry) {
  const traits = entry.traits
  const section = document.getElementById("traits");

  for (const trait of traits) {
    const listItems = document.createElement("h2");
    listItems.textContent = trait.name;
    section.appendChild(listItems);
  }
}

function displayLanguge(entry) {
  const traits = entry.languages
  const section = document.getElementById("language");

  for (const trait of traits) {
    const listItems = document.createElement("h2");
    listItems.textContent = trait.name;
    section.appendChild(listItems);
  }
}

function displayProf(entry) {
  const traits = entry.starting_proficiencies
  const section = document.getElementById("start_prof");

  for (const trait of traits) {
    const listItems = document.createElement("h2");
    listItems.textContent = trait.name;
    section.appendChild(listItems);
  }
}

// Monster Functions

function displaySpeed(entry) {
  const traits = Object.entries(entry.speed)
  const section = document.getElementById("speed");

  for (const trait of traits) {
    const listItems = document.createElement("h2");
    listItems.textContent = `${trait[0]}: ${trait[1]}`
    section.appendChild(listItems);
  }
}

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

function displayActions(entry) {
  const traits = entry.actions
  const section = document.getElementById("specialAbilities");

  for (const trait of traits) {
    const listItems = document.createElement("h2");
    listItems.textContent = `${trait.name}: ${trait.desc}`
    section.appendChild(listItems);
  }
}

function displayLegendaryActions(entry) {
  const traits = entry.legendary_actions
  const section = document.getElementById("specialAbilities");

  for (const trait of traits) {
    const listItems = document.createElement("h2");
    listItems.textContent = `${trait.name}: ${trait.desc}`
    section.appendChild(listItems);
  }
}

function displayArmorClass(entry) {
  const traits = entry.armor_class
  const section = document.getElementById("specialAbilities");

  for (const trait of traits) {
    const listItems = document.createElement("h2");
    listItems.textContent = `${trait.type}: ${trait.value}`
    section.appendChild(listItems);
  }
}

function displayProficiencies(entry) {
  const traits = entry.proficiencies
  const section = document.getElementById("specialAbilities");

  for (const trait of traits) {
    const listItems = document.createElement("h2");
    listItems.textContent = `${trait.proficiency.name}: +${trait.value}`
    section.appendChild(listItems);
  }
}