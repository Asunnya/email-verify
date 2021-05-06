function validPassword(pass) {

    let passSize = pass.length
    let upperCase  = /[A-Z]+/.test(pass)
    let lowerCase  = /[a-z]+/.test(pass)
    let charSpecial = /[!@#$%^&*()_+\-=/[{};':"|,.<>?]/.test(pass)
    let number = /[0-9]+/.test(pass)
    let accent = /[^0-9a-zA-Z!@#$%^&*()_+\-=/[{};':"|,.<>]/.test(pass)

    return (
        passSize >= 8 && 
        upperCase && 
        charSpecial && 
        number && 
        lowerCase && accent === false
    );
}

module.exports = validPassword;