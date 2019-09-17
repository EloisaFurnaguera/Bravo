class ProducerPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user_id: "", 
      user_fname: "",
      user_lname: "",
      user_email: "",
      show_list: [],
    }; 
    this.handleLogOut = this.handleLogOut.bind(this)
    this.handleShowRegister = this.handleShowRegister.bind(this); 
    this.handleShowPage = this.handleShowPage.bind(this); 
    this.handleUpdateUserInfo = this.handleUpdateUserInfo.bind(this); 
  };

  handleShowRegister(e) {
    e.preventDefault();
    this.props.changePage("ShowRegisterForm")
  };   

  handleShowPage(e, id, type="producer", user_fname) {
    e.preventDefault();
    this.props.changePageUserUpdate("ShowPage", id, type, user_fname)              
  };

  handleLogOut(e) {
    e.preventDefault();
    this.props.changePage("LogOut")
  };

  handleUpdateUserInfo(e, id, user_fname, user_lname, user_email) {
    e.preventDefault();
    this.props.changePageUserUpdate(
      "UserUpdateForm", 
      id, 
      "producer", 
      user_fname, 
      user_lname, 
      user_email)         
  };

  componentDidMount() {
    window.scrollTo(0, 0)
    fetch("/producer_page", 
      {method: "POST",
      body: JSON.stringify(this.state),
      headers:{
        'Content-Type': 'application/json'
      }
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
    console.log("Success: ProducerPage")     
  });         
}     
    
render(){   
  return(

    <div className ="backgroud-pp">
      <div className="top-container-pp">
        <div className="user-name-container-pp">
          <div className="nornal-letter-M-White-pp"> 
            <p className="little-letter-M-White-pp">Signed as: </p>
            <h1 className= "user-name-pp">{this.state.user_fname}</h1> 
          </div>
        </div>   

        <div className="top-links-container-pp">
          <div>
            <a className="little-letter-M-White-pp" 
                  href="#" onClick= {this.handleLogOut}>Log Out</a>
          </div>
          <div>
            <a className="little-letter-M-White-pp" 
                  href="#" onClick= {(e) => this.handleUpdateUserInfo(e, 
                                                                    this.state.user_id,
                                                                    this.state.user_fname,
                                                                    this.state.user_lname,
                                                                    this.state.user_email )}>Account</a>                    
          </div>
          <div>
            <a className="little-letter-M-White-pp" 
                  href="#" onClick= {this.handleShowRegister}>Add Shows</a>
          </div>               
        </div>
      </div>

      <div className="top-line-pp"></div>
      <div className ="text-mid-container-pp">
        <div className ="info-container-pp"> 
          <h2 className= "text-center nornal3-letter-M-White-pp">Your Shows</h2>              
          <div className= "text-center">
            {this.state.show_list.map(show =>
              <div key={show.show_id}> 
                <a className="text-center nornal2-letter-M-White-pp" 
                          href="#" onClick={(e) => this.handleShowPage(e, 
                                                                      show.show_id, 
                                                                      this.state.type, 
                                                                      this.state.user_fname)}>{show.show_name}</a></div>)}   
              </div>
          </div>
        </div>
      </div>       
    );       
  }
}













 
