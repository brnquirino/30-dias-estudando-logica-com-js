let menu = -1;

let contas = [];

let logado = null;

let id = 1;


function registro(){
    console.log(`
        ==== TELA DE CADASTRO ====
        `);


    let nome = prompt("Digite seu nome:");
    let sexo = prompt(`Sexo:`);
    let idade = Number(prompt(`Idade:`));
    let email = prompt(`Email:`);
    let senha = prompt(`Senha:`);


    let emailExistente = false;
    

    for (let i = 0; i < contas.length; i++){
        if (email === contas[i].email){
            emailExistente = true;
            break;
        };
    };


    if (emailExistente){
        console.log(`Email ja cadastrado!`);
    } else {
        contas.push({
            id,
            nome,
            sexo,
            idade,
            email,
            senha,
            saldo: 0,
            extrato: []
        });
        console.log(`Parabéns, sua conta foi criada!`);
        id++;
    };
};



function logarNaConta(){
    console.log(`
        ==== TELA DE LOGIN ====
        `);


    let emailLogin = prompt(`Digite seu email:`);
    let senhaLogin = prompt(`Digite sua senha:`);

    let confirmação = false;

    
    for (let i = 0; i < contas.length; i++){
        if (emailLogin === contas[i].email && senhaLogin === contas[i].senha){
            confirmação = true;
            logado = contas[i];
            break;
        };
    };


    if (!confirmação){
        console.log(`Login Falhou!`);
    } else {
        console.log(`Login realizado com sucesso!`);
    };
};



function verSaldo(){
    console.log(`
        ==== PAINEL DE SALDO ====
        `)

    if (logado.saldo === 0){
        console.log(`Sem saldo disponível.`);
    } else {
        console.log(`Seu saldo é de: R$ ${logado.saldo}`);
    };
};



function verExtrato(){
    console.log(`
        ==== PAINEL DE EXTRATO ====
        `)

    if (logado.extrato.length === 0){
        console.log(`Sem movimentações.`);
    } else {
        for (let i = 0; i < logado.extrato.length; i++){
            console.log(`${logado.extrato[i].tipo} - ${logado.extrato[i].valor}`);
        };
    };
};



function depositar(){
    console.log(`
        ==== SESSÃO DE DEPÓSITO ====
        `);
    
    let deposito = Number(prompt(`Quanto deseja depositar?`));

    if (deposito <= 0){
        console.log(`Valor inválido!`);
    } else {
        logado.saldo = logado.saldo + deposito;

        logado.extrato.push({
            tipo: "Depósito",
            valor: deposito
        });

        console.log(`
            Deposito realizado com sucesso!
            Valor depositado: R$ ${deposito}`);
    };
};



function sacar(){
    console.log(`
        ==== SESSÃO DE SAQUE ====
        `);
    
    let saque = Number(prompt(`Quanto deseja sacar?`));

    if (saque > logado.saldo){
    console.log("Saldo insuficiente!");
    return;
    }

    if (saque <= 0){
        console.log(`Valor inválido!`);
    } else {
        logado.saldo = logado.saldo - saque;

        logado.extrato.push({
            tipo: "Saque",
            valor: saque
        });

        console.log(`
            Deposito realizado com sucesso!
            Valor depositado: R$ ${saque}`);
    };
};



function transferir(){
    console.log(`
        ==== SESSÃO DE TRANSFERÊNCIA ====
        `);
        
    let transferencia = Number(prompt(`Quanto deseja transferir?`));
    
    if (transferencia <= 0){
        console.log(`Valor inválido!`);
        return;
    };

    if (transferencia > logado.saldo){
        console.log(`Saldo insuficiente!`);
        return;
    }

    let endereco = prompt(`Informe o email da conta que deseja transferir:`);

    let contaExiste = false

    for (let i = 0; i < contas.length; i++){
        
        if (endereco === contas[i].email){
            if (contas[i].email === logado.email){
                console.log(`Não é possível transferir para a propria conta!`);
                return;
            };

            contaExiste = true;
            logado.saldo -= transferencia;
            logado.extrato.push({
                tipo: `Transferência`,
                valor: transferencia
            })
            contas[i].saldo += transferencia;
            contas[i].extrato.push({
                tipo: `Transferência recebida`,
                valor: transferencia
            });
            break;
        };
    };

    if (!contaExiste){
        console.log(`Essa conta não existe!`);
    } else {
        console.log(`Transferência realizada com sucesso!`);
    };
};



while (menu !== 0){

    if (logado === null){

        console.log(`==== BEM VINDO AO BANK ====`);

        menu = Number(prompt(`
            Oque deseja fazer?
            1 - Criar conta
            2 - Login
            0 - Fechar Programa`));

        switch (menu){    

            case 1:
                registro();
            break;

            case 2:
                logarNaConta();
            break;

            case 0:
                console.log(`
                    ==== SAINDO DO PROGRAMA ====
                    `);
            break;

            default:
            console.log("Opção inválida!");
        };

    } else {

        console.log(`
            ==== BEM VINDO ${logado.nome}! ====
            `);


            menu = Number(prompt(`
                Menu da conta
                1 - Saldo
                2 - Depositar
                3 - Saca
                4 - Transferência
                5 - Extrato
                6 - Logout
                0 - Fechar Programa`));
            
        switch (menu){
            
            case 1:
                verSaldo();
            break;

            case 2:
                depositar();
            break;

            case 3:
                sacar();
            break;

            case 4:
                transferir();
            break;

            case 5:
                verExtrato();
            break;

            case 6:
                console.log(`
                    Deslogado...
                    `);

                logado = null;
            break;

            case 0:
                console.log(`
                    ==== SAINDO DO PROGRAMA ====
                    `);
            break;
            default:
                console.log(`Opção inválida!`);
        };
        
    };
};
