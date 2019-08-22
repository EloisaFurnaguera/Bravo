

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
                this.props.changePage("ProducerUserPage", logInResponse)         
                }
            }            
     });         

}



 
    render(){
        return(

        <div className="container">

          <form onSubmit= {this.handleLogInSubmit}>
            
          
              <input type="email" name="email"  
                       onChange={this.handleEmailChange} placeholder="Email" required /><br />    
    
              <input type="password" name="password"  
                    onChange={this.handlePassWordChange} placeholder="Password" required />
          
              <div>

                <div onChange={this.handleTypeUserChange}>
                    <input type="radio" name="user_type" value="venue" /> venue
                    <input type="radio" name="user_type" value="producer"/> producer
                </div> 

              </div>


              <input type="submit" value="Log In" />
      
    
        </form>


</div>
  
           
         
        )
    }
}







// ---------------------




      // const data = {
      //   name: this.state.name,
      //   venue: this.state.venue
      // }


      // // const loginData = new FormData(e.target);

      // fetch("/login", {method: 'POST', body: JSON.stringify(data)})

      // // // console.log(response);

      // // // status: 200 {}
      // // // status: 401 {}

      // // // if (respondse.status === 200) {
      // // //   this.props.changePage(0)
      // // // } else {
      // // //   this.setState()
      // // // }
      // this.props.changeStuff({name: 'whatever i got back'})
      // this.props.changePage("BravoApp")









