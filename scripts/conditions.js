function createMonsterSheet(entry) {
  const section = document.getElementById(entry.index);

  var entryLength = section.childNodes.length
  if (entryLength == 0) {

    const section1 = document.createElement("section");
    const section2 = document.createElement("section");
    const section3 = document.createElement("section");
    const section4 = document.createElement("section");
    const section5 = document.createElement("section");

    const name = document.createElement("h2");
    const desc = document.createElement("h2");

    name.textContent = `Name: ${entry.name}`;
    desc.textContent = `Description: ${entry.desc}`

    section1.appendChild(name);
    section1.appendChild(desc);

    section.appendChild(section1);
    section.appendChild(section2);
    section.appendChild(section3);
    section.appendChild(section4);
    section.appendChild(section5);
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

async function fillConditionInfo(input) {
    const response = await fetch(`https://www.dnd5eapi.co/api/conditions/${input}`);
    const monster = await response.json();

    createMonsterSheet(monster)
}

async function fetchAPI() {
  const response = await fetch(`https://www.dnd5eapi.co/api/conditions`);
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
  fillConditionInfo(entry)
  }
});