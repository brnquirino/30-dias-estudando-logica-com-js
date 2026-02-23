let menu = -1

let tarefas = []

while (menu !== 0){
     
    menu = Number(prompt("1 - Adicionar tarefa \n2 - Listar de tarefas \n0 - Fechar programa"))

    switch (menu){
        case 1:
             let descTarefa = prompt("Descrição da lista")

             let novaTarefa = {
                id: tarefas.length + 1,
                descricao: descTarefa,
                concluido: false
             }
            tarefas.push(novaTarefa)
            console.log("Nova terefa adicionada")
            break

        case 2:
            console.log("Lista de tarefas")
             
            for (let i = 0; i < tarefas.length; i++){
                let tarefa = tarefas[i]
                let status
                if (tarefa.concluido){
                    status = "Concluído"
                } else {
                    status = "Pendente"
                }
                console.log(`${tarefa.id} - ${tarefa.descricao} - ${status}`)
            } 
             break
             
        case 0:
            break
    }
}

console.log("Fim do Programa")