let menu = -1;

const usuarios = [];

let logado = null;

let userId = 1;

class Usuario {
    constructor(id, nome, email, senha){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    getInfo(){
        return `ID: ${this.id} - Nome: ${this.nome} - Email: ${this.email}`
    }

    setNome(novoNome){
        this.nome = novoNome;
    };

    setEmail(novoEmail){
        this.email = novoEmail;
    }

    setSenha(novaSenha){
        this.senha = novaSenha;
    }
}


const criarConta = (nome, email, senha) =>{
    const novoUsuario = new Usuario(userId, nome, email, senha);
    usuarios.push(novoUsuario);
    userId++
    return "Usuário cadastrado com sucesso"
}


const usuarioLogin = (email, senha) =>{
    let encontrado = false;
    for (let usuario of usuarios){
        if (usuario.email === email){
            encontrado = true

            if (usuario.senha === senha){
                logado = usuario;
                console.log("Usuário logado com sucesso");
                return
            } else {
            console.log("Senha de usuário incorreta");
            return
            }
        }
    }

    if (!encontrado){
        console.log("Usuário não cadastrado no sistema")
        return
    };
}

const deletarUsuario = (email, senha) => {

    for (let usuario of usuarios){
        if (usuario.email === email && usuario.senha === senha){
            const indice = usuarios.indexOf(usuario)
            usuarios.splice(indice, 1)
            logado = null;
            console.log("Conta deletada com sucesso");
            return
        }
    }
    
    console.log("Informações incorretas");
}


do {

    menu = Number(prompt(`
        ---- MENU DO LOGIN ----
        1 - Criar usuário
        2 - Login de conta
        0 - Fechar aplicativo
        `));

    switch(menu){

        case 1://criar conta
            const nomeDeUsuario = prompt("Digite seu Nome:");
            const emailDeUsuario = prompt("Digite seu Email.");
            const senhaDeUsuario = prompt("Digite sua senha:");

            console.log(criarConta(nomeDeUsuario, emailDeUsuario, senhaDeUsuario));
            break;

        case 2://login
            const email = prompt("Digite seu email de usuário:");
            const senha = prompt("Digite sua senha:");
            let login = usuarioLogin(email, senha);

            if (logado !== null){
                
                let menuUsuario = 0;

                while(menuUsuario !== 4) {
                    menuUsuario = Number(prompt(`
                        ---- MENU DO USUÁRIO ----
                        1 - Ver Perfil
                        2 - Alterar Perfil
                        3 - Deletar conta
                        4 - Logout
                        `))
                    switch(menuUsuario){
                        case 1:
                            console.log(logado.getInfo());
                            break;
                        case 2:

                            let altPerfil;

                            do{
                                
                                altPerfil = Number(prompt(`
                                Oque deseja alterar?
                                1 - Nome
                                2 - Email
                                3 - Senha
                                4 - Voltar
                                `));
                                
                                switch(altPerfil){
                                    case 1:
                                        const novoNome = prompt("Digite seu nome:");
                                        logado.setNome(novoNome);
                                        console.log("Nome alterado com sucesso");
                                        break
                                    case 2:
                                        const novoEmail = prompt("Digite seu novo Email:");
                                        logado.setEmail(novoEmail);
                                        console.log("Email alterado com sucesso");
                                        break
                                    case 3:
                                        const novaSenha = prompt("Digite sua nova senha");
                                        logado.setSenha(novaSenha);
                                        console.log("Senha alterada com sucesso")
                                        break
                                    case 4:
                                        console.log("Voltando...")
                                        break
                                    }
                                } while(altPerfil !== 4) 
                            break;

                        case 3:
                            const confirmarEmail = prompt("Digite o email da conta que deseja deletar:");
                            const confirmarSenha = prompt("Confirme sua senha:")
                            
                            deletarUsuario(confirmarEmail, confirmarSenha);

                            if (logado === null){
                                menuUsuario = 4;
                            }                            
                            break;

                        case 4:
                            logado = null;
                            console.log("Logout realizado")
                            break;
                    }
                };
            }
            break;
        case 0://sair
            break;

    }
} while (menu !== 0)