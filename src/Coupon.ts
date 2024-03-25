export default class Coupon {
    constructor(readonly coupon: string, readonly percentage: number){}

    calculateDiscount(total:number){
        return (total * this.percentage) / 100
    }
}