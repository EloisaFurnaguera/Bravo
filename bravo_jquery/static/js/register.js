

function ShowRegisterForm(){
 
    console.log("hshsh")

}


function handleRegisterForm(e){
e.preventDefault();

    const register = document.querySelector('#register-form')
    const registerData = $(register).serialize();

    console.log(registerData);
}

$.post("/register-2", registerData, ShowRegisterForm)



 $("#register-form").on('submit', handleRegisterForm)








// const name = document.querySelector('#fname')

// console.log(name)


// name.style.backgroundColor="red";

























