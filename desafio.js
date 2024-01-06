/* Desafio 1 Programa para calcular um viagem, $ combustivel, $ medio do carro, km rodado.*/

const precoCombustivel = 5.79;
const KmPorLitros = 12.2;
const distanciaEmKm = 400;

const litrosConsumidos = distanciaEmKm / KmPorLitros;
const valorDaViagem = litrosConsumidos * precoCombustivel;
console.log(valorDaViagem);