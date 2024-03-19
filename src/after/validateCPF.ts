
// @ts-nocheck
export function validateCPF(cpf) {
    if (cpf) {

        function clearCPF() {
            return cpf.replace('.', '').replace('.', '').replace('-', '').replace(" ", "");
        }

        function isEqualCharacters() {
            return cpf.split("").every(c => c === cpf[0]);
        }

        if (cpf.length >= 11 && cpf.length <= 14) {
            cpf = clearCPF();
            if (!isEqualCharacters()) {
                try {
                    let firstSum = 0; //d1
                    let secondSum = 0; //d2
                    let firstDigit = 0; //dg1
                    let secondDigit = 0; //dg2
                    let rest = 0;
                    let digits;
                    let digitsResult;

                    for (let nCount = 1; nCount < cpf.length - 1; nCount++) {

                        digits = parseInt(cpf.substring(nCount - 1, nCount));
                        firstSum = firstSum + (11 - nCount) * digits;
                        secondSum = secondSum + (12 - nCount) * digits;
                    };

                    rest = (firstSum % 11);

                    firstDigit = (rest < 2) ? firstDigit = 0 : 11 - rest;
                    secondSum += 2 * firstDigit;
                    rest = (secondSum % 11);
                    if (rest < 2)
                        secondDigit = 0;
                    else
                        secondDigit = 11 - rest;

                    let nDigVerific = cpf.substring(cpf.length - 2, cpf.length);
                    digitsResult = "" + firstDigit + "" + secondDigit;
                    return nDigVerific == digitsResult;
                } catch (e) {
                    console.error("Erro !" + e);

                    return false;
                }
            } else return false

        } else return false;



    } else return false;

}