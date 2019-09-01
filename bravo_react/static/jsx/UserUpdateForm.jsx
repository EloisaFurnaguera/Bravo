class UserUpdateForm extends React.Component {

    constructor(props) {
        super(props);
 
        this.state = { fname:" ",
                       lname:" ",
                       email:" ",
                       password:" "}
                  
       
    this.handleUserUpdate = this.handleUserUpdate.bind(this);
    this.handleUserUpdateInput = this.handleUserUpdateInput.bind(this);
 

    }


  handleUserUpdateInput(e , id, type) { 

      const target = e.target;
      const value = target.value;
      const name = target.name;

      this.setState({ [name]: value });
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







 <div>
    <NavagationBar changePage={this.props.changePage} />


<div className="container">
  <div className="row">

    <div className="form_login">

            <form onSubmit= {this.handleUserUpdate}>

       

               <div className="form-group">
                        <input type="fname" name="fname" 
                               onChange={this.handleUserUpdateInput} placeholder= {this.props.user_fname} required />                                    
               </div>


               <div className="form-group">        
                        <input type="lname" name="lname" 
                             onChange={this.handleUserUpdateInput} placeholder={this.props.user_lname} required />                             
                </div>


                <div className="form-group">            
                      <input type="email" name="email" 
                        onChange={this.handleUserUpdateInput} placeholder= {this.props.user_email} required />                       
                </div> 


                <div className="form-group"> 

                        <input type="password" name="password" 
                             onChange={this.handleUserUpdateInput} placeholder="New password" required />   

                </div>

     
               <div className="align-center_login"> 


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
