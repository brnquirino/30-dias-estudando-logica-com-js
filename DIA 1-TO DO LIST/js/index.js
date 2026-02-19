let menu = -1

let tarefas = []

while (menu !== 0){
     
    menu = Number(prompt("1 - Adicionar tarefa \n2 - Listar de tarefas \n0 - Fechar programa"))

    switch (menu){
        case 1:
             let descricao = prompt("Descrição da lista")

             let novaTarefa = {
                id: tarefas.length + 1,
                descricao: descricao,
                concluido: false
             }
            tarefas.push(novaTarefa)
            console.log("Nova terefa adicionada")
            break

        case 2:
             console.log("Lista de tarefas")
             console.log(tarefas)
             break
             
        case 0:
            break
    }
}

console.log("Fim do Programa")