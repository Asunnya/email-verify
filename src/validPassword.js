function validPassword(pass) {

    let passSize = pass.length
    let letraMaiuscula  = /[A-Z]+/.test(pass)
    let letraMinuscula  = /[a-z]+/.test(pass)
    let charSpecial = /[!@#$%^&*()_+\-=/[{};':"|,.<>?]/.test(pass)
    let number = /[0-9]+/.test(pass)
    let acent = /[^0-9a-zA-Z!@#$%^&*()_+\-=/[{};':"|,.<>]/.test(pass)

    if (passSize >= 8 && letraMaiuscula && charSpecial && number && letraMinuscula && acent == false) {
        return true
    }
    return false
}

module.exports = validPassword;