

class LogIn extends React.Component {

  constructor(props) {
    super(props);

    this.state = { email: " ",
                  password: " ",
                  user_type: " ",
                  user_id: " "}              
                 
                   
    this.handleLogInSubmit = this.handleLogInSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassWordChange = this.handlePassWordChange.bind(this);
    this.handleTypeUserChange = this.handleTypeUserChange.bind(this);
  
    }



    handleEmailChange(e) {     
        this.setState({ email: e.target.value});          
    };


     handlePassWordChange(e) {
        this.setState({ password: e.target.value});       
    };


    handleTypeUserChange(e) {
        this.setState({ user_type: e.target.value})
    };


    handleLogInSubmit(e) {
      e.preventDefault();


        fetch("/login", 
        {method: "POST",
        body: JSON.stringify(this.state),
        headers:{'Content-Type': 'application/json'}
        }) 

        

        .then(res1 => res1.json())
        .then(res2 =>{
        const logInResponse = JSON.stringify(res2)
        console.log("Success:", logInResponse);

        if (logInResponse === '"Incorrect_user_type"'){
           alert("Incorrect User Type")
        }

        else if (logInResponse === '"Incorrect_Password"'){
           alert("Password Incorrect")
        }

        else if (logInResponse === '"No_such_user"'){
           alert("Please Register")
           this.props.changePage("UserRegisterForm")
        }


        else if (logInResponse === '"Register_Venue"'){          
           this.props.changePage("VenueRegisterForm")
        }


        else{        
            if (this.state.user_type === "venue"){
                this.props.changePage("VenueUserPage", logInResponse)
                }

            else{
                this.props.changePage("ProducerPage", logInResponse)   

                }
            }            
     });         

}



 
    render(){
        return(

  <div >      
  
      <NavagationBar changePage={this.props.changePage} />



<div className="container">
  <div className="row">
    <div className="form_login">



      <form onSubmit= {this.handleLogInSubmit}>

         <div className="form-group">
               <input type="email" className="form-control" 
                      onChange={this.handleEmailChange} placeholder="Enter email" required /><br />   
        </div>

        <div className="form-group">
              <input type="password" className="form-control" 
                     onChange={this.handlePassWordChange} placeholder="Password" required /><br /> 
        </div>

       <div className="align-center_login"> 

            <div className="form-check" onChange={this.handleTypeUserChange}>

             <input type="radio" name="user_type" value="venue" />
                   <label className="form-check-label">Venue</label>

             <input type="radio" name="user_type" value="producer" />
                   <label className="form-check-label">Producer </label>
            </div>

           <button type="submit" className="btn btn-default">Submit</button>
      </div>
    </form>

       </div>
    </div>
</div>










 </div>


           
         
        )
    }
}







{/*          <form onSubmit= {this.handleLogInSubmit}>
            
          
              <input type="email" name="email"  
                       onChange={this.handleEmailChange} placeholder="Email" required /><br />    
    
              <input type="password" name="password"  
                    onChange={this.handlePassWordChange} placeholder="Password" required />*/}
          
  {/*            <div>
                <div onChange={this.handleTypeUserChange}>
                    <input type="radio" name="user_type" value="venue" /> venue
                    <input type="radio" name="user_type" value="producer"/> producer
                </div> 
              </div>
*/}
{/*
              <input type="submit" value="Log In" />*/}
      
    
   




{/*

<form onSubmit= {this.handleLogInSubmit}>
    <div className="form-group">
  
      <input type="email" className="form-control" 
              onChange={this.handleEmailChange} placeholder="Enter email" required /><br />   
   </div>
   <div className="form-group">
   
     <input type="password" className="form-control" 
           onChange={this.handleEmailChange} placeholder="Password" required /><br /> 
  </div>


  <div className="form-check">
      <input className="form-check-input" type="radio" name="user_type" value="venue" />
  <label className="form-check-label">Venue</label>
</div>

<div className="form-check" onChange={this.handleTypeUserChange}>
  <input className="form-check-input" type="radio" name="user_type" value="producer" />
  <label className="form-check-label">Producer </label>
</div>





  <button type="submit" className="btn btn-primary">Submit</button>
</form>
*/}








// <div >



//     <style>{"body { background-color: #FFAF00; }"}</style>
  
//         <NavagationBar changePage={this.props.changePage} />



// <div className="container">
//   <div className="row">
//     <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
//       <div className="card card-signin my-5">
//          <div className="card-body">





// <form onSubmit= {this.handleLogInSubmit}>
//     <div className="form-group">
  
//       <input type="email" className="form-control" 
//               onChange={this.handleEmailChange} placeholder="Enter email" required /><br />   
//    </div>
//    <div className="form-group">
   
//      <input type="password" className="form-control" 
//            onChange={this.handlePassWordChange} placeholder="Password" required /><br /> 
//   </div>


//   <div className="form-check" onChange={this.handleTypeUserChange}>
  
//       <input type="radio" name="user_type" value="venue" />
//   <label className="form-check-label">Venue</label>



//   <input type="radio" name="user_type" value="producer" />
//   <label className="form-check-label">Producer </label>
// </div>





//   <button type="submit" className="btn btn-primary">Submit</button>
// </form>






// </div>
// </div>
// </div>
// </div>
// </div>







// </div>

