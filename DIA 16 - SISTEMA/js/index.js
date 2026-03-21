let menu = -1;

let usuarios = [];

let userId = 1;

class Usuario{
    constructor(id, nome, email){
        this.id = id;
        this.nome = nome;
        this.email = email;
    }

    getInfo(){
        return `ID: ${this.id} - Nome: ${this.nome} - Email: ${this.email}`
    };

}


const criarUsuario = (nome, email) =>{
    const usuario = new Usuario (userId++, nome, email);
    usuarios.push(usuario);
    console.log("Cadastro realizado com sucesso");
}


const pesquisar = () =>{
    if (usuarios.length === 0){
        console.log("Nenhum usuário cadastrado");
    } else {
        usuarios.forEach(usuario => console.log(usuario.getInfo()));
    };
}


const delUser = (id) => {
    const index = usuarios.findIndex(u => u.id === id);
            if(index !== -1){
                usuarios.splice(index, 1);
                console.log("Usuário deletado com sucesso");
            } else {
                console.log("Usuário não encontrado")
            }
}


do {
    
    menu = Number(prompt(`
        ---- MENU ----
        1 - Criar usuário
        2 - Pesquisar usuário
        3 - Deletar usuário
        0 - Sair do App
        `))

    switch(menu){
        case 1:// criar usuario
            const nome = prompt("Digite seu nome");
            const email = prompt("Digite seu email");
            criarUsuario(nome, email);
            break;

        case 2://pesquisar usuários
            pesquisar();
            break;
        
        case 3://deletar usuário
            const deleteId = Number(prompt("informe o ID que deseja deletar:"));
            delUser(deleteId);
            break;

        case 0://sair
        console.log();
            break;
    }

} while (menu != 0);