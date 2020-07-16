//O que são Variáveis e Constantes:
//Variáveis e Constantes servem para amarzenar dados
//a diferença entre eles é que a Constante não pode ser alterada.

//Variável é utilizada quando é necessário armazenar determinado dado
//para que possa ser utilizado em outras partes de um arquivo, podendo
//ser alterado ou não.
//Constante é utilizada da mesma Forma, mas é especificamente para quando
//há uma informação que não pode ser alterada, como um URL de um site.
// Exemplos:

var site = prompt('Digite aqui seu site');
const site = "http://www.facebook.com/estefany.s.way"
// Na variável é possível inserir qualqur valor que se queira, 
// tanto quem está programando quando o usuário pode fazer alterações 
//na variável quando quiser.
//Já a constante ficará com o mesmo valor sempre.
//______________________________________________________________________________________

//O que são Comandos de Decisão:
// Comando de decisão são como o próprio nome já diz onde será usado para que se decida
// qual o próximo passo caso algo aconteça. Exemplo disso é o IF/ELSE.
//Exemplo:

var numero1 = 40
var numero2 = 30

if(40<30){
    document.write('40')
}else{
    document.write(30)
}
// Aqui está um eemplo onde há uma condição para que se possa tomar uma decisão
//a partir de qual for verdade.
//______________________________________________________________________________________

// O que são loops:
// Lopps são Laços de Repetição! É um ciclo que será executado enquando 
//uma condição for verdade. Exemplo disso? For e While.

//Exemplo:

var n = 60
var n2 = 90

for(i = 0, i < n2, i++){
    document.write('Este é um exemplo de loop ' + i)
}
//Enquanto i atender a doncição dentro do for, haverá um laço de repição, ou seja,
//um looping. Quando essa condição não for mais atendida, sairá do laço e ira 
// executar o que estiver embaixo em diante.
//______________________________________________________________________________________

// O que são funções:
// Funções são criadas para agrupar códigos para que possam ser utilizados em outras
//partes do arquivo, sem a necessidade de reescrevê-los toda vez.

//Exemplo:

function funcao(){
    //Aqui irá o código que gostaria de armazenar//
}
    funcao()
//Toda função para que seja executada, deverá ser solicitada em algum lugar.
//_______________________________________________________________________________________

// O que são Escopos:
// Escopos são aqueles que vão definir como irá trabalhar dentro de um código.
//Eles são os responsáveis por permitir (ou não) quais partes dos dados serão
// visíveis para determinado público.
// Existem dois tipo de Escopos: Globais e Locais
//Escopo Global: Aquele que é público, acessível a qualquer pessoa
//Exemplo:
var nome = "Estefany"
document.write(nome)
//Escopo Local: Aquele que é privado, haverá uma função que só vai rodar dentro dessa função
//Exemplo:
function teste(){
    //Aqui dentro é um escopo local//
    document.write(nome)
}
//O escopo local pode acessar o global, mas não o contrário.
//___________________________________________________________________________________________

// O que são Inputs e Outputs:
// Input é entrada de dados
// Output é saída de dados
//Exemplos de Input são os comandos "prompt" e o próprio <input> utilizado dentro do HTML
//Exemplos de Outputs são os comandos alert(), document.write() e console.log.

var olaMundo = prompt('Digite olá mundo')
document.write(olaMundo)
//__________________________________________________________________________________________

// O que é Array:
// Array é um tipo de lista, que irá armazenar dados de uma variável
//Exemplo:

var alunos = ['Estefany','Elvia','Guilherme','Thiago']
//___________________________________________________________________________________________

//O que são Objetos:
// Objeto é uma forma de representar algo real, dando a ele propriedades que podem ser 
//solicitadas em um determinado momento do código
//exemplo:

var Estefany = {idade: 25,
                nacionalidade: "Brasileira",
                 filhos: true,
                casado: false
               }
 //____________________________________________________________________________________________

 // camelCase => Primeira letra da primeira palavra começa em minúsculo, das demais palavras 
 //começam em maiúsculo.
 // PascalCase => Todas as palavras começam com letra maiúscula.
 // kibab-case => Todas as palavras começam com letra minúscula e são separadas por um "-".
 //snake_case => Todas as palavras começam com letra minúscula e são divididas por um "_".
//_____________________________________________________________________________________________

 // Diferença entre Caminho Absoluto e Caminho Relativo:
// Caminho Absoluto é aquele caminho fixo, que não há alterações
// Caminho Relativo é aquele que sobre alterações de acordo com quem está executando
//_________________________________________________________________________________________________

// Diferença entre os operadores &&, ||, == e !=:
//&& => Significa "e", ambas as condições devem ser verdade
// || => Siginifica "ou", necessário que apenas uma condição seja verdade
// == => Siginifica "igual", para ser verdade ambas as condições devem ser exatamente iguais
//!= => Significa "diferente", ou seja, uma condição não é igual a outra.
//__________________________________________________________________________________________________

// O que significa EPER:
// Enternder, Planejar, Executar, Revisar
// Utilizado para que se possa ganhar mais produtividade, o EPER é um método onde a pessoa se planeja
//antes de fazer determinada coisa para que, quando for fazê-la, tenha menos dificuldade, maior 
//produtvidade e ganho de tempo.
//____________________________________________________________________________________________________

//Explicando Pilha e Fila:
//Pilha: Primeiro que chega é o último que sai
//Eemplo: Pilha de livros
//Fila: Primeiro que chega é o primeiro que sai
//Exemplo: Uma fila de banco
//_____________________________________________________________________________________________________

// Explicando a diferença entre HTML, JavaScript e CSS:
//HTML => É a estrutura, o que sustentará o código
//JavaScript => É quem ficará responsável pelas funcionalidades daquele código
//CSS => É quem ficará responsável pela apresentação do código para o usuário de uma forma mais "bonita",
//é quem dá a beleza por cima dos dois anteriores.
// Uma outra diferença entre eles é que apenas o JavaScript é uma linguagem dinâmica, ou seja, que há 
//interação.
//________________________________________________________________________________________________________
