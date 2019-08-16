class RegisterForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { fname: " ",
                       lname: " ",
                       email: " ",
                       password: " ",
                       user_type: " "};
       
    this.handleRegubmit = this.handleRegubmit.bind(this);
    this.handleFnameChange = this.handleFnameChange.bind(this);
    this.handleLnameChange = this.handleLnameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassWordChange = this.handlePassWordChange.bind(this);
    this.handleTypeUserChange = this.handleTypeUserChange.bind(this);

    }


    handleRegubmit(e){
        console.log(this.state)
        e.preventDefault();
    }


    handleFnameChange(e){
        this.setState({ fname: e.target.value});

    }


    handleLnameChange  
    handleEmailChange =  
    handlePassWordChange =  
    handleTypeUserChange = 











    render(){
        return(


            <form onSubmit= {this.handleRegubmit}>

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
                               onChange={this.handlePassWordChange} required />      
                    </label>       
                </div>


                <div>
                     <label>
                     What kind of user are you 
                      <label/>
                     <div onChange={this.handleTypeUserChange} 
                    <input type="radio" name="user_type" value="venue">Venue 
                    <input type="radio" name="user_type" value="producer">Producer   
                     </div>                                 

                <div>     
                    <input type="submit" name="Register">                     
                </div>
            </form>

        );
    }
}

