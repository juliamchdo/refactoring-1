export default class Coupon {
    constructor(readonly coupon: string, readonly percentage: number, readonly expired: Date) { }

    calculateDiscount(total: number) {
        return (total * this.percentage) / 100
    }

    isCuponExpired() {
       const today = new Date()

       if(today.getTime() > this.expired.getTime()) throw new Error("Cupom inválido")
    }

    
}