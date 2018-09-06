import * as utils from './utils';
import * as dictionary from './dictionary';

function isEmailValid (email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase())
}

export function emailValidation(email, isRequired) {
    let error = {emailError: false, message: ''};

    if(isRequired && !utils.exist(email)) {
        return {emailError: true, message: dictionary.CAMPO_OBRIGATORIO}
    }

    if(utils.exist(email) && !isEmailValid(email)) {
        return {emailError: true, message: dictionary.EMAIL_INVALIDO}
    }

    return error;
}