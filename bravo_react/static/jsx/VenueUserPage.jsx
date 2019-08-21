class VenueUserPage extends React.Component {

    constructor(props) {
        super(props);
  
        this.state = {user_id: " ",
                     venue_name: " ",
                     venue_id: " ",
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
                     late_night: " "}


     console.log(venueResponse) 
    
    }
                      
       

 


    componentDidMount() {

         

        fetch("/venue_single", 
        {method: 'POST',
        body: JSON.stringify(this.pops),
        headers:{'Content-Type': 'application/json'}
        }) 

        .then(res1 => res1.json())
        .then(res2 =>{
        console.log('Success:', JSON.stringify(res2));

        const venueResponse = JSON.stringify(res2)

        console.log(venueResponse) 

      });

    }





    render(){
        return(

             <div>

                 <h1>VENUE PAGE</h1>
                 <h1> Hello, {this.state.name}</h1>

             </div>

 
          );       
    }

}