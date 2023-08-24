function createMonsterSheet(entry) {
    const section = document.querySelector("section")

    const section1 = document.createElement("section");
    const section2 = document.createElement("section");
    const section3 = document.createElement("section");
    const section4 = document.createElement("section");
    const section5 = document.createElement("section");

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
    ability_bonuses.textContent = `Ability Bonus: ${entry.ability_bonuses}`;
    age.textContent = `Age: ${entry.age}`;
    alignment.textContent = `Alignment: ${entry.alignment}`;
    size.textContent = `Size: ${entry.size}`;
    size_description.textContent = `Size Description: ${entry.size_description}`;
    starting_proficiencies.textContent = `Starting Proficiencies: ${entry.starting_proficiencies}`;
    languages.textContent = `Languages: ${entry.languages}`;
    language_desc.textContent = `Language Description: ${entry.language_desc}`;
    traits.textContent = `Traits: ${entry.traits}`;
    subraces.textContent = `Subraces: ${entry.subraces}`;


    // img.src = `https://www.dnd5eapi.co${entry.image}`

    // section1.appendChild(img)
    section1.appendChild(race);
    section1.appendChild(speed);
    section1.appendChild(ability_bonuses);
    section1.appendChild(age);
    section1.appendChild(alignment);
    section1.appendChild(size);
    section1.appendChild(size_description);
    section1.appendChild(starting_proficiencies);
    section1.appendChild(languages);
    section1.appendChild(language_desc);
    section1.appendChild(traits);
    section1.appendChild(subraces);

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
    const response = await fetch(`https://www.dnd5eapi.co/api/races/${input}`);
    const monster = await response.json();
    console.log(monster);

    createMonsterSheet(monster)
}

fetchAPI("dwarf")
// fetchAPI("adult-black-dragon")

// async function fetchAPI() {
//   const response = await fetch(`https://www.dnd5eapi.co/api/races`);
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