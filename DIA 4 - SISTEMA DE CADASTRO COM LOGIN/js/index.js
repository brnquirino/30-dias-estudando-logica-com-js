let menu = -1;

let users = [];

let id = 1;

let loggedUser = null;

while (menu !== 0){

    if (loggedUser === null){
        console.log("\n==== BEM VINDO ====");
        menu = Number(prompt("1 - Faça seu cadastro\n2 - Faça seu login\n0 - Sair"));


        switch (menu){
            
            case 1:
                console.log("---- INICIANDO CADASTRO ----");
                let name = prompt("Digite seu nome:");
                let age = Number(prompt("Digite sua idade:"))
                let email = prompt("Digite seu email:");
                let password = prompt("Digite sua senha:");

                let emailExists = false;

                for (let i = 0; i < users.length; i++){

                    if (users[i].email === email){
                        emailExists = true;
                        break;
                    }
                };

                if (emailExists){
                    console.log("Email já cadastrado!\nTente outro.");
                } else {
                    users.push({
                    id,
                    name,
                    age,
                    email,
                    password
                    })
                    console.log("Parabéns sua conta foi criada com sucesso!");
                    id++ 
                };
            break;


            case 2:
                console.log("---- TELA DE LOGIN ----");
                let emailUser = prompt("Digite seu email:");
                let passwordUser = prompt("Digite sua senha:");

                let confirm = false;

                for (let i = 0; i < users.length; i++){
                    if (users[i].email === emailUser && users[i].password === passwordUser){
                        confirm = true;
                        loggedUser = users[i];
                        break;
                    };
                }

                if (!confirm){
                    console.log("Infelizmente não foi possível realizar o login.")
                } else {
                    console.log("Login realizado com sucesso!");
                    }

            break;

            case 0:
                console.log("==== SAIU DO PROGRAMA ====");
            break;
        
        };

    } else {
        
        console.log(`\n==== BEM VINDO ${loggedUser.name.toUpperCase()} ====`);
        menu = Number(prompt("1 - Ver perfil\n2 - Editar perfil\n3 - Deletar conta\n4 - Logout\n0 - Sair"));

        
        switch (menu){
            
            case 1:
                console.log("---- PERFIL PESSOAL ----");
                console.log(`
                    Nome de Perfil: ${loggedUser.name}
                    Idade: ${loggedUser.age}
                    Email: ${loggedUser.email}`);
            break;


            case 2:
                console.log("---- EDITOR DE PERFIL ----");
                let edit = Number(prompt("Oque deseja editar?\n1 - Nome\n2 - Idade\n3 - Email\n4 - Senha\n0 - Retornar"));
                
                switch (edit){
                    

                    case 1:
                        let newName = prompt("Digite seu novo nome:");
                        loggedUser.name = newName;
                        console.log(`Nome atualizado com sucesso!`);
                    break;


                    case 2:
                        let newAge = Number(prompt("Digite sua nova idade:"));
                        loggedUser.age = newAge;
                        console.log("Idade atualizada com sucesso!");
                    break;


                    case 3:
                        let newEmail = prompt("Digite seu novo email:");

                        let emailExists = false;

                        for (let i = 0; i < users.length; i++){
                            if (newEmail === users[i].email && users[i] !== loggedUser){
                                emailExists = true;
                                break;
                            };
                        };

                        if (emailExists){
                            console.log("Esse email está cadastrado em outra conta!");
                        } else {
                            loggedUser.email = newEmail;
                            console.log("Email cadastrado com sucesso!");
                        }
                    break;


                    case 4:
                        let newPassword = prompt("Digite sua nova senha:");
                        loggedUser.password = newPassword;
                        console.log("Senha atualizada com sucesso!");
                    break;


                    case 0:
                        console.log("Retornado...")
                    break;
                };
            break;

            case 3:

                console.log("---- SESSÃO DE EXCLUSÃO DE CONTA ----");
                let confirmDelete = Number(prompt(`
                    Tem certeza que deseja excluir sua conta?
                    1 - Sim
                    2 - Não`));


                switch (confirmDelete){

                    case 1:
                        for (let i = 0; i < users.length; i++){
                            if(users[i].id === loggedUser.id){
                                users.splice(i,1);
                                break;  
                            };
                        };
                        
                        console.log("Conta Excluída.");
                        console.log("Usuário deslogado.");
                        loggedUser = null;
                    break


                    case 2:
                        console.log("Operação cancelada.");
                    break;
                    

                    default:
                        console.log("Opção inválida");
                }; 
            break;

            case 4:
                loggedUser = null
                console.log("Logout realizado com sucesso!")
            break;

            case 0:
                console.log("==== SAIU DO PROGRAMA ====")
            break;
        
        };
    }

}