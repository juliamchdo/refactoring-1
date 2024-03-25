import { Order } from "../src/Order";

test("Nao deve criar um pedido com cpf invalido", function(){
    const order = new Order("teste", 10, 1)
    expect(() => order.newOrder("111.111.111-1111")).toThrow(new Error("Insira um CPF valido"));
})

test("Deve criar um pedido sem desconto", function(){
    const order = new Order("teste 2", 20, 2)
    const newOrder = order.newOrder("04218885044")

    expect(newOrder).toEqual([{description: "teste 2", price: 20, quantity: 2, descount: undefined, total: 40}])
})

test("Deve criar um pedido com desconto", function(){
    const order = new Order("teste 2", 20, 2, 10)
    const newOrder = order.newOrder("04218885044")

    expect(newOrder).toEqual([{description: "teste 2", price: 20, quantity: 2, descount: 10, total: 36}])
})