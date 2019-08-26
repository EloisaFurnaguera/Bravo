class ProducerPage extends React.Component {

    constructor(props) {
        super(props);
 
        this.state = {user_id:" ",
                      user_fname: " ",
                      user_lname: " ",
                      show: [],
                    }               


        this.handleLogOutSubmit = this.handleLogOutSubmit.bind(this);
        this.handleUpdateUserInfo = this.handleUpdateUserInfo.bind(this);                

                      
    }

 


handleLogOutSubmit(e) {
      e.preventDefault();
      this.props.changePage("LogOut")
    };

handleUpdateUserInfo(e) {
      e.preventDefault();
      this.props.changePage("UserUpdateForm")
    };




    componentDidMount() {
        
        fetch("/producer_page", 
        {method: "POST",
        body: JSON.stringify(this.state),
        headers:{'Content-Type': 'application/json'}
        }) 
        .then(res1 => res1.json())
        .then(producerResponse =>{
          this.setState({ 
                        user_fname: producerResponse.user_fname,
                        user_lname: producerResponse.user_lname,
                        show: producerResponse.show

                      }
                        ) 

          console.log("Success:", JSON.stringify(producerResponse))

         


             });         


}


              
    

  // NEED TO ALL THE ERROR MESSAFE

    render(){
   
        return(

             <div>
               

              

                 <h1>PRODUCER PAGE</h1>
                 <h1> {this.state.user_fname} </h1>
                 <h1> {this.state.user_lname} </h1>






                        
                  


                 <button  onClick= {this.handleLogOutSubmit}>Log Out</button>
                 <button  onClick= {this.handleUpdateUserInfo}>Update User Info</button>


             </div>

 
          );       
    }

}



