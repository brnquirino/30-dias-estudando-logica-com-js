const products = [
    { id: 1, name: "Notebook", price: 3500, category: "Eletrônico" },
    { id: 2, name: "Mouse", price: 80, category: "Eletrônico" },
    { id: 3, name: "Teclado", price: 150, category: "Eletrônico" },
    { id: 4, name: "Camiseta", price: 50, category: "Roupa" },
    { id: 5, name: "Tênis", price: 300, category: "Roupa" },
];

let cart = [];



function listProducts(){
    console.log("\nProdutos disponíveis")
    products.forEach(product => { console.log(`${product.name} - ${product.price}`)});
};



function findProductByName(name){
    return products.find(product => product.name.toLowerCase() === name.toLowerCase());
};



function filterByCategory (category){
    return products.filter(product => product.category === category);
};



function addToCart (productName){
    const product = findProductByName(productName);

    if (product){
        cart.push(product);
        console.log("Produto adicionado ao carrinho");
    } else {
        console.log("Produto não encontrado");
    };
};



function showCart(){
    cart.forEach(product => console.log(`${product.name} - R$ ${product.price}`));
};



function calculateTotal(){
    const total = cart.reduce((acc, product) => {
        return acc + product.price;
    }, 0);
    return total;
};



function applyDiscount(){
    const discountedCart = cart.map(product => {
        return {
            ...product,
            price: product.price * 0.9
        };
    });

    return discountedCart;
};



let option;

do {

    option = Number(prompt(`
        1 - LISTA DE PRODUTOS
        2 - BUSCAR PRODUTO
        3 - ADICIONAR AO CARRINHO
        4 - VER CARRINHO
        5 - CALCULAR TOTAL
        0 - SAIR
    `));

    switch (option) {
        case 1:
            listProducts();
            break;

        case 2:
            let name = prompt("Nome do produto:");
            const product = findProductByName(name);

            if (product) {
                console.log(product);
            } else {
                console.log("Produto não encontrado");
            }
            break;

        case 3:
            let productName = prompt("Digite o nome do produto:");
            addToCart(productName);
            break;

        case 4:
            showCart();
            break;

        case 5:
            console.log("Total:", calculateTotal());
            break;

        case 0:
            console.log("Saindo...");
            break;

        default:
            console.log("Opção inválida");
    }

} while (option !== 0);