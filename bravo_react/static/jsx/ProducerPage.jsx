class ProducerPage extends React.Component {

    constructor(props) {
        super(props);
 
        this.state = {user_id:" ",
                      user_fname:"",
                      user_lname:" ",
                      user_email:" ",
                      show_list:[],
                    }               


        this.handleLogOut = this.handleLogOut.bind(this)
        this.handleShowRegister = this.handleShowRegister.bind(this); 
        this.handleShowPage = this.handleShowPage.bind(this); 
        this.handleUpdateUserInfo = this.handleUpdateUserInfo.bind(this); 
                                             
    }

 

handleShowRegister(e) {
      e.preventDefault();
      this.props.changePage("ShowRegisterForm")
    };
    

handleShowPage(e , id, type) {
     e.preventDefault();
      this.props.changePage("ShowPage", id, "show")
                
    };


  handleLogOut(e) {
             e.preventDefault();
      this.props.changePage("LogOut")
    }


  

handleUpdateUserInfo(e , id, user_fname, user_lname, user_email) {
      e.preventDefault();
      this.props.changePageUserUpdate("UserUpdateForm", id, "producer", user_fname, user_lname, user_email )
           

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
                       
        console.log("Success:", JSON.stringify(producerResponse)) 
      
    });         

}     
    


render(){   
    return(
           
<div className ="container-fluid producer-page">

<div>

  <div>
    <div className="text-nowrap big-letter-M-White"> 
      Signed in as: 
      <h1>{this.state.user_fname}</h1> 
    </div>
  </div>


  <div className="d-flex flex-row-reverse bd-highlight">
        <div className="p-2 bd-highlight"> 
              <a className="big-letter-M-White" href="#" onClick= {this.handleLogOut}>Log Out</a>
        </div>
        <div className="p-2 bd-highlight">
             <a className="big-letter-M-White" 
                             href="#" onClick= {(e) => this.handleUpdateUserInfo( e, 
                                                                                  this.state.user_id,
                                                                                  this.state.user_fname,
                                                                                  this.state.user_lname,
                                                                                  this.state.user_email 
                                                                                                 )}>Account</a>
        </div>
        <div className="p-2 bd-highlight">
          <a className="big-letter-M-White" href="#" onClick= {this.handleShowRegister}>Add Shows</a>
        </div>
  </div>

</div>




  <div className ="row">
    <div className ="col my-text">


  <div className="row">

      <div className= "col">

            <div>
                 <h1 className= "text-center">Your Shows</h1>              

              {this.state.show_list.map(show =>
                <div key={show.show_id}> 
                    <a className="big-letter-Lato" href="#" onClick={(e) => this.handleShowPage(e, show.show_id)}>{show.show_name}</a>
                </div>)}
          </div>









      </div>
    
      </div>


  </div>
 </div>
</div>


 
       );       
    }

}













 
