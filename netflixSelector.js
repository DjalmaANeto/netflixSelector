var moviesMap = new Map;
var keyNo = "No";
var keyYes = "Yes";

moviesMap = [
    [keyNo, "A escavação"],
    [keyNo, "Tigre branco"],
    [keyNo, "Os 7 de Chicago"],
    [keyYes, "História de um casamento"],
    [keyNo, "O Irlandês"],
    [keyNo, "A balada de Buster Scruggs"],
    [keyNo, "Mad Max: estrada da fúria"],
    [keyNo, "Bastardos inglórios"],
    [keyYes, "Brilho eterno de uma mente sem lembranças"],
    [keyNo, "Gladiador"],
    [keyNo, "O tigre e o dragão"],
    [keyNo, "Beleza Américana"],
    [keyNo, "O profissional"],
    [keyNo, "A lista de Shindler"],
    [keyNo, "Scarface"],
    [keyNo, "Canvas"],
    [keyNo, "Estou Pensando em Acabar com Tudo"],
    [keyNo, "Paddleton"],
    [keyNo, "O Poço"],
    [keyNo, "Bird Box"],
    [keyNo, "Durante a Tormenta"],
    [keyNo, "O Vazio do Domingo"],
    [keyNo, "Mother!"],
    [keyNo, "O Hospedeiro"],
    [keyNo, "O Homem sem Gravidade"],
    [keyNo, "Lazzaro Felice"],
    [keyNo, "Okja"],
    [keyNo, "Animais Fantásticos e Onde Habitam"],
    [keyNo, "A Bruxa"],
    [keyNo, "Gabo: A Criação de Gabriel García Márquez"],
    [keyNo, "Scott Pilgrim Contra o Mundo"],
    [keyNo, "Brilho Eterno de uma Mente sem Lembranças"],
    [keyNo, "Peixe Grande e Suas Histórias Maravilhosas"],
    [keyNo, "A Lenda do Cavaleiro sem Cabeça"],
    [keyNo, "Ali no Queens"],
    [keyNo, "À Segunda Vista"],
    [keyNo, "A Incrível História da Ilha das Rosas"],
    [keyNo, "A Menina e o Leão"],
    [keyNo, "Eu Não Sou um Homem Fácil"],
    [keyNo, "Toc Toc"],
    [keyNo, "Nuestros Amantes"],
    [keyNo, "Família do Bagulho"],
    [keyNo, "Meninas Malvadas"],
    [keyNo, "Un Padre No Tan Padre"]
    //insert more netflix movies in this map :D !
];

let min = 1;
let max = moviesMap.size;
var RandomOperator = (min, max) => {
    return Math.random() * (max - min) + min;
};

function menu() {
    // its is a beatiful example of prompt input 
    // const readline = require("readline");
    // const rl = readline.createInterface({
    //     input: process.stdin,
    //     output: process.stdout
    // });

    // rl.question("What is your name ? ", (name) => {
    //     rl.question("Where do you live ? ", (country) => {
    //         console.log(`${name}, is a citizen of ${country}`);
    //         rl.close();
    //     });
    // });

    // rl.on("close", () => {
    //     console.log("\nBYE BYE !!!");
    //     process.exit(0);
    // });
}

menu();