class UserUpdateForm extends React.Component {

    constructor(props) {
        super(props);
 
        this.state = { fname:this.props.user_fname,
                       lname:this.props.user_lname,
                       email:this.props.user_email,
                       password:""}
                  
    

    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleUserHome = this.handleUserHome.bind(this);
    this.handleUserUpdate = this.handleUserUpdate.bind(this);
    this.handleUserUpdateInput = this.handleUserUpdateInput.bind(this);
 

    }


  handleUserUpdateInput(e , id, type) { 

      const target = e.target;
      const value = target.value;
      const name = target.name;

      this.setState({ [name]: value });
    };




  handleLogOut(e) {
          e.preventDefault();
      this.props.changePage("LogOut")
    }


  handleUserHome(e) {
       e.preventDefault();

    if (this.props.type === "venue"){
           this.props.changePage("VenueUserPage")  
    }

    else{              
      this.props.changePage("ProducerPage") 
    }        

  }




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

                if (this.props.type === "venue"){
                this.props.changePage("VenueUserPage", UserUpdateResponse)
                }

                else{
                this.props.changePage("ProducerPage", UserUpdateResponse)
                } 

              
            })

}
   




render(){
    return(




<div className ="backgroud-up">


<div className="top-container-vp">

      <div className="user-name-container-vp">
            <div className="nornal-letter-M-White-vp"> 
                <p className="little-letter-M-White-vp">Signed as: </p>
                  <h1 className= "user-name-vp">{this.props.user_fname}</h1> 
                   </div>
                       </div>   


  <div className="top-links-container-vp">

        <div><a className="nornal-letter-M-White-vp" href="#" onClick= {this.handleLogOut}>Log Out</a>
          </div>


        <div><a className="nornal-letter-M-White-vp" href="#" onClick= {this.handleUserHome}>Home</a>
            </div>                   
               </div>
  </div>






   


   <div className="container col-md-8 .col-md-offset-3">
  
      <div className="big2-row-update"> </div>

                  

      <form className="form2-up" onSubmit= {this.handleUserUpdate}>

        <div className="form-group">
          <label>First Name</label>  
              <input type="fname" className="form-up" onChange={this.handleUserUpdateInput} 
                                                      name="fname" 
                                                     
                                                      placeholder= {this.props.user_fname} required />                                    
                   </div>

        <div className="form-group">
          <label>Last Name</label>        
              <input type="lname" className="form-up" onChange={this.handleUserUpdateInput} 
                                                      name="lname" 
                                                    
                                                      placeholder={this.props.user_lname} required />                             
                </div>

        <div className="form-group">
          <label>Email</label>              
            <input type="email" className="form-up" onChange={this.handleUserUpdateInput} 
                                                    name="email" 
                                                   
                                                    placeholder= {this.props.user_email} required />                       
                </div> 

        <div className="form-group"> 
          <label>New Password</label>  
                <input type="password" className="form-up" onChange={this.handleUserUpdateInput}
                                                           name="password" 
                                                           placeholder="New password" required />   
                  </div>

     
          <div className="align-center_login"> 
              <button type="submit" className="btn btn-default">Submit</button>
            
                </div>
      </form>
    </div>             
 </div>



    );
          
  }

}
