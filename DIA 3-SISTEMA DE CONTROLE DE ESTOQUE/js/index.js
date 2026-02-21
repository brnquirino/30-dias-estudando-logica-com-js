let menu = -1

let stock = [];

let nextId = 1;

while (menu !== 0){

    console.log("\n==== SISTEMA DE ESTOQUE ====");
    console.log("1 - Cadastrar produto")
    console.log("2 - Listar produtos")
    console.log("3 - Entrada de estoque")
    console.log("4 - Saída de estoque")
    console.log("5 - Produtos com estoque baixo")
    console.log("0 - Sair")

    menu = Number(prompt("Oque deseja fazer?"))

    switch (menu){

        case 1:
            let name = prompt("\nNome do produto:");
            let price = Number(prompt(`Preço do ${name}:`));
            let amount = Number(prompt("Quantidade do produto:"));

            stock.push({
                id: nextId,
                product: name,
                price,
                amount,
            });

            nextId++;
            console.log("Produto cadastrado");
        break

        case 2:
            console.log("\n------ LISTA DE PRODUTOS ------");
            if (stock.length !== 0){
                for (let i = 0; i < stock.length; i++){
                    console.log(`${stock[i].id} - ${stock[i].product} - Preço: R$ ${stock[i].price} - Quantidade: ${stock[i].amount}`)
                };
            } else {
                console.log("Sem produtos registrados.");
            };
        break

        case 3:
            console.log("\n------ ENTRADA DE PRODUTOS ------");
            let entryId = Number(prompt("A qual produto deseja adicionar?"));
            let foundEntry = false

            for (let i = 0; i < stock.length; i++){
                if (stock[i].id === entryId){
                    let amountProduct = Number(prompt("Quanto deseja adicionar ao estoque?"));
                    stock[i].amount += amountProduct;
                    console.log(`Foi adicionado mais ${quantidade} em ${stock[i].product}`);
                    foundEntry = true;
                    break;
                };
            };

            if (foundEntry === false){
                console.log("Nenhum produto encontrado.");
            };

        break

        case 4:
            console.log("\n------ SAÍDA DE PRODUTOS ------");
            let outputId = Number(prompt("Qual produto deseja registrar saída?"));
            let foundOut = false;

            for (let i = 0; i < stock.length; i++){
                if (stock[i].id === outputId){
                    foundOut = true;
                    let output = Number(prompt(`Quanto de ${stock[i].product} saiu de estoque?`));
                    if (output <= 0){
                        console.log("Quantidade inválida");
                    } else if (output > stock[i].amount){
                        console.log("Quantidade em estoque indisponível para saída");
                    } else {
                        stock[i].amount -= output;
                        console.log(`Foi removido ${output}.und de ${stock[i].product} do estoque.`);
                        break;
                    };
                };
            };
            
            if (foundOut === false){
                console.log("Nenhum produto encontrado.");
            };
            
        break

        case 5:
            console.log("\n------ VERIFICANDO ITENS COM ESTOQUE BAIXO ------");
            let lowStock = false;

            for (let i = 0; i < stock.length; i++){
                if (stock[i].amount <= 100){
                    console.log(`Seu estoque de ${stock[i].product} está baixo!\nQuantidade em estoque: ${stock[i].amount}`);
                    console.log("------------------------");
                    lowStock = true
                };
            };
            if (lowStock === false){
                console.log("Nenhum produto está com estoque baixo.");
            };
        break

        case 0:
            console.log("\n------ PROGRAMA FECHADO ------");
        break
    }
}