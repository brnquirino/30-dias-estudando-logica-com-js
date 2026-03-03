const products = [
    {id: 1, name: "Notebook", price: 3500, category: "Eletrônicos", stock: 15},
    {id: 2, name: "SmartTV", price: 5000, category: "Eletrônicos", stock: 60},
    {id: 3, name: "Celular", price: 3000, category: "Eletrônicos", stock: 20},
    {id: 4, name: "Violão", price: 3500, category: "Instrumentos", stock: 40},
    {id: 5, name: "Guitarra", price: 3500, category: "Instrumentos", stock: 100},
    {id: 6, name: "Mesa", price: 3500, category: "Móveis", stock: 240},
    {id: 7, name: "Sofá", price: 3500, category: "Móveis", stock: 34}
];

let cart = [];



const productsList = () => products.forEach(product => {console.log(`ID: ${product.id} - PRODUTO: ${product.name} - PREÇO: ${product.price} - CATEGORIA: ${product.category} - ESTOQUE: ${product.stock}`)});



const categoryList = (category) => {
    const filtered = products.filter
    (product =>
        product.category.toLowerCase() === category.toLowerCase());


    filtered.forEach(product => {
        console.log (`ID: ${product.id} - PRODUTO: ${product.name} - PREÇO: ${product.price} - CATEGORIA: ${product.category} - ESTOQUE: ${product.stock}`)});
};



const addByCart = (id) => {
    const product = products.find(p => p.id === id);

    if (!product){
        console.log("Produto inexistente");
        return;
    }

    if (product.stock <= 0){
        console.log("Sem estoque do produto");
        return;
    }

    const itemInCart = cart.find(p => p.id === id);

    if (itemInCart) {
        itemInCart.stock++;
    } else {
        cart = [...cart, { ...product, stock: 1 }];
    }

    product.stock--;

    console.log("Produto adicionado ao carrinho");
};



const removeToCart = (id) => {
    const exists = cart.find(product => product.id === id);

    if (!exists) {
        console.log("Produto não encontrado");
        return;
    };

    cart = cart.filter(product => product.id !== id);

    console.log("Produto removido do carrinho");
};



const totalCalculate = (myCart) => 
    myCart.reduce((total, product) => 
        total + product.price * product.stock, 0);


const categoryValues = (category, value) => { 
    products.forEach(product => {
        if (product.category.toLowerCase() === category.toLowerCase()) {
            product.price += value;
        }
    });
};



const valorAcima = (valor) => {
    const acima = products.filter(product =>(product.price > valor));

    acima.forEach(product => (console.log (`ID: ${product.id} - PRODUTO: ${product.name} - PREÇO: ${product.price} - CATEGORIA: ${product.category} - ESTOQUE: ${product.stock}`)))};






let option;

do {

    option = Number(prompt(`
        1 - Listar todos os produtos
        2 - Listar produtos por categoria
        3 - Adicionar produto ao carrinho
        4 - Remover produto do carrinho
        5 - Ver carrinho
        6 - Calcular total do carrinho
        7 - Aumentar preço de uma categoria
        8 - Buscar produtos acima de um valor
        0 - Sair
        `));

    switch(option){
        case 1://Listar todos os produtos
            productsList();
            break;

        case 2://Listar produtos por categoria
            let filter = prompt("Qual categoria de itens deseja pesquisar?");
            categoryList(filter);
            break;
        case 3://Adicionar produto ao carrinho
            let id = Number(prompt("Id do produto que deseja"));
            addByCart(id);
            break;

        case 4://Remover produto do carrinho
            const remove = Number(prompt("Qual produto deseja remover do carrinho?"));
            removeToCart(remove);
            break;

        case 5://Ver carrinho
            const showItens = cart.forEach(product => { console.log (`ID: ${product.id} - PRODUTO: ${product.name} - PREÇO: ${product.price} - CATEGORIA: ${product.category} - ESTOQUE: ${product.stock}`)});
            break;
        case 6://Calcular total do carrinho
            console.log(`Total do carrinho: R$ ${totalCalculate(cart)}`);
            break;
        case 7://Aumentar preço de uma categoria
            const category = prompt("Qual categoria deseja mexer?");
            const value = Number(prompt("Qual o valor que deseja adiconar a categoria?"));
            categoryValues(category, value);
            break;
        
        case 8://Buscar produtos acima de um valor
            const upperValue = Number(prompt("Deseja buscar produtos acima de que valor?"))
            valorAcima(upperValue)
            break;
            
        case 0:
    }
}while(option !== 0);
