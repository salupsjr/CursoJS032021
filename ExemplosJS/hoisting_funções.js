function fn() {
    log('Exemplo de hoisting de função')

    function log(value) {
        console.log(value);
    }
}

fn()

/*HOISTING DE FUNÇÃO É JOGAR A FUNÇÃO 
PRA CIMA DA CHAMADA DELE COM O log() 
LEMBRANDO QUE É UMA BOA PRATICA DECLARAR A FUNÇÃO ANTES DA SUA CHAMADA.*/