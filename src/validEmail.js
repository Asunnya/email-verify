function validationUsuario(usuario) {
    let usersize = usuario.length;

    if (usersize > 1) {
        let res = /^[a-zA-Z]+$/.test(usuario);
        if (res) {
            return true;
        }
    }
    return false;
}

function validationDominio(dominio) {
    let dominiosize = dominio.length;
    if (dominiosize > 3) {
        let res = /^[a-zA-Z.]+$/.test(dominio);
        if (res) {
            return true;
        }
    }
    return false;
}

function validatorEmail(email) {
    let index = email.indexOf('@');
    count = 0;

    if (index !== -1) {
        let pos = index;

        while (pos !== -1) {
            count++;
            pos = email.indexOf('@', pos+1);
        }
        if (count === 1) {
            usuario = email.slice(0,index);
            dominio = email.slice(index+1);

            if (validationUsuario(usuario) && validationDominio(dominio)) {
                return true;
            }
        }
    }
    return false;
}

module.exports = validatorEmail;