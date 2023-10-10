function createMonsterSheet(entry) {
  const section = document.getElementById(entry.index);

  var entryLength = section.childNodes.length
  if (entryLength == 0) {

    const section1 = document.createElement("section");
    const section2 = document.createElement("section");
    const section3 = document.createElement("section");
    const section4 = document.createElement("section");
    const section5 = document.createElement("section");

    const languageSection = document.createElement("section");
    languageSection.setAttribute("id", "language")

    const traitSection = document.createElement("section");
    traitSection.setAttribute("id", "traits")

    const profSection = document.createElement("section");
    profSection.setAttribute("id", "start_prof")

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

    section1.appendChild(race);
    section1.appendChild(speed);
    section1.appendChild(ability_bonuses);
    section1.appendChild(age);
    section1.appendChild(alignment);
    section1.appendChild(size);
    section1.appendChild(size_description);
    profSection.appendChild(starting_proficiencies);
    languageSection.appendChild(language_desc);
    languageSection.appendChild(languages);
    traitSection.appendChild(traits);
    section1.appendChild(subraces);

    section.appendChild(section1);
    section.appendChild(section2);
    section.appendChild(traitSection);
    section.appendChild(languageSection);
    section.appendChild(profSection);
    section.appendChild(section3);
    section.appendChild(section4);
    section.appendChild(section5);

    displayTraits(entry)
    displayLanguge(entry)
    displayProf(entry)
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

async function fillRaceInfo(input) {
    const response = await fetch(`https://www.dnd5eapi.co/api/races/${input}`);
    const monster = await response.json();

    createMonsterSheet(monster)
}

async function fetchAPI() {
  const response = await fetch(`https://www.dnd5eapi.co/api/races`);
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
  fillRaceInfo(entry)
  }
});

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