class VenueUserPage extends React.Component {

    constructor(props) {
        super(props);
  
        this.state = {user_id:" ",
                      user_fname:"",
                      user_lname:" ",
                      user_email:" ",
       
                      time_id:" ",
                      monday:" ",
                      tuesday:" ",
                      wednesday:" ",
                      thursday:" ",
                      friday:" ",
                      saturday:" ",
                      sunday:"",
                      morning: " ",
                      late_morning:" ",
                      early_night:" ",
                      late_night:" ",

                      venue_id:" ",
                      venue_name:" ",
                      venue_url:" ",
                      venue_email:" ",
                      venue_address:" ",
                      venue_city:" ",
                      venue_backspace:" ",
                      venue_capacity:" ",
                      venue_license:" ",
                      venue_free_rent:" ",
                      venue_rent:" ",
                      venue_type:"venue"}  
   

         
         this.handleLogOut = this.handleLogOut.bind(this)
         this.handleUpdateUserInfo = this.handleUpdateUserInfo.bind(this); 
         this.handleVenueUpdate = this.handleVenueUpdate.bind(this);
         this.handleMatchPage = this.handleMatchPage.bind(this);  
    }
                      
      


    handleLogOut(e) {
        e.preventDefault();
      this.props.changePage("LogOut")
    }


    handleVenueUpdate(e, id) {
      e.preventDefault();
      this.props.changePage("VenueUpdateForm", id)
    };


     handleMatchPage(e , id, user_fname, type="venue") {
      e.preventDefault();
      this.props.changePageUserUpdate("MatchPage", id, type, user_fname)
 
    };



    handleUpdateUserInfo(e , id, user_fname, user_lname, user_email) {
       e.preventDefault();
      this.props.changePageUserUpdate("UserUpdateForm", id, "venue", user_fname, user_lname, user_email )         

    };




    componentDidMount() {
        
        fetch("/venue_page", 
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
                                venue_free_rent: venueResponse.venue_free_rent,
                                venue_rent: venueResponse.venue_rent,
                                 })

                       console.log('Success:', JSON.stringify(venueResponse))
                    
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

                  <div><a className="nornal-letter-M-White-vp" href="#" onClick= {this.handleLogOut}>Log Out</a>
                      </div>

                        <div><a className="nornal-letter-M-White-vp" href="#" onClick= {(e) => this.handleUpdateUserInfo( e, 
                                                                                        this.state.user_id,
                                                                                        this.state.user_fname,
                                                                                        this.state.user_lname,
                                                                                        this.state.user_email )}>Account</a>
                           
                          </div>

                         <div><a className="nornal-letter-M-White-vp" href="#" onClick= {(e) => this.handleVenueUpdate( e, 
                                                                                                                        this.state.venue_id,
                                                                                                                        this.state.user_fname)}>Edit</a>
                           </div>
                   
           </div>
  </div>






 <div className="top-line-vp"></div>


    <div className ="text-mid-container-vp">


        <div className ="info-container-vp">
          
              
              <div className ="info-column-vp little-letter-info-vp">
                <div className="flex-vp">
                    <p className = "p-vp">NAME: </p>
                    <p className="p2-vp">{this.state.venue_name}</p>       
                  </div>

                <div className="flex-vp">
                    <p className = "p-vp">WEBSITE: </p>
                    <p className="p2-vp">{this.state.venue_url}</p> 
                  </div>

                <div className="flex-vp">             
                    <p className = "p-vp">EMAIL: </p>
                    <p className="p2-vp">{this.state.venue_email}</p>
                  </div>

                <div className="flex-vp">
                    <p className = "p-vp">ADDRESS: </p>
                    <p className="p2-vp">{this.state.venue_address}</p>
                  </div>

                <div className="flex-vp">
                    <p className = "p-vp">CITY:</p>
                    <p className="p2-vp">{this.state.venue_city}</p>
                  </div>

                <div className="flex-vp">
                    <p className = "p-vp">BACK SPACE:</p>
                    <p className="p2-vp">{this.state.venue_backspace}</p>
                  </div>

                 <div className="flex-vp">
                    <p className = "p-vp">CAPACITY: </p>
                    <p className="p2-vp">{this.state.venue_capacity}</p>
                  </div>

                <div className="flex-vp">
                    <p className = "p-vp">CABARET LICENSE: </p>
                    <p className="p2-vp">{this.state.venue_license}</p>
                  </div>

                <div className="flex-vp">
                    <p className = "p-vp">RENTING FOR: </p>                   
                    <p className="p2-vp">${this.state.venue_rent}</p>
                  </div>

          </div>
       </div>
    </div>

       



  
<div className ="text-time-container-vp">


        <div className="time-little-letter-vp">
                <p>MONDAY:</p> <p className="time-little2-letter-vp">{this.state.monday}</p>
              </div>

        <div className="time-little-letter-vp">
                <p>TUESDAT:</p> <p className="time-little2-letter-vp">{this.state.tuesday}</p>
              </div>

        <div className="time-little-letter-vp">
                <p>WEDNESDAY:</p> <p className="time-little2-letter-vp">{this.state.wednesday}</p>
              </div>

        <div className="time-little-letter-vp">
                <p>THURSDAY:</p> <p className="time-little2-letter-vp">{this.state.thursday}</p>
              </div>

        <div className="time-little-letter-vp">
                <p>FRIDAY:</p> <p className="time-little2-letter-vp">{this.state.friday}</p>
              </div>

        <div className="time-little-letter-vp">
                <p>SATURDAY:</p> <p className="time-little2-letter-vp">{this.state.saturday}</p>
              </div>

        <div className="time-little-letter-vp">
                <p>SUNDAY:</p> <p className="time-little2-letter-vp">{this.state.sunday}</p>
              </div>              

</div>






<div className ="text-time2-container-vp">
   
       <div className="time-little-letter-vp">    
           <p>MORNING:</p> <p className="time-little2-letter-vp">{this.state.morning}</p>
           </div>

        <div className="time-little-letter-vp">  
           <p>LATE MORNING:</p> <p className="time-little2-letter-vp">{this.state.late_morning}</p>
           </div>

        <div className="time-little-letter-vp">  
           <p>EARLY NIGHT:</p> <p className="time-little2-letter-vp">{this.state.early_night}</p>
           </div>

        <div className="time-little-letter-vp">  
           <p>LATE NIGHT:</p> <p className="time-little2-letter-vp">{this.state.late_night}</p>
           </div>
        
</div>






<div className ="button-vp">
             
      <a className="big-letter-M-White" 
             href="#" onClick={(e) => this.handleMatchPage(e, this.state.venue_id, this.state.user_fname)}>Find
             Matches</a>
          
   </div>







 </div>
               
 
       );       
    }

}