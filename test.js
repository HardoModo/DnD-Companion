function createMonsterSheet(monster) {
    const section = document.querySelector("section");

    const myH2 = document.createElement("h2");
    const myH3 = document.createElement("h2");
    const myH4 = document.createElement("h2");
    const myH5 = document.createElement("h2");
    const img = document.createElement("img");

    myH2.textContent = monster.name;
    myH3.textContent = monster.armor_class;
    myH4.textContent = monster.alignment;
    myH5.textContent = monster.size;
    img.src = `https://www.dnd5eapi.co${monster.image}`

    section.appendChild(myH2);
    section.appendChild(myH3);
    section.appendChild(myH4);
    section.appendChild(myH5);
    section.appendChild(img)
}

async function fetchAPI(input) {
    const response = await fetch(`https://www.dnd5eapi.co/api/monsters/${input}`);
    const monster = await response.json();
    console.log(monster);

    createMonsterSheet(monster)
  }

  fetchAPI("adult-black-dragon")

// TO DO
// Not all creatures have images + 
// the ones that have images are AI generated
// Find new source
// Add rest of creature descriptions
// Format page