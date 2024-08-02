const {validarCNPJ} = require('./cadastro')

it('Testaando se o cnpj esta corretoo', () => {
    expect(validarCNPJ("00.000.000/0000-00")).toBe(true)
})