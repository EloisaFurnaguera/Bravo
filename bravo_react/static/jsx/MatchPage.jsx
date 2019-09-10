class MatchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { matched_list:[]} 


    this.handleLogOut = this.handleLogOut.bind(this) 
    this.handlePage = this.handlePage.bind(this) 
    this.handleUserHome = this.handleUserHome.bind(this);               
     
                                          
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
    this.props.changePage("VenueUserPage", id, "venue")

   }
    
                
};




  handleUserHome(e) {
       e.preventDefault();

    if (this.props.type === "venue"){
           this.props.changePage("VenueUserPage")  
    }

    else{              
      this.props.changePage("ProducerPage") 
    }        

  }




componentDidMount() {
        
        fetch("/get_match", 
        {method: "POST",
        body: JSON.stringify({user_type: this.props.type,
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


<div className ="backgroud-m">
 


<div className="top-container-m">

          <div className="user-name-container-m">

                <div className="nornal-letter-M-White-m"> 
                   <p className="little-letter-M-White-m">Signed as: </p>
                     <h1 className= "user-name-m">{this.props.user_fname}</h1> 
                   </div>
          </div>   


          <div className="top-links-container-m">

                  <div><a className="nornal2-letter-M-White-m" href="#" onClick= {this.handleLogOut}>Log Out</a>
                      </div>


                         <div><a className="nornal2-letter-M-White-m" href="#" onClick= {this.handleUserHome}>Home</a>
                           </div>
                   
           </div>
  </div>

  



 <div className="top-line-m"></div>

    <div className ="text-mid-container-m">

        <div className ="info-container-m">


<div className ="ind-info-container-m">
        <div>
          <h1 className= "nornal-letter-M-White-m">MATCHES</h1> 
            </div>


        <div className="nornal3-letter-M-White-m">
            {this.state.matched_list.map(match =>
                <div key={match.id}> 
                  <a href="#" onClick={(e) => this.handlePage
                                                (e, match.id, match.type)}>{match.name},{match.type}, {match.id}</a>
                </div>)}
            </div>
    </div>





     </div>
  </div>
</div>





    );
  }
}
