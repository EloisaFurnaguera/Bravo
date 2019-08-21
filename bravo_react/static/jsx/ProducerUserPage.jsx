class ProducerUserPage extends React.Component {

    constructor(props) {
        super(props);
 
        this.state = {user_id: this.props.name,
                      user_fname: " ",
                      user_lname: " ",
                      show_name: []}

                      
    }

 

    componentDidMount() {

        // console.log(this.state) 

        fetch("/producer_page", 
        {method: 'POST',
        body: JSON.stringify(this.state),
        headers:{'Content-Type': 'application/json'}}) 
        .then(res1 => res1.json())     
        .then(res2 => { this.setState({
                      user_fname: res2.user_fname, 
                      user_lname: res2.user_lname})}) 
           
  }


  // NEED TO ALL THE ERROR MESSAFE

    render(){
   
        return(

             <div>

                 <h1>PRODUCER PAGE</h1>
                 <h3>{this.state.user_fname}</h3>
                 <h3>{this.state.user_lname}</h3>
                 <h3>{this.state.user_}</h3>


             </div>

 
          );       
    }

}



