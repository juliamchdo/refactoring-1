export default class OrderItens{
    constructor(readonly idItem: number,readonly price: number, readonly quantity: number){}

    getTotal(){
        return this.price * this.quantity
    }
}