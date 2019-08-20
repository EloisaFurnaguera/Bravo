

function ShowRegisterForm(results){
 
    console.log("results")

}


function handleRegisterForm(e){
e.preventDefault();

    console.log("registerData");

//     const register = document.querySelector('#register-form')
//     const registerData = new FormData(register);

  
//     // const registerData = $(register).serialize();

//     console.log(registerData);
//     console.log("ttttt");


// }

// $.post("/register-2", registerData, ShowRegisterForm)



 $("#register-form").on('submit', handleRegisterForm)








// const name = document.querySelector('#fname')

// console.log(name)


// name.style.backgroundColor="red";






