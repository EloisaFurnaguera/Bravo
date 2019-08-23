class BravoApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {demo: 'Test'}
        this.handleCLick = this.handleCLick.bind(this);
    }

    componentDidMount() {
        // this is where we make HTTP calls to our server 
        // ask for whatever info it needs to display
    }

    handleCLick(e) {
        console.log(e);
        console.log('hjkdhjfaldjs')
        this.setState({demo: "you done clicked me"})
    }

    render(){
        return(

         <div>
            <p>{this.state.demo}</p> 
             <button onClick={this.handleClick}> CLICK ME </button>
         </div>
        )
    }
}



-------------------------------------------------------------


class Something extends React.Component {

    constructor(props) {
        super(props);
 
        this.state = {something:"",
                      response:" "};
       
    this.handleRegubmit = this.handleRegubmit.bind(this);
    this.handleUserIdChange = this.handleUserIdChange.bind(this);

    }


    handleUserIdChange(e){  
         console.log(e.target.value);
         this.setState({something: e.target.value});

    }


    handleRegubmit(e){
        e.preventDefault();


        fetch("/get_info", 
              {method: 'POST',
              body: JSON.stringify(this.state),
              headers:{'Content-Type': 'application/json'} 
           // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

                })


        .then(res1 => res1.json())
        .then(res2 =>{
          console.log('Success:', JSON.stringify(res2));

        this.setState({response: res2});})

}
        



    render(){
        return(

             <div>
                <form onSubmit= {this.handleRegubmit}>        
                    <label>
                        UserId
                        <input type="user_id" name="user_id" 
                               onChange={this.handleUserIdChange} required />                   
                    </label>                            
                    <input type="submit" value="user_id" />                              
                </form>
         
                <p> {this.state.r.user_lname} </p>

           

             </div>

 
          );       
    }

}






      else{
            if (this.state.user_type === 'venue'){
                this.props.changePage("VenueUserPage")
                }
            else{
                    this.props.changePage("ProducerUserPage")
                    }
            }



-------------------------------------------------------------

               

class Melons extends React.Component {
  constructor() {
    super();
    this.state = {
      melons: []
    };
  }

  componentDidMount() {
    fetch('/api/melons')
      .then(res => res.json())
      .then(melons => {
        this.setState({ melons: melons });
      });
  }

  render() {
    return (
      <div>
        <h1>Melons from the database</h1>
        {this.state.melons.map(melon => {
          return (
            <ul key={melon.melon_id}>
              <li>ID: {melon.melon_id}</li>
              <li>Name: {melon.name}</li>
              <li>Created at: {melon.created_at}</li>
            </ul>
          );
        })}
      </div>
    );
  }
}

ReactDOM.render(<Melons />, document.getElementById('root'));




-----------------------------------------


class App extends Component {
  constructor (props) {
      super(props);
      this.state = {
          inputvalue: ''
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
      this.setState({
          inputvalue: event.target.value
      })
  }

  handleSubmit (event) {
      console.log('Form value: ' + this.state.inputvalue);
      event.preventDefault();
  }















