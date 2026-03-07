let score = 0;

let answer1 = prompt(`Qual linguagem roda no navegador?\nA) Python\nB) Java\nC) JavaScript\nD) C++`);

if (answer1.toLocaleUpperCase() === "C"){
    score += 100;
    console.log(`\nResposta correta!`);
    console.log(`Você recebeu 100 pontos!`);
} else {
    console.log(`\nResposta errada!`);
    console.log(`A resposta correta é C) JavaScript`);
};

let answer2 = prompt(`O HTML é uma linguagem de:\nA) Marcação\nB) Estilização\nC) Programação\nD) Interpretação`)

if (answer2.toLocaleUpperCase() === "A"){
    score += 100;
    console.log(`\nResposta correta!`);
    console.log(`Você recebeu 100 pontos!`);
} else {
    console.log(`\nResposta errada!`);
    console.log(`A resposta correta é A) Marcação`);
};

let answer3 = prompt(`O CSS é uma linguagem de:\nA) Programação\nB) Estilização\nC) Marcação\nD) Interpretação`);

if (answer3.toLocaleUpperCase() === "B"){
    score += 100;
    console.log(`\nResposta correta!`);
    console.log(`Você recebeu 100 pontos!`);
} else {
    console.log(`\nResposta errada!`);
    console.log(`A resposta correta é B) Estilização`);
};


if (score === 300) {
    console.log("\nVocê é um monstro 😈🔥");
    console.log(`Você alcançou ${score} pontos`);
} else if (score === 200) {
    console.log("\nMandou bem 👏");
    console.log(`Você alcançou ${score} pontos`);
} else {
    console.log("\nBora estudar mais 😅");
        console.log(`Você alcançou ${score} pontos`);
};







