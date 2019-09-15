class UserRegisterForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { fname: "",
                       lname: "",
                       email: "",
                       password: "",
                       user_type: "",
                       user_id: ""};
       
    this.handleUserRegister = this.handleUserRegister.bind(this);
    this.handleUserRedInput = this.handleUserRedInput.bind(this);
    this.handleTypeUserChange = this.handleTypeUserChange.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this); 


    }




handleUserRedInput(e, id, type) { 

  const target = e.target;
  const value = target.value;
  const name = target.name;

  this.setState({ [name]: value });
}



handleTypeUserChange(e) {

  this.setState({ user_type: e.target.value})
}

    

handleLogIn(e) {
  e.preventDefault();
    this.props.changePage("LogIn")
}





handleUserRegister(e){
  e.preventDefault();
            
    fetch("/register", 
    {method: "POST",
    body: JSON.stringify(this.state),
    headers:{"Content-Type": "application/json"}
    }) 

    .then((res1) => {
      if (res1.ok) { 
        return res1.json()
      } else {
        res1.json().then((text) => alert(text))
      }
    }).then(res2 =>{
    const RegUserResponse = res2
    console.log("Success: Siging up", RegUserResponse.user_id, RegUserResponse);
     
    if (this.state.user_type === "venue") {
      console.log("Venue register form change page", RegUserResponse.user_id, RegUserResponse)
      this.props.changePage("VenueRegisterForm",
                    RegUserResponse.user_id,
                    RegUserResponse.user_type,
                    RegUserResponse.user_fname)
    }

    else{
      this.props.changePage("ProducerPage")
    };

  });      
}

         



render(){
    return(



<div>
<div className="container-fluid signin-page">
       <div className ="row bravo-big-row">
            <div className="col-md-4 col-md-offset-4 centered">
        

  <form autoComplete="off" className="form-sigin" onSubmit= {this.handleUserRegister}>

      <div className="form-group">
          <input type="text" name="fname" className="form-control" 
                        onChange={this.handleUserRedInput} placeholder="First Name" required />                                    
               </div>

      <div className="form-group">        
          <input type="text" name="lname" className="form-control" 
                        onChange={this.handleUserRedInput} placeholder="Last Name" required />                             
                </div>

      <div className="form-group">
          <input type="email" name="email" className="form-control" 
                        onChange={this.handleUserRedInput} placeholder="Enter email" required /><br />   
               </div>

      <div className="form-group">
          <input type="text" name="password" className="form-control" 
                          onChange={this.handleUserRedInput} placeholder="Password" required /><br /> 
              </div>



    <div className="align-center_login"> 

        <div className="form-check form-check-inline" onChange={this.handleTypeUserChange} required >

            <label className="radio-inline little-b">
                <input type="radio" name="user_type" value="venue" />Venue
                   </label>

            <label className="radio-inline">
                <input type="radio" name="user_type" value="producer" />Producer 
                    </label>
                                    


      </div>
         <button type="submit" className="btn btn-default">Submit</button><br /><br />                            
              <h2><a href="#" onClick= {this.handleLogIn}>Login</a></h2>
                 </div>
     </form>





      </div>
    </div>
  </div>            
</div>

    ); 
  }
}
