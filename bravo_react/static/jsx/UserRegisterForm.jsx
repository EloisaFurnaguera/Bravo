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
    this.handleUserRedInput = this.handleUserRedInput.bind(this);
    this.handleUserRedSelect = this.handleUserRedSelect.bind(this);
  

    }




  handleUserRedInput(e , id, type) { 

      const target = e.target;
      const value = target.value;
      const name = target.name;

      this.setState({ [name]: value });
    };



  handleUserRedSelect(e , id, type) { 

      const target = e.target;
      const value = target.checked;
      const name = target.name;

      this.setState({ [name]: value });


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
    <NavagationBar changePage={this.props.changePage} />


<div className="container">
  <div className="row">
    <div className="form_login">



            <form onSubmit= {this.handleUserRegister}>

       

               <div className="form-group">
                        <input type="fname" name="fname" 
                               onChange={this.handleUserRedInput} placeholder="First Name" required />                                    
               </div>


               <div className="form-group">        
                        <input type="lname" name="lname" 
                             onChange={this.handleUserRedInput} placeholder="Last Name" required />                             
                </div>


                <div className="form-group">            
                      <input type="email" name="email" 
                        onChange={this.handleUserRedInput} placeholder="Enter email" required />                       
                </div> 


                <div className="form-group">         
                        <input type="password" name="password" 
                             onChange={this.handleUserRedInput} placeholder="Password" required />   

                </div>

     
               <div className="align-center_login"> 

                       <div className="form-check" onChange={this.handleUserRedInput}>
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

        );
    
   }
}
