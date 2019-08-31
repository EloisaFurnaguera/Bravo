class ProducerPage extends React.Component {

    constructor(props) {
        super(props);
 
        this.state = {user_id:" ",
                      user_fname: " ",
                      user_lname: " ",
                      user_email: " ",
                      show_list: [],
                    }               


        this.handleLogOutSubmit = this.handleLogOutSubmit.bind(this);
        this.handleShowRegister = this.handleShowRegister.bind(this); 
        this.handleShowPage = this.handleShowPage.bind(this); 

        this.handleUpdateUserInfoButton = this.handleUpdateUserInfoButton.bind(this); 
        this.handleUpdateUserInfoNavLink = this.handleUpdateUserInfoNavLink.bind(this);                                      
    }

 


handleLogOutSubmit(e) {
      e.preventDefault();
      this.props.changePage("LogOut")
    };




handleShowRegister(e) {
      e.preventDefault();
      this.props.changePage("ShowRegisterForm")
    };
    

handleShowPage(e , id, type) {
     e.preventDefault();
      this.props.changePage("ShowPage", id, "show")
            

    };




handleUpdateUserInfoButton(e , id, type) {
      e.preventDefault();
      this.props.changePage("UserUpdateForm", id, "producer")
    };



handleUpdateUserInfoNavLink(e , id, type, user_fname, user_lname, user_email) {
      e.preventDefault();
      this.props.changePageUpdateUserInfo("UserUpdateForm", 
                                           id, 
                                           "producer", 
                                           user_fname, 
                                           user_lname, 
                                           user_email)
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
                      user_id: producerResponse.user_id,
                      user_fname: producerResponse.user_fname,
                      user_lname: producerResponse.user_lname,
                      user_email: producerResponse.user_email,
                      show_list: producerResponse.show_list

                    })
                       
        // console.log("Success:", JSON.stringify(producerResponse)) 
        console.log(this.state)   


           });         


}     
    
  // NEED TO ALL THE ERROR MESSAFE

    render(){
   
        return(
           

        <div>
            
             <NavagationBar handleUpdateUserInfoNav={this.props.handleUpdateUserInfoNavLink} 
                            changePage={this.props.changePage} />
            


                 <p>PRODUCER PAGE</p>
                 <p> {this.state.user_fname} </p>
                 <p> {this.state.user_lname} </p>
     


                 <button  onClick= {this.handleUpdateUserInfoButton}>Update User Info</button>


                 <button  onClick= {this.handleLogOutSubmit}>Log Out</button>
                 <button  onClick= {this.handleShowRegister}>Add a Show</button>


               




                 <div>
                   {this.state.show_list.map(show =>
                   <li key={show.show_id}>
                   <a href="#" onClick={(e) => this.handleShowPage(e, show.show_id)}>{show.show_name}</a></li>)}

                </div>



        



             </div>

 
          );       
    }

}



