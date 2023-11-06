require('dotenv').config();
const crypto = require('crypto');
const bcrypt = require('bcrypt');

const SECRET_KEY = process.env.CHAVE_SECRETA;
// Deixei o .env fora do git ignore para que pudesse mostrar minha lógica.


export function criarPrimeiraCriptografia(password) {
    const passWithSecret = password + SECRET_KEY;
    const hash = bcrypt.hashSync(passWithSecret, 10);
    return hash;
}

export function criarSegundaCriptografia(password) {
    const passWithSecret = password + SECRET_KEY;
    const hashCrypto = crypto.createHash('sha256');
    hashCrypto.update(passWithSecret);
    return hashCrypto.digest('hex');
}

export function criarTerceiraCriptografia(password) {
    const key = crypto.pbkdf2Sync(SECRET_KEY, '', 100000, 32, 'sha256');;

    const hmac = crypto.createHmac('sha256', key);
    hmac.update(password);

    return hmac.digest('hex');
}

export function testarPrimeiraCriptografia(password, hash) {
    const passWithSecret = password + SECRET_KEY;
    return bcrypt.compareSync(passWithSecret, hash);
}

export function testarSegundaCriptografia(password, hash) {
    const passWithSecret = password + SECRET_KEY;
    const hashCrypto = crypto.createHash('sha256');
    hashCrypto.update(passWithSecret);
    const newHash = hashCrypto.digest('hex');
    return newHash === hash;
}

export function testarTerceiraCriptografia(password, criptographyPassword) {
    const key =crypto.pbkdf2Sync(SECRET_KEY, '', 100000, 32, 'sha256');
    const hmac = crypto.createHmac('sha256', key);
    hmac.update(password);

    return hmac.digest('hex') === criptographyPassword;
}
