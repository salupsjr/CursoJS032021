/*function Pessoa(nome) {
    this.nome = nome
}

const p = new Pessoa('Junior')

console.log(p);

function Animal(qtdPatas) {
    this.qtdPatas = qtdPatas
}

function Cachorro(morde) {
    Animal.call(this, 4)

    this.morde = morde
}

const pug = new Cachorro(false);

console.log(pug);*/

/*CLASSES*/ 


class Animal{
    constructor(qtdPatas){
        
        this.qtdPatas = 0
    
    }

    movimentar(){}
}

class Cachorro extends Animal{
    constructor(morde){
        super()
        this.qtdPatas = 4
        this.morde = morde
    }

    latir(){
        console.log('Au, Au...!');
    }
}

const pug = new Cachorro(false);
const hotwailler = new Cachorro(true);

console.log(`O Pug: `, pug, 'Hotwailler:', hotwailler);