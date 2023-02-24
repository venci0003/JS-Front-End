function censorWords(textInput,wordToCensor){
    while(textInput.includes(wordToCensor)){
        textInput = textInput.replace(wordToCensor,'*'.repeat(wordToCensor.length));
    }

    console.log(textInput);
}