var isEmail = true;

function separatorEmail(email) {
    var index = email.indexOf('@'); 

   if (index > -1) {
       usuario = email.slice(0,index);
       dominio = email.slice(index+1);
   }
   else {
        isEmail = false
   }
}

