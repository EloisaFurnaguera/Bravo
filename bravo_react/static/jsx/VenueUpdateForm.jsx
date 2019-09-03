class VenueUpdateForm extends React.Component {

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
   

    

    this.handleVenueUpdate = this.handleVenueUpdate.bind(this);
    this.handleVenueUpdateInput = this.handleVenueUpdateInput.bind(this);
    this.handleVenueUpdateSelect = this.handleVenueUpdateSelect.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this)


    }




  handleVenueUpdateInput(e) { 

      const target = e.target;
      const value = target.value;
      const name = target.name;

      this.setState({ [name]: value });

    };



  handleVenueUpdateSelect(e) { 

      const target = e.target;
      const value = target.checked;
      const name = target.name;

      this.setState({ [name]: value });

    };


  handleLogOut(e) {
             e.preventDefault();
      this.props.changePage("LogOut")
    }






  handleVenueUpdate (e) {
      event.preventDefault();


      fetch("/venue_update", 
      {method: "POST",
      body: JSON.stringify(this.state),
      headers:{'Content-Type': 'application/json'} 
        })


      .then(res1 => res1.json())
      .then(res2 =>{
      const VenueUpdateResponse = JSON.stringify(res2)
      this.props.changePage("VenueUserPage", VenueUpdateResponse)   
      

    })



  }

        


  render(){
      return(







<div className="container-fluid venue-update">

   


      <div className="col-3">                      
             <a className="big-letter-M-White" href="#" onClick= {this.handleLogOut}>Log Out</a>
      </div>

         


              
              
   <form onSubmit= {this.handleVenueUpdate}>        

          <div className="form-group">
            <label>Venue Name</label>
            <input type="text" className="form-control" name="venue_name"  value={this.state.venue_name} 
                               onChange={this.handleVenueUpdateInput} placeholder="Show / Group / Act" required />         
          </div>



          <div className="form-group">
            <label>Address</label>
            <input type="text" className="form-control" name="venue_address"  value={this.state.venue_address} 
                               onChange={this.handleVenueUpdateInput} placeholder="venue_address" required />         
          </div>



          <div className="form-group">
            <label>City</label>
            <input type="text" className="form-control" name="venue_city"  value={this.state.venue_city} 
                               onChange={this.handleVenueUpdateInput} placeholder="venue_city" required />         
          </div>




          <div className="form-group">
            <label>Email</label>
            <input type="venue_email" className="form-control" name="venue_email"  value={this.state.venue_email} 
                               onChange={this.handleVenueUpdateInput} placeholder="venue_email" required />         
          </div>

                
          <div className="form-group">
            <label>Website</label>
            <input type="venue_url" className="form-control" name="venue_url"  value={this.state.venue_url} 
                               onChange={this.handleVenueUpdateInput} placeholder="venue_url" required />         
          </div>
                




            <div className="form-group">
              <label >Type of Show</label>
                 <select className="form-control" value={this.state.venue_type} name="venue_type"
                                                    onChange={this.handleVenueUpdateInput}>

                <option value="bar">bar</option>
                <option value="cafe">cafe</option>
                <option value="hall">hall</option>
                <option value="night_club">night_club</option>
                <option value="restaurant">restaurant</option>
                <option value="special_event">special_event</option>
                <option value="theater">theater</option>
                <option value="other">other</option>
    
                </select>
            </div>




          <div className="form-group">
             <label >Is there a backspace/dressing room:</label>
              <select className="form-control form-control" value={this.state.venue_backspace} 
                                                      name="venue_backspace" onChange={this.handleVenueUpdateInput}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>           
                </select>
            </div>






               <div className="form-group">
            <label>Capacity</label>
            <input type="number" className="form-control" name="venue_capacity"  value={this.state.venue_capacity} 
                               onChange={this.handleVenueUpdateInput} placeholder="venue_capacity" required />         
          </div>
                




               
          <div className="form-group">
             <label >Do you have a cabaret license:</label>
              <select className="form-control form-control" value={this.state.venue_license} 
                                                      name="venue_license" onChange={this.handleVenueUpdateInput}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>           
                </select>
            </div>






           <div>
             <label>Day of the day:</label>
          </div>
          <div className="form-check">
              <input className="form-check-input" type="checkbox" name="monday" onChange={this.handleVenueUpdateSelect}/>
              <label className="form-check-label">Monday</label>
          </div>
          <div className="form-check">
              <input className="form-check-input" type="checkbox" name="tuesday" onChange={this.handleVenueUpdateSelect}/>
              <label className="form-check-label">Tuesday</label>
          </div>
           <div className="form-check">
              <input className="form-check-input" type="checkbox" name="wednesday" onChange={this.handleVenueUpdateSelect}/>
              <label className="form-check-label">Wednesday</label>
          </div>
           <div className="form-check">
              <input className="form-check-input" type="checkbox" name="thursday" onChange={this.handleVenueUpdateSelect}/>
              <label className="form-check-label">Thursday</label>
          </div>
          <div className="form-check">
              <input className="form-check-input" type="checkbox" name="friday" onChange={this.handleVenueUpdateSelect}/>
              <label className="form-check-label">Friday</label>
          </div>
           <div className="form-check">
              <input className="form-check-input" type="checkbox" name="saturday" onChange={this.handleVenueUpdateSelect}/>
              <label className="form-check-label">Saturday</label>
          </div>
           <div className="form-check">
              <input className="form-check-input" type="checkbox" name="sunday" onChange={this.handleVenueUpdateSelect}/>
              <label className="form-check-label">Sunday</label>
          </div>
         
          
          <div>
             <label>Time available</label>
          </div>
          <div className="form-check">
              <input className="form-check-input" type="checkbox" name="morning" onChange={this.handleVenueUpdateSelect}/>
              <label className="form-check-label">morning</label>
          </div>
          <div className="form-check">
              <input className="form-check-input" type="checkbox" name="late_morning" onChange={this.handleVenueUpdateSelect}/>
              <label className="form-check-label">Late Morning</label>
          </div>
           <div className="form-check">
              <input className="form-check-input" type="checkbox" name="early_night" onChange={this.handleVenueUpdateSelect}/>
              <label className="form-check-label">Early Night</label>
          </div>
           <div className="form-check">
              <input className="form-check-input" type="checkbox" name="late_night" onChange={this.handleVenueUpdateSelect}/>
              <label className="form-check-label">Late Night</label>
          </div>
     




          <div className="form-group">
            <label>How much is the space per hour</label>
            <input type="number" className="form-control" name="venue_rent"  value={this.state.venue_rent} 
                               onChange={this.handleVenueUpdateInput} placeholder="venue_rent" required />         
          </div>








        <div className="form-group">
             <label >Looking to fill the space for free:</label>
              <select className="form-control form-control" value={this.state.venue_free_rent} 
                                                      name="venue_free_rent" onChange={this.handleVenueUpdateInput}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>           
                </select>
            </div>










            <div className="row justify-content-center">
            <button type="submit" className="btn btn-default">Submit</button>
                </div>
                  

              </form>           
     

</div> 
  






    )       
  }

}