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


    handleVenueUpdate(e) {
      e.preventDefault();
      this.props.changePage("VenueUpdateForm")
    };


     handleMatchPage(e , id, type) {
      e.preventDefault();
      this.props.changePage("MatchPage", id, "venue")
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

 <div className = "producer-page">

             


<div className="container">

      <div className="row justify-content-end">



          <div className="col-2">                      
             <a className="producer-page" 
                           href="#" onClick= {(e) => this.handleUpdateUserInfo( e, 
                                                                                this.state.user_id,
                                                                                this.state.user_fname,
                                                                                this.state.user_lname,
                                                                                this.state.user_email 
                                                                                                     )}>udate user info</a>
          </div>



          <div className="col-2">                      
             <a className="producer-page" href="#" onClick= {this.handleLogOut}>Log Out</a>
          </div>

        </div>
   </div>

  




      <div className="container">

          <div className="row center-content-start">
              <div className="col-1">              
                       <h4>{this.state.user_fname}</h4>
               </div>
          </div>
       </div>




            <h1></h1>
          <div className="card bg-dark text-white">
             <img className="card-img" src="/static/img/carson-masterson-g-23pY-8I20-unsplash.jpg"/>
                <div className="card-img-overlay">
                  <h1 className="text-xl-center"></h1>
                  <p className="card-text"></p>
                  <p className="card-text"></p>
                </div>
            </div>
 
                 
                 <h1> Hello, {this.state.venue_name}</h1>
                    <p>id: {this.state.venue_id}</p>
                    <p>name: {this.state.venue_name}</p>
                    <p>url: {this.state.venue_url}</p>
                    <p>email: {this.state.venue_email}</p>
                    <p>address: {this.state.venue_address}</p>
                    <p>city: {this.state.venue_city}</p>

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
                 





               
           
                 <button  onClick= {this.handleMatchPage}>Find Matches</button>
                 <button  onClick={(e) => this.handleMatchPage(e, this.state.venue_id)}>Match</button>

             </div>

 
          );       
    }

}