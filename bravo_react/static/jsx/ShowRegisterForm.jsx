class ShowRegisterForm extends React.Component {

    constructor(props) {
        super(props);
 
        this.state = {monday: " ",
                      tuesday: " ",
                      wednesday: " ",
                      thursday: " ",
                      friday: " ",
                      saturday: " ",

                      morning: " ",
                      late_morning: " ",
                      early_night: " ",
                      late_night: " ",
                     
                      show_name: " ",
                      show_type: " ",
                      show_url: " ",
                      show_amount_people: " ",
                      show_dressing_room: " ",
                      show_length: " ",
                      show_ticket_price: " ",
                      time_id: " ",
                      show_rent: " ",
                      show_free_rent: " ",

                      show_location_preferred:[]};


                      
                      // anywhere: " ",
                      // berkeley: " ",
                      // burlingame: " ",
                      // daly_city: " ",
                      // dublin: " ",
                      // emeryville: " ",
                      // palo_alto: " ",
                      // san_francisco: " ",
                      // san_jose: " ",
                      // santa_clara: " ",
                      // sunnyvale: " "};
   

    

    this.handleShowRegister = this.handleShowRegister.bind(this);
    this.handleShowInput = this.handleShowInput.bind(this);
    this.handleShowSelect = this.handleShowSelect.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this)
    this.handleProducerPage = this.handleProducerPage.bind(this)


    }




  handleShowInput(e) { 

      const target = e.target;
      const value = target.value;
      const name = target.name;

      this.setState({ [name]: value });

    };



  handleShowSelect(e) { 

      const target = e.target;
      const value = target.checked;
      const name = target.name;

      this.setState({ [name]: value });

    };




 handleLogOut(e) {
             e.preventDefault();
      this.props.changePage("LogOut")
    }


 handleProducerPage(e) {
             e.preventDefault();
      this.props.changePage("ProducerPage")
    }



  handleShowRegister (e) {
      event.preventDefault();


      fetch("/register_show", 
      {method: "POST",
      body: JSON.stringify(this.state),
      headers:{'Content-Type': 'application/json'} 
        })


      .then(res1 => res1.json())
      .then(res2 =>{
      const ShowRegResponse = JSON.stringify(res2)
      this.props.changePage("ProducerPage", ShowRegResponse) 

      console.log('Success:', JSON.stringify(ShowRegResponse)) 

    

    })

  }

        





render(){
  return(

  <div className="container-fluid shows-update">




      <div className="d-flex flex-row-reverse bd-highlight">

            <div className="p-2 bd-highlight"> 
                  <a className="big-letter-Lato" href="#" onClick= {this.handleLogOut}>Log Out</a>
            </div>
            <div className="p-2 bd-highlight"> 
                  <a className="big-letter-Lato" href="#" onClick= {this.ProducerPage}>Home</a>
            </div>        
     </div>


       <div className="container col-md-8 .col-md-offset-3">
  
            <div className="big-row-update"> </div>

               <div>

                <h4>Fill out the following information as completely as possible</h4>

              </div>




    <form onSubmit= {this.handleShowRegister}>  

 
          <div className="form-group">
            <label>Name of Show / Group / Act</label>
            <input type="text" className="form-control" name="show_name"  value={this.state.show_name} 
                               onChange={this.handleShowInput} placeholder="Show / Group / Act" required />         
          </div>


           <div className="form-group">
              <label >Type of Show</label>
                 <select className="form-control" value={this.state.show_type} name="show_type"
                                                    onChange={this.handleShowInput}>

                      <option value="burlesque">Burlesque</option>
                      <option value="improv">Improv</option>
                      <option value="music">Music</option>
                      <option value="play">Play</option>
                      <option value="skecks">Skecks</option>
                      <option value="spoken_word">Spoken Word</option>
                      <option value="stand_up">Stand up</option>
                      <option value="Ted_talk">Ted talk</option>
              </select>
            </div>


            <div className="form-group">
               <label >Where are you looking for a venues</label>
       
                  <select multiple className="form-control form-control" value={this.state.show_location_preferred} 
                                                      name="show_location_preferred" onChange={this.handleShowInput}>

                    <option value="anywhere">Anywhere</option>
                    <option value="berkeley">Berkeley</option>
                    <option value="burlingame">Burlingame</option>
                    <option value="daly_city">Daly City</option>
                    <option value="dublin">Dublin</option>
                    <option value="emeryville">Emeryville</option>
                    <option value="palo_alto">Palo Alto</option>
                    <option value="san_francisco">San Francisco</option>
                    <option value="san_jose">San Jose</option>
                    <option value="santa_clara">Santa Clara</option>
                    <option value="sunnyvale">Sunnyvale</option>
     
                </select>
            </div>

             


          <div className="form-group">
            <label>How many performers</label>
            <input type="number" className="form-control" name="show_amount_people"  value={this.state.show_amount_people} 
                               onChange={this.handleShowInput} placeholder="How many performers" required />         
          </div>




          <div className="form-group">
             <label >Do you need a dressing room</label>
              <select className="form-control form-control" value={this.state.show_dressing_room} 
                                                      name="show_dressing_room" onChange={this.handleShowInput}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>           
                </select>
            </div>

             



          <div className="form-group">
            <label>How long is the show in hours</label>
            <input type="number" className="form-control" name="show_amount_people"  value={this.state.show_amount_people} 
                               onChange={this.handleShowInput} placeholder="How many performers" required />         
          </div>




           <div className="form-group">
              <label >How long is the show</label>
                 <select className="form-control" value={this.state.show_length} name="show_length"
                                                    onChange={this.handleShowInput}>

                      <option value="1">Burlesque</option>
                      <option value="2">Improv</option>
                      <option value="3">Music</option>
                      <option value="4">Play</option>
                      <option value="5">Skecks</option>
                      <option value="6">Spoken Word</option>
              </select>
            </div>





          <div>
             <label>Which days are you looking to perform</label>
          </div>
          <div className="form-check">
              <input className="form-check-input" type="checkbox" name="monday" onChange={this.handleShowSelect}/>
              <label className="form-check-label">Monday</label>
          </div>
          <div className="form-check">
              <input className="form-check-input" type="checkbox" name="tuesday" onChange={this.handleShowSelect}/>
              <label className="form-check-label">Tuesday</label>
          </div>
           <div className="form-check">
              <input className="form-check-input" type="checkbox" name="wednesday" onChange={this.handleShowSelect}/>
              <label className="form-check-label">Wednesday</label>
          </div>
           <div className="form-check">
              <input className="form-check-input" type="checkbox" name="thursday" onChange={this.handleShowSelect}/>
              <label className="form-check-label">Thursday</label>
          </div>
          <div className="form-check">
              <input className="form-check-input" type="checkbox" name="friday" onChange={this.handleShowSelect}/>
              <label className="form-check-label">Friday</label>
          </div>
           <div className="form-check">
              <input className="form-check-input" type="checkbox" name="saturday" onChange={this.handleShowSelect}/>
              <label className="form-check-label">Saturday</label>
          </div>
           <div className="form-check">
              <input className="form-check-input" type="checkbox" name="sunday" onChange={this.handleShowSelect}/>
              <label className="form-check-label">Sunday</label>
          </div>
         
          
          <div>
             <label>Time you are looking to perform</label>
          </div>
          <div className="form-check">
              <input className="form-check-input" type="checkbox" name="morning" onChange={this.handleShowSelect}/>
              <label className="form-check-label">morning</label>
          </div>
          <div className="form-check">
              <input className="form-check-input" type="checkbox" name="late_morning" onChange={this.handleShowSelect}/>
              <label className="form-check-label">Late Morning</label>
          </div>
           <div className="form-check">
              <input className="form-check-input" type="checkbox" name="early_night" onChange={this.handleShowSelect}/>
              <label className="form-check-label">Early Night</label>
          </div>
           <div className="form-check">
              <input className="form-check-input" type="checkbox" name="late_night" onChange={this.handleShowSelect}/>
              <label className="form-check-label">Late Night</label>
          </div>
     



           <div className="form-group">
             <label>How much are your tickets?</label>
             <input type="number" className="form-control" name="show_ticket_price"  value={this.state.show_ticket_price} 
                               onChange={this.handleShowInput} placeholder="" required />         
          </div>



           <div className="form-group">
             <label>How much do you are you looking to pay for rent?</label>
             <input type="number" className="form-control" name="show_rent"  value={this.state.show_rent} 
                               onChange={this.handleShowInput} placeholder="" required />         
          </div>

     
          <div className="form-group">
            <label>Website or other</label>
            <input type="url" className="form-control" name="show_url" value={this.state.show_url} 
                               onChange={this.handleShowInput} placeholder="Website or other" required />         
          </div>

          
          <div className="row justify-content-center">
            <button type="submit" className="btn btn-default">Submit</button>
          </div>
                                 
            


        </form>             
    
   </div>


 </div>
 
    )       
  }

}
