const { expect } = require('chai');
const { calcularIMC } = require('../src/imc');
const { classificarIMC } = require('../src/imc');

describe('Calculadora de IMC', () => {

    it('Calculadora deve rodar tranquilo', () => {
        const peso = 80; // 80 kg
        const altura = 180; // 180 cm

        const IMEsperado = (peso / Math.pow(altura / 100, 2).toFixed(2));
        const IMCCalculado = calcularIMC(peso, altura);

        expect(IMCCalculado).to.equal(IMEsperado);
    });

    it('altura = 0, entrada inadequada', () => {
        const peso = 70; // 70 kg
        const altura = 0; // 0 cm

        const IMCCalculado = calcularIMC(peso, altura);

        expect(IMCCalculado).to.equal('NaN');
    });

    it('Classifica tranquilamente', () => {
        const imc = 20

        const avaliação = classificarIMC(imc);

        expect(avaliação).to.equal('Parabens você está com no seu peso ideal');
    });

    it('IMC = 20, entrada inadequada', () => {
        const imc = "NaN"

        const avaliação = classificarIMC(imc);

        expect(avaliação).to.equal('NaN');
    });
});