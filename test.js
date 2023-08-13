function createMonsterSheet(monster) {
    const section = document.querySelector("section");

    const myH2 = document.createElement("h2");

    myH2.textContent = monster.name;

    section.appendChild(myH2);
}

async function fetchAPI(input) {
    const response = await fetch(`https://www.dnd5eapi.co/api/monsters/${input}`);
    // const response = await fetch("https://www.dnd5eapi.co/api/monsters/adult-black-dragon/");
    const monster = await response.json();
    console.log(monster);

    createMonsterSheet(monster)
  }

  fetchAPI("adult-black-dragon")