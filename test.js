function createMonsterSheet(monster) {
    const section = document.querySelector("section");

    const myH2 = document.createElement("h2");
    const myH3 = document.createElement("h2");
    const myH4 = document.createElement("h2");
    const myH5 = document.createElement("h2");
    const myH6 = document.createElement("h2");
    const myH7 = document.createElement("h2");
    const myH8 = document.createElement("h2");
    const myH9 = document.createElement("h2");
    const myH10 = document.createElement("h2");
    const myH11 = document.createElement("h2");
    const myH12 = document.createElement("h2");
    const myH13 = document.createElement("h2");
    const myH14 = document.createElement("h2");
    const myH15 = document.createElement("h2");
    const myH16 = document.createElement("h2");
    const myH17 = document.createElement("h2");
    const myH18 = document.createElement("h2");
    const myH19 = document.createElement("h2");
    const myH20 = document.createElement("h2");
    const myH21 = document.createElement("h2");
    const myH22 = document.createElement("h2");
    const myH23 = document.createElement("h2");
    const myH24 = document.createElement("h2");
    const myH25 = document.createElement("h2");
    const myH26 = document.createElement("h2");
    const myH27 = document.createElement("h2");
    const myH28 = document.createElement("h2");
    const myH29 = document.createElement("h2");
    const myH30 = document.createElement("h2");
    const myH31 = document.createElement("h2");
    const myH32 = document.createElement("h2");
    const myH33 = document.createElement("h2");
    const img = document.createElement("img");

    myH2.textContent = `Name: ${monster.name}`;
    myH3.textContent = `AC: ${monster.armor_class}`;
    myH4.textContent = `Alignment: ${monster.alignment}`;
    myH5.textContent = `Size: ${monster.size}`;
    myH6.textContent = `Actions: ${monster.actions}`;
    myH7.textContent = `Type: ${monster.type}`;
    myH8.textContent = `CR: ${monster.challenge_rating}`;
    myH9.textContent = `Charisma: ${monster.charisma}`;
    myH10.textContent = `Condition Immunities: ${monster.condition_immunities}`;
    myH11.textContent = `Constitution: ${monster.constitution}`;
    myH12.textContent = `Damage Immunities: ${monster.damage_immunities}`;
    myH13.textContent = `Damage Resistances: ${monster.damage_resistances}`;
    myH14.textContent = `Damage Vulnerabilities: ${monster.damage_vulnerabilities}`;
    myH15.textContent = `Dexterity: ${monster.dexterity}`;
    myH16.textContent = `CR: ${monster.challenge_rating}`;
    myH18.textContent = `Proficiencies: ${monster.proficiencies}`;
    myH19.textContent = `Hit Points: ${monster.hit_points}`;
    myH20.textContent = `Hit Dice: ${monster.hit_dice}`;
    myH21.textContent = `Hit Points Roll: ${monster.hit_points_roll}`;
    myH22.textContent = `Speed: ${monster.speed}`;
    myH23.textContent = `Strength: ${monster.strength}`;
    myH24.textContent = `Intelligence: ${monster.intelligence}`;
    myH25.textContent = `Wisdom: ${monster.wisdom}`;
    myH26.textContent = `Senses: ${monster.senses}`;
    myH27.textContent = `Languages: ${monster.languages}`;
    myH28.textContent = `XP: ${monster.xp}`;
    myH29.textContent = `Special Abilities: ${monster.special_abilities}`;
    myH30.textContent = `Legendary Actions: ${monster.legendary_actions}`;
    img.src = `https://www.dnd5eapi.co${monster.image}`

    section.appendChild(myH2);
    section.appendChild(myH3);
    section.appendChild(myH4);
    section.appendChild(myH5);
    section.appendChild(myH6);
    section.appendChild(myH7);
    section.appendChild(myH8);
    section.appendChild(myH9);
    section.appendChild(myH10);
    section.appendChild(myH11);
    section.appendChild(myH12);
    section.appendChild(myH13);
    section.appendChild(myH14);
    section.appendChild(myH15);
    section.appendChild(myH16);
    section.appendChild(myH17);
    section.appendChild(myH18);
    section.appendChild(myH19);
    section.appendChild(myH20);
    section.appendChild(myH21);
    section.appendChild(myH22);
    section.appendChild(myH23);
    section.appendChild(myH24);
    section.appendChild(myH25);
    section.appendChild(myH26);
    section.appendChild(myH27);
    section.appendChild(myH28);
    section.appendChild(myH29);
    section.appendChild(myH30);
    section.appendChild(img)
}

async function fetchAPI(input) {
    const response = await fetch(`https://www.dnd5eapi.co/api/monsters/${input}`);
    const monster = await response.json();
    console.log(monster);

    createMonsterSheet(monster)
}

fetchAPI("troll")
// fetchAPI("adult-black-dragon")

// TO DO
// Not all creatures have images + 
// the ones that have images are AI generated
// Find new source
// Add rest of creature descriptions
// Format page