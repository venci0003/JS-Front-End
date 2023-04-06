function thePianist(input) {
  let piecesCollection = {};

  let loopCounter = input[0];

  for (let index = 1; index <= loopCounter; index++) {
    let splittedInput = input[index].split("|");

    let pieceName = splittedInput[0];

    let composerName = splittedInput[1];

    let keyValue = splittedInput[2];

    piecesCollection[pieceName] = { pieceInformation: composerName, keyValue };
  }
  
  let newIndex = Number(loopCounter) + 1;

  while (true) {
    if (input[newIndex] === "Stop") {
      for (const key in piecesCollection) {
        console.log(`${key} -> Composer: ${piecesCollection[key].pieceInformation}, Key: ${piecesCollection[key].keyValue}`);
     }
      break;
    }

    let splittedInput = input[newIndex].split("|");

    
    if (splittedInput[0] === "Add") {
      let pieceName = splittedInput[1];

      let composerName = splittedInput[2];
      
      let keyValue = splittedInput[3];
      
      if (!piecesCollection.hasOwnProperty(pieceName)) {
        piecesCollection[pieceName] = {
          pieceInformation: composerName,
          keyValue,
        };
        
        console.log(
          `${pieceName} by ${composerName} in ${keyValue} added to the collection!`
          );
        } else {
          console.log(`${pieceName} is already in the collection!`);
        }
      } else if (splittedInput[0] === "Remove") {
        let pieceName = splittedInput[1];
        
        if (piecesCollection.hasOwnProperty(pieceName)) {
          delete piecesCollection[pieceName];
          
          console.log(`Successfully removed ${pieceName}!`);
        } else {
          console.log(
            `Invalid operation! ${pieceName} does not exist in the collection.`
            );
          }
        } else if (splittedInput[0] === "ChangeKey") {
          let pieceName = splittedInput[1];
          let newKey = splittedInput[2];

      if (piecesCollection.hasOwnProperty(pieceName)) {
        piecesCollection[pieceName].keyValue = newKey;
        
        console.log(`Changed the key of ${pieceName} to ${newKey}!`);
      } else {
        console.log(
          `Invalid operation! ${pieceName} does not exist in the collection.`
          );
        }
      }
      newIndex++;
    }
  }

thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);

thePianist([
  '4',
  'Eine kleine Nachtmusik|Mozart|G Major',
  'La Campanella|Liszt|G# Minor',
  'The Marriage of Figaro|Mozart|G Major',
  'Hungarian Dance No.5|Brahms|G Minor',
  'Add|Spring|Vivaldi|E Major',
  'Remove|The Marriage of Figaro',
  'Remove|Turkish March',
  'ChangeKey|Spring|C Major',
  'Add|Nocturne|Chopin|C# Minor',
  'Stop'
]
);
