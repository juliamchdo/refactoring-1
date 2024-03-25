import { validateCPF } from "./after/validateCPF";
export class Order {
    private description: string;
    private price: number;
    private quantity: number;
    private descount: number | undefined;
    constructor(description: string, price: number, quantity: number, descount?: number) {
        this.description = description
        this.price = price
        this.quantity = quantity
        this.descount = descount
    }

    newOrder(cpf: string) {
        const isValidCPF = validateCPF(cpf)
        if (!isValidCPF) throw new Error("Insira um CPF valido")
        let total = this.price * this.quantity
        if (this.descount) {
            total = this.calculateDescount(this.descount, total)
        }
        const order = []
        order.push({ description: this.description, price: this.price, quantity: this.quantity, descount: this.descount, total: total })
        return order
    }

    calculateDescount(percentage: number, total: number){
        let descount = total * (percentage / 100)
        return total - descount
    }

}