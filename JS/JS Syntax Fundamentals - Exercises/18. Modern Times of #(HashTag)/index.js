function findHashtag(text){
    let textTokens = text.split(" ");

    for (let i = 0; i < textTokens.length; i++) {
        let currentWord = textTokens[i];
        
        if (currentWord.startsWith("#") && /^[a-zA-Z]+$/.test(currentWord.substring(1))) {
           currentWord = currentWord.substring(1);
           console.log(currentWord);
        }
    }
}

