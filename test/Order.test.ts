import Coupon from "../src/Coupon";
import Item from "../src/Item";
import { Order } from "../src/Order";

test("Nao deve criar um pedido com cpf invalido", function(){
    expect(() => new Order("111.111.111.-11")).toThrow(new Error("CPF invalido"));
})

test("Deve criar um pedido com 3 itens", function(){
   const order = new Order("496.845.150-49")
   order.addItem(new Item(1, "Monitor", 3000), 1)
   order.addItem(new Item(2, "Notebook", 5000), 1)
   order.addItem(new Item(3, "Mouse", 800), 2)
   const total = order.getTotal()
   expect(total).toBe(9600)
})

test("Deve criar um pedido com cupom", function(){
    const order = new Order("496.845.150-49")
    order.addItem(new Item(1, "Monitor", 3000), 1)
    order.addCoupon(new Coupon("VALE20", 20))
    const total = order.getTotal()
    expect(total).toBe(2400)
 })
 
