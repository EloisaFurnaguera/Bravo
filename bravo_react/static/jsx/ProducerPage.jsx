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


    

// handleUpdateUserInfo(e , id, type) {
//       e.preventDefault();
//       this.props.changePage("UserUpdateForm", id, "producer")
//     };






handleUpdateUserInfo(e , id, type, user_fname, user_lname, user_email) {
      e.preventDefault();
      this.props.changePageUserUpdate("UserUpdateForm", id, "producer", user_fname, user_lname, user_email )
  
     console.log("ososososooso") 
      console.log(id)
            

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
           

 <div className = "producer-page">
                 
    

        <div className="container">
          <div className="row justify-content-end">

   
            <div className="col-2">                      
             <a className="producer-page" href="#" onClick= {this.handleShowRegister}>Add a Show</a>
            </div>

{/*            <div className="col-2">                      
             <a className="producer-page" href="#" onClick= {this.handleUpdateUserInfo}>udate user info</a>
            </div>
*/}



            <div className="col-2">                      
             <a className="producer-page" href="#" onClick= {(e) => this.handleUpdateUserInfo(e, this.state.user_fname)}>udate user info</a>
            </div>





             <div className="col-1">                      
             <a className="producer-page" href="#" onClick= {this.handleLogOut}>Log Out</a>
            </div>


          </div>
         </div>

  

        <div className="container">
          <div className="row center-content-start">
             <div className="col-2">              
                       {this.state.user_fname} 
            </div>
          </div>
       </div>




         <h1></h1>
          <div className="card bg-dark text-white">
             <img className="card-img" src="/static/img/tim-mossholder-bJa_vJzwJTE-unsplash.jpg"/>
                <div className="card-img-overlay">
                  <h1 className="text-xl-center"></h1>
                  <p className="card-text"></p>
                  <p className="card-text"></p>
                </div>
              </div>
 



             <div className="col-xs-12 col-md-6 offset-md-3 col-lg-6 offset-lg-6">

             <h1>Your Shows</h1>              

              {this.state.show_list.map(show =>
                 <div key={show.show_id}>
             
                <h2><a className="producer-page" href="#" onClick={(e) => this.handleShowPage(e, show.show_id)}>{show.show_name}</a></h2></div>)}

              </div>
     




</div>





 
          );       
    }

}



