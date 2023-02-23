async function buscaPokemon() {
    const resultado = await fetch('https://pokeapi.co/api/v2/pokemon')
    const jsonPokemon = await resultado.json()
    console.log(jsonPokemon);
   jsonPokemon.results.forEach(element => {
  buscaPokemonPorUrl(element.url)
   });
}


buscaPokemon()

async function buscaPokemonPorUrl(url) {
    const resultado = await fetch(url)
    const item = await resultado.json()
   console.log(item);
   document.getElementById('app').innerHTML += `
<div id='pokemon'> 
<h2>${item.name}</h2>
<img src='${item.sprites.front_default}' >
</div>

`
}




