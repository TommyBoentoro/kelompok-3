function consolelog(str, num){
    for(let i = 0; i < num; i++){
        console.log(str)
    }

    return consolelog
}

consolelog('Hello World', 5)