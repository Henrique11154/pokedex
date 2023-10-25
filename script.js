let select = document.querySelector("#select")
let nomes = "https://pokemon.danielpimentel.com.br/v1/pokemon/lista"
let div = document.querySelector(".div")
function pegarPokemon(url){
    for(let i = 0; i <= 904; i++){
        fetch(url).then(resposta => resposta.json())
        .then(pokemon => select.innerHTML += `<option value="${pokemon.pokemon[i].nome}" class="abajur">${pokemon.pokemon[i].nome}</option>`)//select.innerHTML += `<option>${pokemon.pokemon[i].nome}</option>`)
        .catch(erro => console.error(erro))
    }
}
pegarPokemon(nomes)

function mostrarPokemon(){
    nameValue = ab.value
    console.log(nameValue)
}