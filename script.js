alert("Clique na pokebola para mostrar o pokemon")

// Daniel não esquece de ler o alert


let select = document.querySelector("#select")
let url = "https://pokemon.danielpimentel.com.br/v1/"
let div = document.querySelector("#div")
let pk = document.querySelector("#btnMp")
function pegarPokemon(url){
    for(let i = 0; i <= 904; i++){
        fetch(url).then(resposta => resposta.json())
        .then(pokemon => select.innerHTML += `<option> ${pokemon.pokemon[i].nome} </option>`)//select.innerHTML += `<option>${pokemon.pokemon[i].nome}</option>`)
        .catch(erro => console.error(erro))
    }
} 
pegarPokemon(url + "pokemon/lista")

pk.addEventListener('click',mostrarPK);

function mostrarPK(){
    let namePk = select.value
    fetch(url + `pokemon/nome/${namePk}`).then(res => res.json())
    .then(infopk => div.innerHTML = `<div> <h1>${infopk.pokemon.nome}</h1>
    <p> altura: ${infopk.pokemon.altura} </p>
    <p> peso: ${infopk.pokemon.peso} </p>
    <p> tipo: ${infopk.pokemon.tipo} </p>
    <p> geração: ${infopk.pokemon.geracao}º
    <p> pontos de vida: ${infopk.pokemon.hp} </p>
    <p> ataque: ${infopk.pokemon.atk} </p>
    <img src=${infopk.pokemon.img}> 
    <p> defesa: ${infopk.pokemon.def} </p>
    <p> velocidade: ${infopk.pokemon.speed}
    <h2> evoluções: ${infopk.pokemon.evolucoes}
    </div>`)
    .catch(er => console.erro(er))

}

