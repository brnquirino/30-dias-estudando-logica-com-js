let balance = 0;

let option = -1


function showBalance(){
    console.log(`Seu saldo é de: R$ ${balance}`);
};


function deposit(){
    let depositValue = Number(prompt(`Quanto deseja depositar?`));
    balance += depositValue;
    return depositValue;
};

function sacando(){
    let saque = Number(prompt(`Quando deseja sacar?`));
    if (balance < saque){
        return "Saque indisponivel para esse valor!"
    } else {
        balance -= saque;
        return `Você sacou ${saque}`
    };
};


while (option !== 4){
    option = Number(prompt(`
        1 - Ver Saldo
        2 - Depositar
        3 - Sacar
        4 - Sair`));

    if (option === 1){
        showBalance();
    } else if (option === 2){
        console.log(`Você depositou ${deposit()}`);
    } else if (option === 3){
        console.log(sacando());
    } else {
        
    };
    
};