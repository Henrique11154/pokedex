let select = document.querySelector("#select")
let nomes = "https://pokemon.danielpimentel.com.br/v1/pokemon/lista"

function mostrarMonstro(url){
    for(let i = 0; i <= 904; i++){
        fetch(url).then(resposta => resposta.json())
        .then(pokemon => select.innerHTML += `<option>${pokemon.pokemon[i].nome}</option>`)//select.innerHTML += `<option>${pokemon.pokemon[i].nome}</option>`)
        .catch(erro => console.error(erro))
    }
}
mostrarMonstro(nomes)