function createMonsterSheet(monster) {
  const section = document.getElementById(monster.index);

  var entryLength = section.childNodes.length
  if (entryLength == 0) {

    const section1 = document.createElement("section");

    const name = document.createElement("h2");
    const equipmentCategory = document.createElement("h2");
    const rarity = document.createElement("h2");
    const desc = document.createElement("h2");

    name.textContent = `Name: ${monster.name}`;
    equipmentCategory.textContent = `Equipment Category: ${monster.equipment_category.name}`
    rarity.textContent = `Rarity: ${monster.rarity.name}`;
    desc.textContent = `Description: ${monster.desc}`;

    section1.appendChild(name)
    section1.appendChild(equipmentCategory);
    section1.appendChild(rarity);
    section1.appendChild(desc);

    section.appendChild(section1);
  
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

async function fillMagicItemsInfo(input) {
    const response = await fetch(`https://www.dnd5eapi.co/api/magic-items/${input}`);
    const monster = await response.json();

    createMonsterSheet(monster)
}

async function fetchAPI() {
  const response = await fetch(`https://www.dnd5eapi.co/api/magic-items`);
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
  fillMagicItemsInfo(entry)
  }
});