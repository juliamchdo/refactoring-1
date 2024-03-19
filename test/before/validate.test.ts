import { validate } from "../../src/before/validate";

test('Deve validar o cpf com dígito zero', function() {
    const isValid = validate('259.556.978-37');
    expect(isValid).toBeTruthy();
})

test('Deve validar o cpf que tem dígito maior que zero no primeiro dígito', function() {
    const isValid = validate('198.454.187-08');
    expect(isValid).toBeTruthy();
})

test('Deve validar o cpf que tem dígito maior que zero no segundo dígito', function() {
    const isValid = validate('147.085.437-60');
    expect(isValid).toBeTruthy();
})

test('Deve tentar validar o cpf com mais de 14 caracteres', function() {
    const isValid = validate('147.085.437-600');
    expect(isValid).toBeFalsy();
})

test('Deve tentar validar o cpf undefined', function() {
    const isValid = validate(undefined);
    expect(isValid).toBeFalsy();
})

test('Deve tentar validar o cpf null', function() {
    const isValid = validate(null);
    expect(isValid).toBeFalsy();
})

test('Deve tentar validar o cpf com caracteres iguais', function() {
    const isValid = validate('111.111.11-11');
    expect(isValid).toBeFalsy();
})