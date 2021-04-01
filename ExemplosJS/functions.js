//Função executada
function fazAlgo() {
    //console.log('Fazendo algo'); //Posso chamar a função e mostrar na tela o que ela faz.
    return 'Fazendo algo'
}

//fazAlgo() //Chamada da função.

const faz = fazAlgo()//Variável constante recebendo a função.

console.log(faz) //Mostrar o que tem dentro da constante.

//ARROW FUNCTIONS(FUNÇÕES DE FLECHA)
const fazAlgoArrow = () => 'Fazendo algo aqui.' 
const fazAlgoArrow2 = () => {
    return 'Fazendo algo aqui também.'
} 

console.log(fazAlgoArrow());
console.log(fazAlgoArrow2());

//Funções também são objetos.
fazAlgo.prop = 'Inclui uma propriedade.' 

console.log(fazAlgo.prop);

//Recebendo parâmetros
const fazAlgoArrowComParam = valor => console.log(valor);
fazAlgoArrowComParam('Aqui o parâmetro.')

const fazAlgoArrowComParam2 = (a,b) => {
    return a+b
}
console.log(fazAlgoArrowComParam2(5,5))

//FUNÇÕES QUE RETORNAM FUNÇÕES

const fnControl = fnParam => fnPermitida => {
    if (fnPermitida) {
        fnParam()
    }
}  

const fnLidarExec = fnControl(fazAlgo)

fnLidarExec(true)
fnLidarExec()

//FUNÇÕES QUE RETORNAM FUNÇÕES - A ESTRUTURA PADRÃO SERIA ASSIM ANTES DO ES6

function fnControl(fnParam) {
    return function(fnPermitida) {
        if (fnPermitida) {
            fnParam()
        }
    }
}

// FUNÇÕES 2

(() => {
    this.name = 'arrow function'

    const getNameArrowFn = () => this.name

    function getName() {
        return this.name
    }

    const user = {
        name:'Junior(objeto em execução)',
        getNameArrowFn,
        getName
    }

    console.log(user.getNameArrowFn());
    console.log(user.getName());

})()

//ARRAYS

const users = ['Junior','Graziele','Lorenna']

const gender = {
    MAN:Symbol('M' || 'm'),
    WOMAN:Symbol('W' || 'w')
}

const persons = [
    {
        name: 'Junior',
        age: 36,
        gender: gender.MAN
    },
    {
        name: 'Graziele',
        age: 32,
        gender: gender.WOMAN
    },
    {
        name: 'Lorenna ',
        age: 4,
        gender: gender.WOMAN
    },
]

//Retorna a quantidade de items de um array.
console.log('Pessos cadastradas: ', persons.length);
//Verificar se é um Array.
console.log('A variável persons é um array: ', Array.isArray(persons));
let resp = ''
if (Array.isArray(persons) == true) {
     resp = 'Sim.'  
} else {
     resp = 'Não'
}
console.log(`A variável persons é um array? ${resp}` ) ;  

//Iterar os itens de um array.
persons.forEach(person => {console.log(`Nome: ${person.name}`);})
//Filtrar array.
const mens = persons.filter(person => person.gender === gender.MAN)
console.log('\nNova lista apenas com homens: ', mens);

//Retornar um novo
const personWithCourse = persons.map(person => {
    person.course = "Introdução ao JS."
    return person
})

console.log('\nPessoas com a adição do curso. ', personWithCourse);

//Transformar o array em outro tipo.
const totalAge = persons.reduce((age, person) => {
    age += person.age
    return age
}, 0)

console.log('A soma de todas as idades é: ', totalAge);

//Juntando Operações
const totalEvenAges = persons
                            .filter(person => person.age % 2 === 0)
                            .reduce((age, person) => {
                                age += person.age
                                return age
                            }, 0)

console.log('\nSoma de idade das pessoas que possuem idade par: ', totalEvenAges);