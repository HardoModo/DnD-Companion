function createMonsterSheet(entry) {
    const section = document.querySelector("section")

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
    const response = await fetch(`https://www.dnd5eapi.co/api/conditions/${input}`);
    const monster = await response.json();
    console.log(monster);

    createMonsterSheet(monster)
}

fetchAPI("charmed")
// fetchAPI("adult-black-dragon")

// async function fetchAPI() {
//   const response = await fetch(`https://www.dnd5eapi.co/api/conditions`);
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