const {calcularOrcamento} = require('./orcamento')

it('Testaando se o orcamento da cadeira esta correto', () => {
    expect(calcularOrcamento(50,200,99.99)).toBe(true)
})

