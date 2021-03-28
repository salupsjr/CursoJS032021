//STRING
//Retorna a quantidade de letras de uma string.
const texto = 'Texto'
const textSize = texto.length
console.log(`A palavra digitada é ${texto} e tem ${textSize} letras.`);

//Retorna um array quebrando a string por um delimitador que exista na string.

const spplitedText = texto.split('e')
console.log(`Array com as posições separada pelo delimitador: `, spplitedText);

//Busca um valor e substitui por outro.
const replacedText = texto.replace('Texto' , 'otxeT')
console.log('O texto alterado é: ', replacedText);

//Retorna a fatia de uma string.
const lastChar = texto.slice(-1) 
console.log('Última letra da string é: ', lastChar)

const allWithoutLastChar = texto.slice(0 , -1) 
console.log('O texto sem a última letra é.', allWithoutLastChar)

const secondEnd = texto.slice(1)
console.log('Texto: ', secondEnd);

//Retorna N caracteres a partir de uma posição.
const twoCharsBeforeFirstPos = texto.substr(0 , 2)
console.log('é : ', twoCharsBeforeFirstPos);

//Transforma um texto em número.
 const texto = '1'
const num = Number(texto) 
console.log(`O texto é um número agora(${num}) e ${num} + ${num} = ${num + num}`);


//NUMBER
const myNumber = 12.2589

//Transforma um número para String
const numbeAsString = myNumber.toString()
console.log('Agora esse número é uma', typeof numbeAsString);

//Retornar o número com uma quantidade fixa de casas após a virgula.
console.log(myNumber.toFixed(2));

//OBJECTS / OBJETOS

//Criação de um objeto

const usuario = {
    nome: 'Junior',
    sobrenome: 'Souza'
}

console.log('O objeto original é: ', usuario);

/*
//Recupera as chaves de um object/objeto
console.log('As chaves do objeto usuario são: ', Object.keys(usuario));

//Recupera o conteúdo das chaves de um objeto
console.log('O conteúdo das chaves nome e sobrenome do objeto usuário são: ', Object.values(usuario));

//Retorna um array de arrays contendo [nome_prop , valor_prop]
console.log('Lista de chaves e valores: ', Object.entries(usuario));
*/

//Mergear(adiciona) propriedade de objetos
Object.assign(usuario, {nomeCompleto: 'Junior Souza'})
console.log('\nAdiciona a chave e o valor ao objeto usuario alterando sua estrutura original.(não recomendado)', usuario);
console.log('\nAdicionando uma chave e um valor ao objeto sem alterar o objeto principal. ', Object.assign({}, usuario, {idade: 36}));
console.log('\nObjeto atual: ', usuario);


//Prevenção de alteração de um objeto

const newObj = {foo: 'bar'} //Criação do objeto.
Object.freeze(newObj) //Congelando o objeto para não ser alterado.

newObj.foo = 'Changes' //Tentando alterar o objeto. 
delete newObj.foo //Deletando chave do objeto.
newObj.bar = 'foo' //Criando nova chave e adicionando valor.

console.log('\n Mostrando objeto newObj após alterações: ', newObj);

//Permite apenas a alteração de propriedades existentes em um objeto.
const person = {nome: 'Junior'}
Object.seal(person)

person.name = 'Junior Souza'
delete person.name
person.idade = 36

console.log('\n Mostrando objeto person após alterações: ', person);