class TryStuff extends React.Component {
  constructor() {
    super();
    this.state = {
      venueInfo: []
    };
  }

  componentDidMount() {
    fetch("/venue_page",
          {method: "POST",
          headers:{'Content-Type': 'application/json'}
          })



      .then(res => res.json())
      .then(venueInfo => {
        this.setState({ venueInfo: venueInfo });
      });
  }
  

  render() {


    return (
      <div>
{/*        <h1>VENUE INFO</h1>
        {this.state.venueInfo.map(venueInfo => {

          return (
            <ul key={venueInfo.venue_id}>   
              <li>Name: {venueInfo.venue_name}</li>
              <li>Address: {venueInfo.venue_id}</li>
            </ul>
          );


        })}*/}
      </div>
    );
  }
}


