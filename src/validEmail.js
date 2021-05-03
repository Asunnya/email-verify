function userValidation(user) {
    let userSize = user.length;

    if (userSize > 1) {
        let resTwo = /^[a-zA-Z]+$/.test(user);
        if (resTwo) {
            return true;
        }
    }
    return false;
}

function domainValidation(domain) {

    let domainSize = domain.length;
    let domainDot = (domain.split('.').length - 1) 

    if (domainSize > 4 && domainDot === 1 )  {
        let resOne = /^[a-z.]+$/.test(domain);
        if (resOne) {
            return true;
        }
    }
    return false;
}

function emailValidation(email) {
    let index = email.indexOf('@');
    let count = 0;

    if (index !== -1) {
        let pos = index;

        while (pos !== -1) {
            count++;
            pos = email.indexOf('@', pos+1);
        }
        if (count === 1) {
            user = email.slice(0,index);
            domain = email.slice(index+1);

            if (userValidation(user) && domainValidation(domain)) {
                return true;
            }
        }
    }
    return false;
}

module.exports = emailValidation;