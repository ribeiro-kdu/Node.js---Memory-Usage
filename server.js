// const http = require('http');
// dando um node no terminal,
// é possível executar funções que só seriam possíveis no browser.
// nesse caso, queriamos usar o módulo http e seus métodos
// pois o node trabalha com importações e exportações de módulos

// console.log(http);
// função callback
// após salvos em uma constante, pode-se mostrar os métodos dentro da
// constante, que recebeu o módulo em questão

// http.createServer((req, res) => {
//     res.write('<h1>Working!</h1>');
// }).listen(3000, () => console.log('Server is running!'));
// o listen (escutador) precisa ouvir uma porta e executar a função callback, passado
// no formato de arrow function
// por padrão, o host para a porta 3000 será o localhost:3000, pois não foi
// passado outro host
// o createServer recebe também dois parâmetros, pois sem eles, nada acontecerá...
// ele assim recebe dois parâmetros req e res (requisição e resposta) e
// usando o comando atributo write, printamos na tela o h1

// http.createServer((req, res) => {
//     res.end('<h1>Working!</h1>');
// }).listen(3000, () => console.log('Server is running!'));

// como a requisição espera um end para encerrar, ele foi substituído
// pelo próprio end, dando a resposta antes de encerrar

const http = require('http');
const host = 'http://localhost';
const port = 3000;
const stats =  require("./pc-ram-usage");

http.createServer((req, res) => {
    let url = req.url;

    if (url === "/stats") {
    // explorar o método de requisição
    // res.end(`<h1>Working!</h1>`);
    res.end(JSON.stringify(stats, null, 2));
} else{
    res.end(`<h1>Seja bem vindo!</h1>`);
}


}).listen(port, () => console.log(`Server is running in ${host}:${port}...`, stats));

// código melhorado acima...
// possibilita entrar no hyperlink do console usando ctrl+click