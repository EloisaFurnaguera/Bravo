class VenueUserPage extends React.Component {

    constructor(props) {
        super(props);
 
        this.state = {venue_id: " ",
                      user_id: " ",
                      venue_id: " ",
                      venue_address: " ",
                      venue_email: " "
                      }

        this.handleRegubmit = this.handleRegubmit.bind(this);

    }
          

    handleRegubmit(e){
    e.preventDefault();
    

    fetch("/register", 
    {method: 'GET',
    body: JSON.stringify(this.state),
    headers:{'Content-Type': 'application/json'}
    }) 

    .then(res1 => res1.json())
    .then(res2 =>{
    console.log('Success:', JSON.stringify(res2));

    const venueResponse = JSON.stringify(res2))

    this.setState({user_id: res2});
    console.log(this.state.user_id)



    });

       



    render(){
        return(

             <div>

                 <h1>VENUE PAGE</h1>
                 <h1> Hello, {this.state.venue_id}</h1>

             </div>

 
          );       
    }

}