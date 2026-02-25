let menu = -1;

let nextId = 1;

let vehicles = [];

let totalRevenue = 0;

function register(){

    console.log("---- PAINEL DE REGISTRO DE VEÍCULO ----");

    let plate = prompt("Informe a placa do veículo:");

    let registeredVehicle = false;

    for (let i = 0; i < vehicles.length; i++){
        if (vehicles[i].plate === plate && vehicles[i].exitTime === null){
            registeredVehicle = true;
            break;
        };
    };

    if (registeredVehicle){
        console.log("Veículo já está cadastrado!");
    } else {
        vehicles.push({
            id: nextId,
            plate: plate,
            entryTime: Date.now(),
            exitTime: null
        });

        nextId++;
        console.log("Veículo registrado com sucesso!");
    };
};



function exitOfVehicles(){
    console.log(`---- SAÍDA DE VEÍCULOS ----`);

    let plate = prompt(`Informe a placa do veículo que deseja retirar:`);

    let vehicleFound = null;

    for (let i = 0; i < vehicles.length; i++){
        if (vehicles[i].plate === plate && vehicles[i].exitTime === null){
            vehicleFound = vehicles[i];
            break;
        };
    };

    if (vehicleFound === null){
        console.log(`Veículo não cadastrado, ou já saiu...`);
        return;
    };

    vehicleFound.exitTime = Date.now();

    let hours = (vehicleFound.exitTime - vehicleFound.entryTime) / (1000 * 60 * 60);
    let totalHours = Math.ceil(hours);
    let price = totalHours * 5;

    totalRevenue += price;

    console.log(`Tempo estacionado: ${totalHours} horas`);
    console.log(`Valor a pagar: R$ ${price}`);

};



function listVehicles(){
    console.log("---- LISTA DE VEÍCULOS ----");

    let hasVehicles = false;

    for (let i = 0; i < vehicles.length; i++){
        if (vehicles[i].exitTime === null){
            console.log (`Placa: ${vehicles[i].plate} - Entrada: ${vehicles[i].entryTime}`);
            hasVehicles = true;
        };
    };

    if (!hasVehicles){
        console.log(`Nenhum veículo cadastrado...`);
    };

};




function showRevenue(){
    console.log(`---- TOTAL FATURADO ----`);
    console.log(`Total em caixa: ${totalRevenue}`);
};


while (menu !== 0){

    menu = Number(prompt(`
        1 - Registrar entrada de veículo
        2 - Registrar saída de veículo
        3 - Lista de carros estacionados
        4 - Total faturado
        0 - Sair`));

    if (menu === 1){
        register();
    } else if (menu === 2){
        exitOfVehicles();
    } else if (menu === 3){
        listVehicles();
    } else if (menu === 4){
        showRevenue();
    } else if (menu === 0){
        console.log(`FECHANDO PROGRAMA...`)
    };
};