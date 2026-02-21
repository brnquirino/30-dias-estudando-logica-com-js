
let menu = -1;

let balance = 0;

let extract = [];

while (menu !== 0){
    menu = Number(prompt("1 - Ver Saldo\n2 - Depositar\n3 - Sacar\n4 - Transferir\n5 - Extrato\n0 - Sair"));

    switch (menu){
        case 1:
            console.log(`Seu saldo em conta é de: ${balance}`);
        break;
        
        case 2:
            let depositAmount = Number(prompt("Quanto deseja depositar?"));
            balance += depositAmount;
            if (depositAmount > 0){
                extract.push({
                    type: "Depósito",
                    value: depositAmount,
                    balanceAfter: balance
                });
                console.log("Deposito realizado com sucesso");
                    
            } else {
                console.log("Nenhum valor foi depositado");
            }
        break;

        case 3:
            let withdraw = Number(prompt("Quanto deseja sacar?"));
            if (withdraw <= 0) {
                console.log("Valor inválido para saque");
            } else if (balance < withdraw){
                console.log("Saldo insuficiente para realizar saque");
            } else {
                balance -= withdraw;
                extract.push({
                    type: "Saque",
                    value: withdraw,
                    balanceAfter: balance
                });
                console.log(`Você sacou ${withdraw} reais`);
            }

        
        break;

        case 4:
            let transfer = Number(prompt("Quanto deseja transferir?"));

            if (transfer <= 0){
                console.log("Valor inválido para transferência");
            } else if (transfer > balance){
                console.log("Saldo insuficiente para realizar transferência");
            } else {
                balance -= transfer;
                extract.push({
                    type: "Transferência",
                    value: transfer,
                    balanceAfter: balance
                });
                
                console.log(`Sua transferência de ${transfer} foi realizada com sucesso`)
            }
        break

        case 5:
            console.log("Resumo de suas movimentações bancárias")
            if (extract.length === 0){
                console.log("Não houve movimentações");
            } else {
                for (let i = 0; i < extract.length; i++){
                    console.log(`${extract[i].type} - R$ ${extract[i].value} - Saldo: ${extract[i].balanceAfter}`);
                }
            }
        break

        case 0:
        break
    }
}
