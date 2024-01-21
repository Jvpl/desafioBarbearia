const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20.0 },
        { id: 2, tipo: "Samurai", valor: 35.0 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 0 },
        { id: 5, tipo: "Razor part", valor: 0 },
    ],

    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20.0 },
        { id: 2, tipo: "Van Dyke", valor: 20.0 },
        { id: 3, tipo: "Barba Média", valor: 20.0 },
        { id: 4, tipo: "Barba Baixa", valor: 20.0 },
        { id: 5, tipo: "Barba Zero", valor: 15.0 },
    ],
    estaAberto: true,
};


function buscaCortePorId(id) {

    const corte = barbearia.cortes.find(corte => corte.id === id);

    return corte || 'Corte não encontrado';
}

const corteEscolhido = buscaCortePorId(3);
//console.log(corteEscolhido);


function buscaBarbaPorId(id) {
    const barba = barbearia.barbas.find(barba => barba.id === id);
    return barba || 'Corte não encontrado';

}

const barbaEscolhida = buscaBarbaPorId(5);
//console.log(barbaEscolhida);


function verificaStatusBarbearia() {
    if (barbearia.estaAberto) {
        console.log("Estamos abertos");
    } else {
        console.log('Estamos Fechados');
    }
}

//verificaStatusBarbearia();

function retornaTodosCortes() {
    for (let i = 0; i < barbearia.cortes.length; i++) {
        console.log(barbearia.cortes[i].tipo);

    }
}

//retornaTodosCortes()

function retornaTodasBarbas() {
    for (let i = 0; i < barbearia.barbas.length; i++) {
        console.log(barbearia.barbas[i].tipo);
    }
}

//retornaTodasBarbas();

function criaPedido(nomeCliente, corteId, barbaId) {

    const corte = corteId.tipo;
    const barba = barbaId.tipo;
    const cortePreco = corteId.valor;
    const barbaPreco = barbaId.valor;

    const pedido = {

        nome: nomeCliente,
        pedidoCorte: corte,
        pedidoCortePreco: cortePreco,
        pedidoBarba: barba,
        pedidoBarbaPreco: barbaPreco
    }

    return pedido;

}

const pedidoCriado = criaPedido('João', corteEscolhido, barbaEscolhida);
console.log(pedidoCriado);

function calculaTotal(pedido) {

    const valorCorte = pedido.pedidoCortePreco;
    const valorBarba = pedido.pedidoBarbaPreco;
    const valorTotal = valorCorte + valorBarba;
    return `O valor total é de ${valorTotal}`;

}

console.log(calculaTotal(pedidoCriado));


barbearia.cortes[2].tipo = 'Cabelo maluco'

//console.log(barbearia);

