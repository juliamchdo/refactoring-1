export default class Cpf{
    constructor(readonly value: string){
        if(!this.validateCPF(value)) throw new Error("CPF invalido")
        this.value = value
    }

    private validateCPF(cpf:string) {
        if (!cpf) return false
        cpf = this.cleanCPF(cpf);
        if (!this.isValidLength(cpf)) return false
        if (this.hasAllDigitsEqual(cpf)) return false
        const digitOne = this.calculateDigit(cpf, 10)
        const digitTwo = this.calculateDigit(cpf, 11)
        const checkDigit = this.extractDigit(cpf);
        const calculatedDigit = `${digitOne}${digitTwo}`;
        return checkDigit == calculatedDigit;
    }

    private cleanCPF(cpf:string) {
        return cpf.replace(/\D/g, "")
    }

    private hasAllDigitsEqual(cpf:string) {
        const [firstDigit] = cpf
        return cpf.split("").every(digit => digit === firstDigit)
    }
    private calculateDigit(cpf:any, factor:number){
        let total = 0;
        for (const digit of cpf){
            if (factor > 1) total += digit * factor--;
        }
        const rest = total % 11;
        return (rest < 2) ? 0 : 11 - rest
    }
    private isValidLength(cpf:string) {
        return cpf.length === 11
    }
    private extractDigit(cpf:string) {
        return cpf.slice(9)
    }
   
}