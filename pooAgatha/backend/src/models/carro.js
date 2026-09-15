console.log("Classes Carro")

// criar classes (molde)

class Carro {

    idCarro;
    nome;
    cor;
    disponivel;
    anoFabricacao;

    // método especial construtor
    constructor(idCarro, nome, cor, disponivel, anoFabricacao) {

        this.idCarro = idCarro;
        this.nome = nome;
        this.cor = cor;
        this.disponivel = disponivel;
        this.anoFabricacao = anoFabricacao;

    }

}

// instanciando = construir um objeto

const c1 = new Carro(1, "Civic", "Preto", true, 2022);

const c2 = new Carro(2, "Corolla", "Branco", true, 2023);

const c3 = new Carro(3, "Gol", "Vermelho", false, 2020);


// mostrando os objetos no console

console.log(c1);
console.log(c2);
console.log(c3);


// modificando valores

c1.nome = "Honda Civic";
c1.cor = "Prata";

console.log(c1);


c2.disponivel = false;

console.log(c2);


console.log("Nome do Carro: " + c3.nome + 
            " | Cor: " + c3.cor + 
            " | Disponível: " + c3.disponivel + 
            " | Ano: " + c3.anoFabricacao);