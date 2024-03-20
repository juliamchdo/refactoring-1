function hasAllDigitsEqual(cpf:string) {
    const [firstDigit] = cpf
    return cpf.split("").every(digit => digit === firstDigit)
}
function cleanCPF(cpf:string) {
    return cpf.replace(/\D/g, "")
}
function isValidLength(cpf:string) {
    return cpf.length === 11
}
function extractDigit(cpf:string) {
    return cpf.slice(9)
}
function calculateDigit(cpf:any, factor:number){
    let total = 0;
    for (const digit of cpf){
        if (factor > 1) total += digit * factor--;
    }
    const rest = total % 11;
    return (rest < 2) ? 0 : 11 - rest
}
export function validateCPF(cpf:string) {
    if (!cpf) return false
    cpf = cleanCPF(cpf);
    if (!isValidLength(cpf)) return false
    if (hasAllDigitsEqual(cpf)) return false
    const digitOne = calculateDigit(cpf, 10)
    const digitTwo = calculateDigit(cpf, 11)
    const checkDigit = extractDigit(cpf);
    const calculatedDigit = `${digitOne}${digitTwo}`;
    return checkDigit == calculatedDigit;
}