function createMonsterSheet(monster) {
  const section = document.getElementById(monster.index);

  var entryLength = section.childNodes.length
  if (entryLength == 0) {

    const section1 = document.createElement("section");
    const section2 = document.createElement("section");
    const section3 = document.createElement("section");
    const section4 = document.createElement("section");
    const section5 = document.createElement("section");
    const proficiencySection = document.createElement("section");

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

    monsterName.textContent = `Name: ${monster.name}`;
    monsterDesc.textContent = `${monster.size} ${monster.type}, ${monster.alignment}`

    hitPointsInfo.textContent = `Hit Points: ${monster.hit_points} (${monster.hit_dice}) (${monster.hit_points_roll})`

    cha.textContent = `Charisma: ${monster.charisma}`;
    con.textContent = `Constitution: ${monster.constitution}`;
    dex.textContent = `Dexterity: ${monster.dexterity}`;
    str.textContent = `Strength: ${monster.strength}`;
    int.textContent = `Intelligence: ${monster.intelligence}`;
    wis.textContent = `Wisdom: ${monster.wisdom}`;

    dmgVulnerabilities.textContent = `Damage Vulnerabilities: ${monster.damage_vulnerabilities}`;
    dmgResistances.textContent = `Damage Resistances: ${monster.damage_resistances}`;
    dmgImmunities.textContent = `Damage Immunities: ${monster.damage_immunities}`;
    conditionalImmunities.textContent = `Condition Immunities: ${monster.condition_immunities}`;

    languages.textContent = `Languages: ${monster.languages}`;
    challengeInfo.textContent = `Challenge Rating: ${monster.challenge_rating} (${monster.xp} XP)`

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
    section.appendChild(speedSection);
    section.appendChild(senseSection);
    section.appendChild(specialAbilitiesSection);
    section.appendChild(actionsSection);
    section.appendChild(legendaryActionsSection);
    section.appendChild(armorClassSection);
    section.appendChild(proficienciesSection);
      
    displaySpeed(monster)
    displaySense(monster)
    displaySpecialAbilities(monster)
    displayLegendaryActions(monster)
    displayActions(monster)
    displayArmorClass(monster)
    displayProficiencies(monster)
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

async function fillMonsterInfo(input) {
    const response = await fetch(`https://www.dnd5eapi.co/api/monsters/${input}`);
    const monster = await response.json();

    createMonsterSheet(monster)
}

async function fetchAPI() {
  const response = await fetch(`https://www.dnd5eapi.co/api/monsters`);
  const monsters = await response.json();

  loadMonsterList(monsters)
}

fetchAPI()

document.addEventListener('click', function(event) {
  var entry = event.target.textContent
  entry = entry.toLowerCase()
  entry = entry.replace(/ /g, "-")
  entry = entry.replace(/\(|\)/g, "")
  if (event.target.nodeName == "H1") {
  fillMonsterInfo(entry)
  }
});

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