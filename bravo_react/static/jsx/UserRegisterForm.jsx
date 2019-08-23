class UserRegisterForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { fname: " ",
                       lname: " ",
                       email: " ",
                       password: " ",
                       user_type: " ",
                       user_id: " "};
       
    this.handleUserRegister = this.handleUserRegister.bind(this);
    this.handleFnameChange = this.handleFnameChange.bind(this);
    this.handleLnameChange = this.handleLnameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleTypeUserChange = this.handleTypeUserChange.bind(this);

    }



    handleFnameChange(e){      
        this.setState({ fname: e.target.value});
    };


    handleLnameChange(e) {
        this.setState({ lname: e.target.value});

    };

    handleEmailChange(e) {
        this.setState({ email: e.target.value});

    };

    handlePasswordChange(e) {
        this.setState({ password: e.target.value});

    };


    handleTypeUserChange(e) {
        this.setState({ user_type: e.target.value})

    };





    handleUserRegister(e){
        e.preventDefault();
            
        fetch("/register", 
        {method: "POST",
        body: JSON.stringify(this.state),
        headers:{"Content-Type": "application/json"}
        }) 



        .then(res1 => res1.json())
        .then(res2 =>{
        const RegUserResponse = JSON.stringify(res2)
        console.log("Success:", RegUserResponse);

        console.log(this.state);



        if (RegUserResponse === '"Email_already_in_data"'){
           alert("This email is allready register")
           this.props.changePage("LogIn")
        }


        else if(this.state.user_type === "venue"){
          this.props.changePage("VenueRegisterForm")
        }

        else{
          this.props.changePage("ProducerPage")
        };

    });      

}

         



    render(){


        return(

        <div>
            <form onSubmit= {this.handleUserRegister}>

       

               <div>
                    <label>
                        First name
                        <input type="fname" name="fname" 
                               onChange={this.handleFnameChange} required />                   
                    </label>       
                </div>


               <div>
                    <label>
                        Last name
                        <input type="lname" name="lname" 
                               onChange={this.handleLnameChange} required />                   
                    </label>       
                </div>


                <div>
                    <label>
                        Email
                        <input type="email" name="email" 
                               onChange={this.handleEmailChange} required />       
                    </label>       
                </div> 


                <div>
                    <label>
                        Password
                        <input type="password" name="password" 
                               onChange={this.handlePasswordChange} required />      
                    </label>       
                </div>


       
                <div onChange={this.handleTypeUserChange}>
                    <input type="radio" name="user_type" value="venue" /> venue

                    <input type="radio" name="user_type" value="producer"/> producer
                </div> 
                                           
   
                    <input type="submit" value="Register" />                               

            </form>


             

          </div>

        );
    
}
}
