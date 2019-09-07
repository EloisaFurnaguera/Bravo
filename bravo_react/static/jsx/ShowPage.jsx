class ShowPage extends React.Component {

    constructor(props) {
        super(props);
 
        this.state = {monday: "",
                      tuesday: " ",
                      wednesday: " ",
                      thursday: " ",
                      friday: " ",
                      saturday: " ",

                      morning: " ",
                      late_morning: " ",
                      early_night: " ",
                      late_night: " ",
                     
                      show_id: " ",
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

                      show_location_preferred: " "};
                      
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
                      

      this.handleLogOut = this.handleLogOut.bind(this)
      this.handleShowUpdate = this.handleShowUpdate.bind(this);
      this.handleMatchPage = this.handleMatchPage.bind(this);                  
   
}
  


  handleLogOut(e) {
             e.preventDefault();
      this.props.changePage("LogOut")
    }


   handleShowUpdate(e , id) {
     e.preventDefault();
      this.props.changePage("ShowUdateForm", id)
   }   


    handleMatchPage(e , id, type) {
      e.preventDefault();
      this.props.changePage("MatchPage", id, "show")
    };






    componentDidMount() {
      fetch("/show_single_page", 
      {method: "POST",
      body: JSON.stringify({show_id: this.props.id}),
      headers:{'Content-Type': 'application/json'} 
      })

      .then(res1 => res1.json())
      .then(showPageResponse =>{
         this.setState({
                      show_id: showPageResponse.show_id,
                      show_name: showPageResponse.show_name,
                      show_url: showPageResponse.show_url,
                      show_type: showPageResponse.show_type,
                      show_amount_people: showPageResponse.show_amount_people,
                      show_dressing_room: showPageResponse.show_dressing_room,
                      show_length: showPageResponse.show_length,
                      show_ticket_price: showPageResponse.show_ticket_price,
                      show_rent: showPageResponse.show_rent,
                      show_free_rent: showPageResponse.show_free_rent
                      
         })  
      
     
      console.log("Success:", JSON.stringify(showPageResponse))

      });
      

}
  

        


  render(){
    return(


<div className="container-fluid shows-page" >


           
      <div className="d-flex justify-content-end">  
       
           <div className="p-2">                      
                 <a className="big-letter-Lato" href="#" onClick={(e) => this.handleMatchPage(e, this.state.show_id)}>Match</a>
             </div>

            <div className="p-2">                      
             <a className="big-letter-Lato" href="#" onClick={(e) => this.handleShowUpdate(e, this.state.show_id)}>Update Show</a>
            </div>

            <div className="p-2"> 
                <a className="big-letter-Lato" href="#" onClick= {this.handleLogOut}>Log Out</a>
            </div>
                
      </div>
   













  

<div className ="row">
<div className ="col shows-page-text">


<p></p>

<p> SHOW/GROUP/ACT : <i>{this.state.show_name}</i></p>

<p> SHOW TYPE : {this.state.show_type}</p>

<p> GROUP SIZE : {this.state.show_amount_people}</p>

<p> NEEDS DRESSING ROOM : {this.state.show_dressing_room}</p>

<p> LENGTH OF SHOW:  {this.state.show_length}</p>






      </div>
    </div>






























 </div>


 
    )       
  }

}
