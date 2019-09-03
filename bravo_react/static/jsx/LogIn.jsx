

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
    this.handleSingIn = this.handleSingIn.bind(this)
  
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



    handleSingIn(e) {
             e.preventDefault();
      this.props.changePage("UserRegisterForm")
    }
  

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
  
     {/* <NavagationBarHome changePage={this.props.changePage} />*/}

  
<div className="container-fluid login-page">
       <div className ="row bravo-big-row">

           <div className="col-4 align-self-center">




               <form className="form-login" onSubmit= {this.handleLogInSubmit}>
                         
                          <div className="form-group">
                                   <input type="email" className="form-control" 
                                          onChange={this.handleEmailChange} placeholder="Enter email" required /><br />   
                          </div>
                          <div className="form-group">
                                  <input type="password" className="form-control" 
                                         onChange={this.handlePassWordChange} placeholder="Password" required /><br /> 
                            </div>


                           <div className="align-center_login"> 

                                <div className="form-check form-check-inline" onChange={this.handleTypeUserChange}>


                                   <label className="radio-inline">
                                       <input type="radio" name="user_type" value="venue" />Venue
                                   </label>

                                   <label className="radio-inline">
                                       <input type="radio" name="user_type" value="producer" />Producer 
                                    </label>
                                    

                                </div>

                               <button type="submit" className="btn btn-default">Submit</button><br /><br />
                                

                                 <h2><a href="#" onClick= {this.handleSingIn}>Sign in</a></h2>
                          </div>
                  </form>
                 
           </div>
          </div>
         </div>


</div>









           
         
        )
    }
}








