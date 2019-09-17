class VenueUserForProducer extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {
      user_id: "",
      user_fname: "",
      user_lname: "",
      user_email: "",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
      sunday: "",
      morning: "",
      late_morning: "",
      early_night: "",
      late_night: "",
      venue_id: this.props.id,
      venue_name: "",
      venue_url: "",
      venue_email: "",
      venue_address: "",
      venue_city: "",
      venue_backspace: "",
      venue_capacity: "",
      venue_license: "",
      venue_free_rent: "",
      venue_rent: "",
      venue_type: ""
    }  
    this.handleLogOut = this.handleLogOut.bind(this)     
    this.handleProducerPage = this.handleProducerPage.bind(this);  
  }
                            
  handleLogOut(e) {
    e.preventDefault();
    this.props.changePage("LogOut")                     
  }

  handleVenueUpdate(e, id) {
    e.preventDefault();
    this.props.changePage("VenueUpdateForm", id)
  }

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
  
  handleProducerPage(e, user_id) {
    e.preventDefault();
    this.props.changePage("ProducerPage", user_id)
  }

  componentDidMount() {     
    fetch("/venue_page_for_producers", 
      {method: "POST",
      body: JSON.stringify(this.state),
      headers:{'Content-Type': 'application/json'}
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
      console.log("Success: Venue")                    
    });                      
  }


  render(){
    return(


      <div className ="backgroud2-sp">

        <div className="top-container-sp">
          <div className="user-name-container-sp">

              <div className="nornal-letter-M-White-sp"> 
                <p className="little-letter-M-White-sp">Signed as: </p>
                <h1 className= "user-name-sp">{this.props.user_fname}</h1> 
              </div>
            </div>   

            <div className="top-links-container-sp">
              <div><a className="little-letter-M-White-sp" 
                      href="#" onClick= {this.handleLogOut}>Log Out</a>
            </div>
                                      
            <div><a className="little-letter-M-White-sp" 
                    href="#" onClick= {this.handleProducerPage}>Home</a>
            </div>                                       
          </div>
         </div>

         <div className="top-line-sp"></div>

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
     </div>


                     
    );       
  }
}