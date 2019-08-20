class RegisterForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { fname: " ",
                       lname: " ",
                       email: " ",
                       password: " ",
                       user_type: " ",
                       user_id: " "};
       
    this.handleRegubmit = this.handleRegubmit.bind(this);
    this.handleFnameChange = this.handleFnameChange.bind(this);
    this.handleLnameChange = this.handleLnameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassWordChange = this.handlePassWordChange.bind(this);
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

    handlePassWordChange(e) {
        this.setState({ password: e.target.value});

    };


    handleTypeUserChange(e) {
        this.setState({ user_type: e.target.value})

    };





    handleRegubmit(e){
        e.preventDefault();
        

        fetch("/register", 
        {method: 'POST',
        body: JSON.stringify(this.state),
        headers:{'Content-Type': 'application/json'}
        }) 

        .then(res1 => res1.json())
        .then(res2 =>{
        console.log('Success:', JSON.stringify(res2));
   
        this.setState({user_id: res2});
        console.log(this.state.user_id)

        if(this.state.user_type === 'venue'){
          this.props.changePage("VenueUserPage")
        }

        else{
          this.props.changePage("ProducerUserPage")
        };

    });
      

}

         



    render(){



        return(

        <div>
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
