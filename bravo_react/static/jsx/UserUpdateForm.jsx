class UserUpdateForm extends React.Component {

    constructor(props) {
        super(props);
 
        this.state = { fname: " ",
                       lname: " ",
                       email: " ",
                       password: " "}
                  
       
    this.handleUserUpdate = this.handleUserUpdate.bind(this);
    this.handleFnameUpdate = this.handleFnameUpdate.bind(this);
    this.handleLnameUpdate = this.handleLnameUpdate.bind(this);
    this.handleEmailUpdate = this.handleEmailUpdate.bind(this);
    this.handlePasswordUpdat = this.handlePasswordUpdat.bind(this);

    }



    handleFnameUpdate(e) {      
        this.setState({ fname: e.target.value});
    };


    handleLnameUpdate(e) {
        this.setState({ lname: e.target.value});

    };

    handleEmailUpdate(e) {
        this.setState({ email: e.target.value});

    };

    handlePasswordUpdat(e) {
        this.setState({ password: e.target.value});

    };



    handleUserUpdate(e){
        e.preventDefault();


        fetch("/user_info_update", 
              {method: "POST",
              body: JSON.stringify(this.state),
              headers:{'Content-Type': 'application/json'} 
              })

        .then(res1 => res1.json())
        .then(res2 =>{
                const UserUpdateResponse = JSON.stringify(res2)
                console.log('Success:', JSON.stringify(res2));

                if (this.state.user_type === "venue"){
                this.props.changePage("VenueUserPage", UserUpdateResponse)
                }

                else{
                this.props.changePage("ProducerPage", UserUpdateResponse)
                } 

              
            })

}
   




    render(){
        return(



        <div>
            <form onSubmit= {this.handleUserUpdate}>
  
               <div>
                    <label>
                        First name
                        <input type="fname" name="fname" 
                               onChange={this.handleFnameUpdate} required />                   
                    </label>       
                </div>


               <div>
                    <label>
                        Last name
                        <input type="lname" name="lname" 
                               onChange={this.handleLnameUpdate} required />                   
                    </label>       
                </div>


                <div>
                    <label>
                        Email
                        <input type="email" name="email" 
                               onChange={this.handleEmailUpdate} required />       
                    </label>       
                </div> 


                <div>
                    <label>
                        Password
                        <input type="password" name="password" 
                               onChange={this.handlePasswordUpdat} required />      
                    </label>       
                </div>

                                  
   
                    <input type="submit" value="Update" />                               

            </form>


          </div>


          );
          
    }

}
