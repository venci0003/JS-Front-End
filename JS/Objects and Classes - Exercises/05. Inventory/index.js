function heroInventory(array) {
  let heroList = [];

  for (let index = 0; index < array.length; index++) {
    [heroName, heroLevel, inventory] = array[index].split(" / ");

    let heroObject = {
      heroName: heroName,
      heroLevel: heroLevel,
      inventory: inventory,
    };

    heroList.push(heroObject);
  }

  let sortedHeroList = heroList.sort((a, b) => a.heroLevel - b.heroLevel);

  for (const h of sortedHeroList) {
    console.log(`Hero: ${h.heroName}`);
    console.log(`level => ${h.heroLevel}`);
    console.log(`items => ${h.inventory}`);
  }
}

heroInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
