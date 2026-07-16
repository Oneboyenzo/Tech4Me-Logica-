let agenda = [];

function cadastrar() {
    const nome = prompt("Digite um nome:");
    agenda.push(nome);
    console.log(agenda);
}

function listar() {
    if (agenda.length == 0) {
        alert("Não possui nomes cadastrados!");
        return;
    }
    alert("Nomes cadastrados:\n" + agenda.join("\n"));
}

function buscar() {
     const nome = prompt("Digite o nome que está buscando:");
     let encontrou = false;
     let nomesBusca = [];

     for (let i = 0; i < agenda.length; i++){
        let nomeNaLista
        if (nomeNaLista.includes(nome)){
            nomesBusca.push(nomeNaLista);
            encontrou = true;
        }
        
     }

     if (!encontrou){
        alert("Nenhum nome encontrado!");  
     }

     else{
        alert("Nomes encontrados:\n" + nomesBusca.join("\n"));
     }
}