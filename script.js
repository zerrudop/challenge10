async function fetchData(num){
    try{

        const pokemonName = document.getElementById("pokemonName".concat(num)).value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const height = data.height;
        const weight = data.weight;
        const type = data.types[0].type.name;
        const imgElement = document.getElementById("pokemonSprite".concat(num))

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        document.getElementById("type".concat(num)).innerHTML = type;
        document.getElementById("height".concat(num)).innerHTML = height;
        document.getElementById("weight".concat(num)).innerHTML = weight;

        const pokeData = [pokemonName,type,height,weight]
        return pokeData
    }
    catch(error){
        console.error(error);
    }
}

function findAvg(num1,num2){
    const sum = num1 + num2;
    const avg = sum/2;
    return avg
}

function createPokemon(data1,data2){
    (async () => {
    console.log(await fetchData('1'));
    var pokemon1 = await fetchData('1');
    var pokemon2 = await fetchData('2');
    const name1=pokemon1[0];
    const name2=pokemon2[0];
    const type1=pokemon1[1];
    const type2=pokemon2[1];
    const height1=pokemon1[2];
    const height2=pokemon2[2];
    const weight1=pokemon1[3];
    const weight2=pokemon2[3];
    const newName = mashNames(name1,name2)
    newHeight=findAvg(height1,height2);
    newWeight = findAvg(weight1,weight2);
    document.getElementById("pokemonName3").innerHTML = newName;
    document.getElementById("type3").innerHTML = type1 + "/" + type2;
    document.getElementById("height3").innerHTML = newHeight;
    document.getElementById("weight3").innerHTML = newWeight;
    })()
    
}

function mashNames(name1,name2){
    var newName = ""
    for (let i = 0; i < Math.round(name1.length/2); i++) {
        newName = newName + name1.at(i)
    };
    for(let i = Math.round(name2.length/2); i <name2.length; i++){
        newName = newName + name2.at(i)
    }
    console.log(newName)
    return newName;
}