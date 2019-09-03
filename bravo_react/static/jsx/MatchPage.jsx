class MatchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { matched_list:[]} 


    this.handleLogOut = this.handleLogOut.bind(this) 
    this.handlePage = this.handlePage.bind(this)                
     
                                          
  }
 
  

  handleLogOut(e) {
             e.preventDefault();
      this.props.changePage("LogOut")
    }





handlePage(e , id, type) {
     e.preventDefault();


   if (type === "show"){
    this.props.changePage("ShowPage", id, "show")

   }

   else{
    is.props.changePage("VenueUserPage", id, "venue")

   }
    
                
};






componentDidMount() {
        
        fetch("/get_match", 
        {method: "POST",
        body: JSON.stringify({user_type: this.props.userType,
                              type_id: this.props.id}),
        headers:{'Content-Type': 'application/json'}
        }) 

        .then(res1 => res1.json())
        .then(macthResponse =>{
                      this.setState({matched_list: macthResponse.matched_list})
                                   
                                
        console.log('Success:', JSON.stringify(macthResponse))

  
                    
        });               
        
    }


  



  render() {


    return (
      <div>
         <h1>MATCHING</h1>

          <div className="p-2 bd-highlight"> 
            <a className="big-letter-Lato" href="#" onClick= {this.handleLogOut}>Log Out</a>
      </div>




  





           <div>
                 <h1 className= "text-center">matches</h1>              

              {this.state.matched_list.map(match =>
                <div key={match.id}> 
                    <a className="big-letter-Lato" href="#" onClick={(e) => this.handlePage(e, match.id, match.type)}>{match.name}, {match.type}, {match.id}</a>
                </div>)}
          </div>






      </div>
    );
  }
}
