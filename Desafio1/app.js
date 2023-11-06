import {
     criarPrimeiraCriptografia,
     criarSegundaCriptografia,
     criarTerceiraCriptografia,
     testarPrimeiraCriptografia,
     testarSegundaCriptografia,
     testarTerceiraCriptografia,
    } from './criptography';


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Insira uma senha: ', (password) => {
    const hash1 = criarPrimeiraCriptografia(password);
    const hash2 = criarSegundaCriptografia(password);
    const hash3 = criarTerceiraCriptografia(password);

    console.log('Hash 1:', hash1);
    console.log('Hash 2:', hash2);
    console.log('Hash 3:', hash3);

    rl.question('Insira a mesma senha para testar: ', (testPassword) => {
        const result1 = testarPrimeiraCriptografia(testPassword, hash1);
        const result2 = testarSegundaCriptografia(testPassword, hash2);
        const result3 = testarTerceiraCriptografia(testPassword, hash3);

        if (result1) {
            console.log('Hash 1: Senha Correta!');
        } else {
            console.log('Hash 1: Senha Incorreta!');
        }

        if (result2) {
            console.log('Hash 2: Senha Correta!');
        } else {
            console.log('Hash 2: Senha Incorreta!');
        }

        if (result3) {
            console.log('Hash 3: Senha Correta!');
        } else {
            console.log('Hash 3: Senha Incorreta!');
        }

        rl.close();
    });
});
