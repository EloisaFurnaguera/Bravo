class VenueRegisterForm extends React.Component {

    constructor(props) {
        super(props);
 
        this.state = {venue_name:" ",
                      venue_url:" ",
                      venue_email:" ",
                      venue_address:" ",
                      venue_city:" ",
                      venue_backspace:" ",
                      venue_capacity:" ",
                      venue_license:" ",
                      venue_free_rent:" ",
                      venue_rent:" ",

                      monday:" ",
                      tuesday:" ",
                      wednesday:" ",
                      thursday:" ",
                      friday:" ",
                      saturday:" ",
                      sunday:" ",
                      morning:" ",
                      late_morning:" ",
                      early_night:" ",
                      late_night:" "
                                 };
   

    

    this.handleVenueRegister = this.handleVenueRegister.bind(this);
    this.handleVenueInput = this.handleVenueInput.bind(this);
    this.handleVenueSelect = this.handleVenueSelect.bind(this);


    }




  handleVenueInput(e) { 

      const target = e.target;
      const value = target.value;
      const name = target.name;

      this.setState({ [name]: value });

    };



  handleVenueSelect(e) { 

      const target = e.target;
      const value = target.checked;
      const name = target.name;

      this.setState({ [name]: value });

    };



  handleVenueRegister (e) {
      event.preventDefault();


      fetch("/register_venue", 
      {method: "POST",
      body: JSON.stringify(this.state),
      headers:{'Content-Type': 'application/json'} 
        })


      .then(res1 => res1.json())
      .then(res2 =>{
      const VenueRegResponse = JSON.stringify(res2)
      this.props.changePage("VenueUserPage", VenueRegResponse)   
      

    })



  }

        


render(){
    return(

             <div>

                <h1> ADD INFO HERE</h1>

              
                <form onSubmit= {this.handleVenueRegister}>  

             
                  <input type="text" name="venue_name" value={this.state.venue_name} 
                         onChange={this.handleVenueInput} required />venue_name<br />

                  <input type="text" name="venue_address" value={this.state.venue_address} 
                        onChange={this.handleVenueInput} required />venue_address<br />


                 <input type="text" name="venue_city" value={this.state.venue_city} 
                        onChange={this.handleVenueInput} required />venue_city<br />


                 <input type="text" name="venue_email" value={this.state.venue_email} 
                      onChange={this.handleVenueInput} required />venue_email<br />


                <input type="text" name="venue_url" value={this.state.venue_url} 
                      onChange={this.handleVenueInput} required />venue_url<br /><br />

              
               venue_type <select value={this.state.venue_type} name="venue_type"
                         onChange={this.handleVenueInput}>

                <option value="bar">bar</option>
                <option value="cafe">cafe</option>
                <option value="hall">hall</option>
                <option value="night_club">night_club</option>
                <option value="restaurant">restaurant</option>
                <option value="special_event">special_event</option>
                <option value="theater">theater</option>
                <option value="other">other</option>
     
                </select><br /><br />


            <label>Is there a backspace/dressing room:  </label>
              <input type="radio" name="venue_backspace" value="yes" onChange={this.handleVenueInput} />Yes
      
              <input type="radio" name="venue_backspace" value="no" onChange={this.handleVenueInput} />No<br />


           
            <input type="text" name="venue_capacity" value={this.state.venue_capacity} 
                      onChange={this.handleVenueInput} required />Capacity<br /><br />

         

               
            
            <label>Do you have a cabaret license:  </label>
              <input type="radio" name="venue_license" value="yes" onChange={this.handleVenueInput} />Yes
      
              <input type="radio" name="venue_license" value="no" onChange={this.handleVenueInput} />No<br />

 
 
              
                
              <label>Day of the day:  </label>
              <input type="checkbox" name="monday" onChange={this.handleVenueSelect} />Monday
               <input type="checkbox" name="tuesday" onChange={this.handleVenueSelect} />Tuesday
              <input type="checkbox" name="wednesday" onChange={this.handleVenueSelect} />wednesday
              <input type="checkbox" name="thursday" onChange={this.handleVenueSelect} />thursday
              <input type="checkbox" name="friday" onChange={this.handleVenueSelect} />friday       
              <input type="checkbox" name="saturday" onChange={this.handleVenueSelect} />saturday    
              <input type="checkbox" name="sunday" onChange={this.handleVenueSelect}/>sunday<br />



              <label>Time available:  </label>
              <input type="checkbox" name="morning" onChange={this.handleVenueSelect} />Morning
               <input type="checkbox" name="late_morning" onChange={this.handleVenueSelect} />late_morning
              <input type="checkbox" name="early_night" onChange={this.handleVenueSelect} />early_night
              <input type="checkbox" name="late_night" onChange={this.handleVenueSelect} />late_night<br />




               <input type="text" name="venue_rent" value={this.state.venue_rent} 
                      onChange={this.handleVenueInput} required />How much is the space per hour<br /><br />



              <label>Looking to fill the space for free:  </label>
              <input type="radio" name="venue_free_rent" onChange={this.handleVenueInput} 
                     value="yes"/>Yes
      
              <input type="radio" name="venue_free_rent" onChange={this.handleVenueInput}          
                     value="no" />No<br />
       




                <input type="submit" name="Add" />                     
            




              </form>             
            </div>
 
    )       
  }

}
