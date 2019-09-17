class VenueUserPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      user_id: "",
      user_fname: "",
      user_lname: "",
      user_email: "",
      type: "venue",       
      monday: "No",
      tuesday: "No",
      wednesday: "No",
      thursday: "No",
      friday: "No",
      saturdayNo: "No",
      sunday: "No",
      morning: "No",
      late_morning: "No",
      early_night: "No",
      late_night: "No",
      venue_id: "",
      venue_name: "",
      venue_url: "",
      venue_email: "",
      venue_address: "",
      venue_city: "",
      venue_backspace: "",
      venue_capacity: "",
      venue_license: "",
      venue_rent: "",
      venue_type: ""
    } 
    this.handleLogOut = this.handleLogOut.bind(this)
    this.handleUpdateUserInfo = this.handleUpdateUserInfo.bind(this); 
    this.handleVenueUpdate = this.handleVenueUpdate.bind(this);
    this.handleMatchPage = this.handleMatchPage.bind(this);  
    }
                            
  handleLogOut(e) {
    e.preventDefault();
    this.props.changePage("LogOut")
  }

  handleMatchPage(e, id, type="venue", user_fname) {
    e.preventDefault();
    this.props.changePage("MatchPage", id, type, user_fname)
  };

  handleUpdateUserInfo(e, id, user_fname, user_lname, user_email) {
    e.preventDefault();
    this.props.changePageUserUpdate("UserUpdateForm", 
                                    id, 
                                    "venue", 
                                    user_fname, 
                                    user_lname, 
                                    user_email 
    )         
  };

  handleVenueUpdate(e, 
                    type="venue",
                    id,
                    user_id,
                    venue_id,
                    user_fname,
                    user_lname,
                    user_email,
                    venue_name,
                    venue_url,
                    venue_email,
                    venue_address,
                    venue_city,
                    venue_backspace,
                    venue_capacity,
                    venue_license,
                    venue_type,
                    venue_rent)
    {
    e.preventDefault();
    this.props.changePageVenueUpdate("VenueUpdateForm",
                                      type, 
                                      id,
                                      venue_id,
                                      user_fname,
                                      user_lname,
                                      user_email,
                                      venue_name,
                                      venue_url,
                                      venue_email,
                                      venue_address,
                                      venue_city,
                                      venue_backspace,
                                      venue_capacity,
                                      venue_license,
                                      venue_type,
                                      venue_rent)                            
  };

  componentDidMount() {     
    window.scrollTo(0, 0)
    fetch("/venue_page", 
      {method: "POST",
      body: JSON.stringify(this.state),
      headers:{
        'Content-Type': 'application/json'
      }
    }) 
    .then(res1 => res1.json())
    .then(venueResponse =>{
      this.setState({
        user_id: venueResponse.user_id,
        user_fname: venueResponse.user_fname,
        user_lname: venueResponse.user_lname,
        user_email: venueResponse.user_email,
        monday: venueResponse.monday,
        tuesday: venueResponse.tuesday,
        wednesday: venueResponse.wednesday,
        thursday: venueResponse.thursday,
        friday: venueResponse.friday,
        saturday: venueResponse.saturday,
        sunday: venueResponse.sunday,
        morning: venueResponse.morning,
        late_morning: venueResponse.late_morning,
        early_night: venueResponse.early_night,
        late_night: venueResponse.late_night,
        venue_id: venueResponse.venue_id,
        venue_name: venueResponse.venue_name,
        venue_url: venueResponse.venue_url,
        venue_email: venueResponse.venue_email,
        venue_address: venueResponse.venue_address,
        venue_city: venueResponse.venue_city,
        venue_backspace: venueResponse.venue_backspace,
        venue_capacity: venueResponse.venue_capacity,
        venue_license: venueResponse.venue_license,
        venue_type: venueResponse.venue_type,
        venue_rent: venueResponse.venue_rent
      })
    console.log('Success:')                   
  });                      
}


  render(){
    return(

      <div className ="backgroud-vp">

        <div className="top-container-vp">

          <div className="user-name-container-vp">

            <div className="nornal-letter-M-White-vp"> 
              <p className="little-letter-M-White-vp">Signed as: </p>
              <h1 className= "user-name-vp">{this.state.user_fname}</h1> 
            </div>
          </div>   

        <div className="top-links-container-vp">
          <div><a className="nornal-letter-M-White-vp" 
                  href="#" onClick= {this.handleLogOut}>Log Out</a>
        </div>

        <div><a className="nornal-letter-M-White-vp" 
                href="#" onClick= {(e) => 
                this.handleUpdateUserInfo(e, 
                                          this.state.user_id,
                                          this.state.user_fname,
                                          this.state.user_lname,
                                          this.state.user_email )}>Account</a>   
        </div>

        <div><a className="nornal-letter-M-White-vp" 
                href="#" onClick= {(e) => 
                this.handleVenueUpdate(e, 
                                      this.state.type,                                                                                          
                                      this.state.user_id,
                                      this.state.venue_id,
                                      this.state.user_fname,
                                      this.state.user_lname,
                                      this.state.user_email,
                                      this.state.venue_name,
                                      this.state.venue_url,
                                      this.state.venue_email,
                                      this.state.venue_address,
                                      this.state.venue_city,
                                      this.state.venue_backspace,
                                      this.state.venue_capacity,
                                      this.state.venue_license,
                                      this.state.venue_type,
                                      this.state.venue_rent)}>Edit</a>       
            </div>                 
          </div>
        </div>

        <div className="top-line-vp"></div>

        <div className ="text-mid-container-sp">
          <h2 className= "text-center nornal4-letter-M-White-pp">Venue Info</h2> 
            <div className ="info-container-sp">
                              
            <div className ="info-column-sp little-letter-info-sp">
              <div className="flex-sp">
                  <p className = "p-sp">Name: </p>
                  <p className="p2-sp">{this.state.venue_name}</p>       
              </div>

              <div className="flex-sp">
                <p className = "p-sp">Webside: </p>
                <p className="p2-sp">{this.state.venue_url}</p> 
              </div>

              <div className="flex-sp">             
                <p className = "p-sp">Email: </p>
                <p className="p2-sp">{this.state.venue_email}</p>
              </div>

              <div className="flex-sp">
                <p className = "p-sp">Address:</p>
                <p className="p2-sp">{this.state.venue_address}</p>
              </div>

              <div className="flex-sp">
                <p className = "p-sp">City:</p>
                <p className="p2-sp">{this.state.venue_city}</p>
              </div>

              <div className="flex-sp">
                <p className = "p-sp">Venue Type:</p>
                <p className="p2-sp">{this.state.venue_type}</p>
              </div>

              <div className="flex-sp">
                <p className = "p-sp">Dressing room:</p>
                <p className="p2-sp">{this.state.venue_backspace}</p>
              </div>

              <div className="flex-sp">
                <p className = "p-sp">Capacity: </p>
                <p className="p2-sp">{this.state.venue_capacity}</p>
              </div>

              <div className="flex-sp">
                <p className = "p-sp">Cabaret License: </p>
                <p className="p2-sp">{this.state.venue_license}</p>
              </div>

              <div className="flex-sp">
                <p className = "p-sp">Rent: </p>
                <p className="p2-sp">{this.state.venue_rent}</p>
              </div>
          </div>
        </div>
       </div>

        <div className ="text2-time-container-sp">

          <div className="time5-little-letter-sp">  
            <h4 className= "text-center nornal3-letter-M-White-pp"> Available Days</h4>
          </div>

        <div className="in-sp">

          <div className="time-little-letter-sp"> 
            <p>Monday:</p> 
            <p className="time-little2-letter-sp">{this.state.monday}</p>
          </div>

          <div className="time-little-letter-sp">
            <p>Tuesday:</p> 
            <p className="time-little2-letter-sp">{this.state.tuesday}</p>
          </div>

          <div className="time-little-letter-sp">
            <p>Wednesday:</p> 
            <p className="time-little2-letter-sp">{this.state.wednesday}</p>
          </div>

          <div className="time-little-letter-sp">
            <p>Thursday:</p> 
            <p className="time-little2-letter-sp">{this.state.thursday}</p>
          </div>


          <div className="time-little-letter-sp">
            <p>Friday:</p> 
            <p className="time-little2-letter-sp">{this.state.friday}</p>
          </div>

          <div className="time-little-letter-sp">
            <p>Saturday:</p> 
            <p className="time-little2-letter-sp">{this.state.saturday}</p>
          </div>
         
          <div className="time-little-letter-sp">
            <p>Sunday:</p> 
            <p className="time-little2-letter-sp">{this.state.sunday}</p>
          </div>                     
         </div>
        </div>

      <div className ="text2-time-container-sp">

        <div className="time5-little-letter-sp">   
          <h4 className= "text-center nornal3-letter-M-White-pp"> Available Time</h4>
        </div>

        <div className="in-sp">
           <div className="time-little-letter-sp">    
              <p >Morning:</p> 
              <p className="time-little2-letter-sp">{this.state.morning}</p>
            </div>
       
            <div className="time-little-letter-sp">  
               <p >Late morning:</p> 
               <p className="time-little2-letter-sp">{this.state.late_morning}</p>
            </div>
               
            <div className="time-little-letter-sp">  
               <p >Early night:</p> 
               <p className="time-little2-letter-sp">{this.state.early_night}</p>
            </div>
                  
            <div className="time-little-letter-sp">  
               <p >Late night:</p> 
               <p className="time-little2-letter-sp">{this.state.late_night}</p>
            </div>      
          </div>
       </div>  

        <div className ="button-vp">          
            <a className="big-letter-M-White-sp" 
              href="#" onClick={(e) => this.handleMatchPage(e, 
                                                            this.state.venue_id, 
                                                            this.state.type, 
                                                            this.state.user_fname)}>Find Matches</a>          
       </div>
    </div>
                     
  );       
 }
}