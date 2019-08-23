class VenueRegisterForm extends React.Component {

    constructor(props) {
        super(props);
 
        this.state = {venue_name:" ",
                      venue_url:" ",
                      venue_email:" ",
                      venue_address:" ",
                      venue_city:" ",
                      venue_type:" ",
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
    this.handleVanueBasicInfo = this.handleVanueBasicInfo.bind(this);

    }




  handleVanueBasicInfo(e) { 

      const target = e.target;
      const value = target.value;
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
        console.log('Success:', JSON.stringify(res2));

      // this.setState({response: res2});


    })


   






















  }

        



    render(){
        return(

             <div>

                <h1> ADD INFO HERE</h1>

              
                <form onSubmit= {this.handleVenueRegister}>  

             
                  <input type="text" name="venue_name" value={this.state.venue_name} 
                         onChange={this.handleVanueBasicInfo} required />venue_name<br />

                  <input type="text" name="venue_address" value={this.state.venue_address} 
                        onChange={this.handleVanueBasicInfo} required />venue_address<br />


                 <input type="text" name="venue_city" value={this.state.venue_address} 
                        onChange={this.handleVanueBasicInfo} required />venue_city<br />


                 <input type="text" name="venue_email" value={this.state.venue_address} 
                      onChange={this.handleVanueBasicInfo} required />venue_email<br />


                <input type="text" name="venue_url" value={this.state.venue_url} 
                      onChange={this.handleVanueBasicInfo} required />venue_url<br />
{/*

                <input type="text" name="venue_type" value={this.state.venue_type} 
                      onChange={this.handleVanueBasicInfo} required />venue_type*/}










{/*    Website <input type="venue_url" name="venue_url"><br> 
    Email <input type="email" name="venue_email"><br>
    Address <input type="text" name="venue_address"><br>
    City <input type="text" name="venue_city"><br><br>
*/}
                 
             
              
                





                <input type="submit" name="Add" />                     
            















              </form>             
            </div>
 
    )       
  }

}
