function separatorEmail(email) {
    let index = email.indexOf('@');
    count = 0

    if (index !== -1) {
        usuario = email.slice(0,index);
        dominio = email.slice(index+1);

        let pos = index

        while (pos !== -1) {
            count++
            pos = email.indexOf('@', pos+1)
        }
        if (count === 1) {
            usuario = email.slice(0,index);
            dominio = email.slice(index+1);

            isEmail = true;

        }
    }
    else {
        isEmail = false;
        console.log('O email é inválido');
    }

}

function validationUsuario(usuario) {
    let usersize = usuario.length;

    if (usersize > 1) {
        let res = /^[a-zA-Z]+$/.test(usuario);
        if (res) {
            usuarioValido = true;
        }
        else {
            usuarioValido = false;
            console.log("Usuário inválido: o usuário contém caracteres inválidos");
        }

    }
    else {
        usuarioValido = false;
        console.log("Usuário inválido: o nome de usuário deve ser maior que 1");
    }

}

function validationDominio(dominio) {
    let dominiosize = dominio.length;
    if (dominiosize > 3) {
        let res = /^[a-zA-Z.]+$/.test(dominio);
        if (res) {
            dominioValido = true
        }
        else {
            dominioValido = false
            console.log('Dominio Inválido: Há caracteres invalidos')
        }
    }
    else {
        dominioValido = false
        console.log('dominio inválido: o tamanho deverá ser maior que 3')
    }
}

email = 'usuarionome@gmail.com';
separatorEmail(email);

var isEmail;
var usuarioValido;
var dominioValido;


if (isEmail) {

    validationUsuario(usuario);
    validationDominio(dominio);

    if (dominioValido && usuarioValido) {
        console.log("O email " + email + " está valido para utilização")
    }
}