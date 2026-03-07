let menu = -1

while (menu !== 0){

    let select = Number(prompt(`
            Qual conta deseja fazer?
            1- Celsius para Fahrenheit
            2 - Fahrenheit para Celsius
            0 - Sair`));

    switch (menu){
        
        case 1:
            let celsius = Number(prompt(`Quanto celsius deseja converter?`));
            
            if (isNaN(celsius)){
                console.log(`Valor inválido!`);
                break
            } else {

                let fahrenheit = (celsius * 9/5) + 32;
                console.log(`${celsius}°C = ${fahrenheit}°F`);
            };
        break;


        case 2:
            let f = Number(prompt(`Quantos fahrenheit deseja converter?`));

            if (isNaN(f)){
                console.log(`Valor inválido!`);
            } else {
                let c = (f - 32) * 5/9;
                console.log(`${f}°F = ${c.toFixed(2)}°C`);
            };
        break;

        case 0:
            console.log(`Encerrando programa...`);
        break;

        default:
            console.log("Opção inválida!");
    };   
};