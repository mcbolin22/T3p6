const fs = require("node:fs")

console.log("Promise output: " + doesFileExist("./pokemonStats.json"))
console.log("Sync output: " + doesFileExistSync("./pokemonStats.json"))

function doesFileExist(targetPath){
    let result = false;

    // function(data, data, whatever, callbackFunction)
    // fs.exists(targetPath, (doSomethingWithResult()));
    fs.exists(targetPath, (existsResult) => {
        result = existsResult;
        return result;
    });
    
    
    // fs.exists(targetPath).then((existsResult) => {
    //     // if (existsResult){
    //     //     //file does exist
    //     //     result = true;
    //     // } else {
    //     //     //file does not exist
    //     //     result = false;
    //     // }
    //     result = existsResult;
    // }).catch((error) => {
    //     console.error(error);
    // });

    // TODO: Find file logic here
    // Checking takes time. Promises or async/await can be used here

    // return result;
}

function doesFileExistSync(targetPath){
    let result = false;

    if (fs.existsSync(targetPath)){
        //file does exist
        result = true;
    } else {
        //file does not exist
        result = false;
    }

    // TODO: Find file logic here
    // takes time as well, but we can force it to halt the program until it has a result

    return result;
}

function createJsonFile(targetPath, data){
    // TODO: wishlist item because a JSON file already exists for us
}

function loadDataFromFile(targetPath){
    let data = null;

    // TODO: Load data from file logic goes here
    // Reading data from files takes time
    // promises or async/await can be used here

    return data;
}

/*
Technique 1 to modify keys in JSON:
function editPokemonCaught(newData){}
function editFavouriteType(newData){}
function editPokemonCompletionNumber(newData){}

Either way will work but the code parameters will be different.

Technique 2 to modify keys in JSON:
function editKey(targetKey, newData){}

*/

function saveDataToFile(targetPath, data){
    // TODO: write data to JSON file logic goes here
}