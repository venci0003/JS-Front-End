function city(cityInformation){
    let dictionary = Object.entries(cityInformation);

    for (const [key,value] of dictionary) {
      console.log(`${key} -> ${value}`)
    }
}

