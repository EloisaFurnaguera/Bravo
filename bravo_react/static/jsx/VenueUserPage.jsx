class VenueUserPage extends React.Component {

    constructor(props) {
        super(props);
  
        this.state = {time_id: " ",
                        monday: " ",
                        tuesday: " ",
                        wednesday: " ",
                        thursday: " ",
                        friday: " ",
                        saturday: " ",
                        sunday: " ",
                        morning: " ",
                        late_morning: " ",
                        early_night: " ",
                        late_night: " ",
                        vanue_id: " ",
                        venue_name: " ",
                        venue_url: " ",
                        venue_email: " ",
                        venue_address: " ",
                        venue_city: " ",
                        venue_backspace: " ",
                        venue_capacity: " ",
                        venue_license: " ",
                        venue_free_rent: " ",
                        venue_rent: " "}  
   

         
         this.handleLogOutSubmit = this.handleLogOutSubmit.bind(this); 
         this.handleUpdateUserInfo = this.handleUpdateUserInfo.bind(this); 
         this.handleVenueUpdate = this.handleVenueUpdate.bind(this); 
    }
                      
      


    handleLogOutSubmit(e) {
      e.preventDefault();
      this.props.changePage("LogOut")
    };



    handleUpdateUserInfo(e) {
      e.preventDefault();
      this.props.changePage("UserUpdateForm")
    };


    handleVenueUpdate(e) {
      e.preventDefault();
      this.props.changePage("VenueUpdateForm")
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
                                vanue_id: venueResponse.vanue_id,
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

             <div>

                 <h1>VENUE PAGE</h1>
                 
                 <h1> Hello, {this.state.venue_name}</h1>
                    <p>id: {this.state.vanue_id}</p>
                    <p>name: {this.state.venue_name}</p>
                    <p>url: {this.state.venue_url}</p>
                    <p>email: {this.state.venue_email}</p>
                    <p>address: {this.state.venue_address}</p>
                    <p>city: {this.state.venue_city}</p>
RegisterForm
                    <p>backspace: {this.state.venue_backspace}</p>
                    <p>capacity: {this.state.venue_capacity}</p>
                    <p>license: {this.state.venue_license}</p>
                    <p>free rent: {this.state.venue_free_rent}</p>
                    <p>rent: {this.state.venue_rent}</p>

                    <ul>

                        <li>monday: {this.state.monday}</li>
                        <li>tuesday: {this.state.tuesday}</li>
                        <li>wednesday: {this.state.wednesday}</li>
                        <li>thursday: {this.state.thursday}</li>
                        <li>friday: {this.state.friday}</li>
                        <li>saturday: {this.state.saturday}</li>
                        <li>sunday: {this.state.sunday}</li>
                        <li>morning: {this.state.morning}</li>
                        <li>late_morning: {this.state.late_morning}</li>
                        <li>early_night: {this.state.early_night}</li>
                        <li>late_night: {this.state.late_night}</li>


                    </ul>
                 





                 <button  onClick= {this.handleLogOutSubmit}>Log Out</button>
                 <button  onClick= {this.handleUpdateUserInfo}>Update User Info</button>
                <button  onClick= {this.handleVenueUpdate}>Update Venue Info</button>

             </div>

 
          );       
    }

}