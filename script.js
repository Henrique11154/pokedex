let select = document.querySelector("#select")
let url = "https://pokemon.danielpimentel.com.br/v1/"
let nomes = "https://pokemon.danielpimentel.com.br/v1/pokemon/lista"
let div = document.querySelector("#div")
var pk = document.querySelector("#btnMp")
function pegarPokemon(url){
    for(let i = 0; i <= 904; i++){
        fetch(url).then(resposta => resposta.json())
        .then(pokemon => select.innerHTML += `<option value="${pokemon.pokemon[i].nome}" class="abajur">${pokemon.pokemon[i].nome}</option>`)//select.innerHTML += `<option>${pokemon.pokemon[i].nome}</option>`)
        .catch(erro => console.error(erro))
    }
}
pegarPokemon(nomes)


