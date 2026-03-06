let option;

let nextId = 1;

let users = [];

const createUsers = (name, age, departament) => {
    
    const newUser = {
        id: nextId++,
        name,
        age,
        departament
    };

    users = [...users, newUser];

    return `Nome: ${newUser.name} - Idade: ${newUser.age} - Cargo: ${newUser.departament}`;
};


const getUsersByNameAndDepartment = (name, departament) => {
    return users.filter(user => user.name === name && user.departament === departament);
};



const userUpdate = (id) => {
    const searchId = users.find(user => user.id === id);

    if (!searchId){
        console.log("\nUsuário não encontrado!");
        return;
    };

    const update = Number((prompt(`
        Oque deseja atualizar?
        1 - Nome
        2 - Idade
        3 - Departamento`)));

        if (update === 1){
            const updateName = prompt(`Digite o nome que deseja:`);
            searchId.name = updateName;
            console.log("\nNome atualizado com sucesso!")
        };

        if (update === 2){
            const updateAge = Number(prompt(`Digite a idade atualizada:`));
            searchId.age = updateAge;
            console.log("\nIdade atualizada com sucesso!")
        };

        if (update === 3){
            const updateDepartament = prompt(`Digite para qual departamento deseja atualizar:`);
            searchId.departament = updateDepartament;
            console.log("\nDepartamento atualizado com sucesso!")
        };
};



do{

    option = Number(prompt(`
        1 - Criar usuário
        2 - Buscar usuário
        3 - Atualizar Usuário
        0 -Fechar programa
        `))

    switch(option){
        case 1: //Criar usuário
            const name = prompt("Digite o nome do novo usuário");
            const age = Number(prompt("Digite a idade:"));
            const departament = prompt("Digite o departamento de trabalho:");
            const createUser = createUsers(name, age, departament);
            console.log(createUser);
        break;
        
        
        case 2: //Buscar usuário
            const nameSearch = prompt("Digite o nome do usuário que você procura:");
            const departamentSearch = prompt("Digite em que departamendo deseja realiar a busca:");
            const results = getUsersByNameAndDepartment(nameSearch, departamentSearch);

            if (results.length > 0){
                results.forEach(user => {
                    console.log(`\nUsuário encontrado:\nID: ${user.id} | Nome: ${user.name} | Idade: ${user.age} | Departamento: ${user.departament}`)
                });
            } else {
                console.log("\nNenhum resultado encotrado!");
            };
        break;
        
        
        case 3: //Atualizar usuário
            const userUpdateId = Number(prompt("Qual a ID do usuário que deseja atualizar?"));
            userUpdate(userUpdateId);
            break;
        
        case 0: //Fechar programa
        console.log("Programa fechado...")
        break;
    };

} while(option !== 0);