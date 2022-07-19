const os = require('os');
// módulo que mostra detalhes do sistema operacional

// console.log(os);
// testando

// const a = os.cpus();
// console.log(a);

//setInterval(function() {}, 1000); ou
setInterval(() => {
    const { arch, platform, totalmem, freemem} = os;
// desestruturação da variável, que reconhece os
// nomes dos métodos e já os salva dentro de suas respectivas
// constantes

const tRAM = `${parseInt(totalmem()/1024/1024)} MB`;
// tRAM salva o valor de totalmem convertido para MB em seu valor inteiro

const freeRAM = `${parseInt(freemem()/1024/1024)} MB`;
// o mesmo que o anterior, porém com a freemem

const usage = `${((freemem() / totalmem()) *100).toFixed(2)} %`;
// mostra a porcentagem de memória usada com duas casas decimais

const stats = {
    OS: platform(),
    Arch: arch(),
    Totalmem: tRAM,
    FreeRAM: freeRAM,
    Usage: usage,
}
// salva os dados em um único objeto chamado stats
// chamando os métodos como função
// e setando eles como valores das propriedades

console.clear();
// limpa o console antes de mostrar o valor atual

// console.log(stats);
// dá console do que foi salvo em stats
console.table(stats);
// mostra os valores em uma tabela, ao invés de mostrá-los
// na linha
exports.stats = stats;
}, 1000);
// a cada um segundo retorna o valor da memória RAM

