class ShowPageForVenue extends React.Component {

    constructor(props) {
        super(props);
 
        this.state = {user_fname:"",
                      monday:"No",
                      tuesday:"No",
                      wednesday:"No",
                      thursday:"No",
                      friday:"No",
                      saturday:"No",
                      saturday:"No",
                      sunday:"no",
                      morning:"No",
                      late_morning:"No",
                      early_night:"No",
                      late_night:"No",
                      show_id:"",
                      show_name:"",
                      show_type:"",
                      show_url:"",
                      show_amount_people:"",
                      show_dressing_room:"",
                      show_length:"",
                      show_ticket_price:"",
                      time_id:"",
                      show_rent:"",                                           
                      berkeley:"No",
                      burlingame:"No",
                      daly_city:"No",
                      dublin:"No",
                      emeryville:"No",
                      palo_alto:"No",
                      san_francisco:"No",
                      san_jose:"No",
                      santa_clara:"No",
                      sunnyvale:"No"};
                      


      this.handleLogOut = this.handleLogOut.bind(this)
      this.handleHomePage = this.handleHomePage.bind(this);
                 
   
}
  


  handleLogOut(e) {
          e.preventDefault();
      this.props.changePage("LogOut")
    }




  handleHomePage(e) {
      e.preventDefault();
      this.props.changePage("VenueUserPage")
    }


    componentDidMount() {
      fetch("/show_single_page", 
      {method: "POST",
      body: JSON.stringify({show_id: this.props.id}),
      headers:{'Content-Type': 'application/json'} 
      })

      .then(res1 => res1.json())
      .then(showPageResponse =>{
         this.setState({monday: showPageResponse.monday,
                      tuesday: showPageResponse.tuesday,
                      wednesday: showPageResponse.wednesday,
                      thursday: showPageResponse.thursday,
                      friday: showPageResponse.friday,
                      saturday: showPageResponse.saturday,
                      sunday: showPageResponse.sunday,

                      morning: showPageResponse.morning,
                      late_morning: showPageResponse.late_morning,
                      early_night: showPageResponse.early_night,
                      late_night: showPageResponse.late_night,
                     
                      show_id: showPageResponse.show_id,
                      show_name: showPageResponse.show_name,
                      show_type: showPageResponse.show_type,
                      show_url: showPageResponse.show_url,
                      show_amount_people: showPageResponse.show_amount_people,
                      show_dressing_room: showPageResponse.show_dressing_room,
                      show_length: showPageResponse.show_length,
                      show_ticket_price: showPageResponse.show_ticket_price,
                      show_rent: showPageResponse.show_rent,
                         
                      berkeley: showPageResponse.berkeley,
                      burlingame: showPageResponse.burlingame,
                      daly_city: showPageResponse.daly_city,
                      dublin: showPageResponse.dublin,
                      emeryville: showPageResponse.emeryville,
                      palo_alto: showPageResponse.palo_alto,
                      san_francisco: showPageResponse.san_francisco,
                      san_jose: showPageResponse.san_jose,
                      santa_clara: showPageResponse.santa_clara,
                      sunnyvale: showPageResponse.sunnyvale})  
      
     
      console.log("Success: ShowPage")
      
      
      
      })
      

}
  

        


render(){
  return(




<div className ="backgroud-sp">



<div className="top-container-sp">

          <div className="user-name-container-sp">

                <div className="nornal-letter-M-White-sp"> 
                   <p className="little-letter-M-White-sp">Signed as: </p>
                     <h1 className= "user-name-sp">{this.props.user_fname}</h1> 
                   </div>
          </div>   


          <div className="top-links-container-sp">

                  <div><a className="little-letter-M-White-sp" href="#" onClick= {this.handleLogOut}>Log Out</a>
                      </div>

    {/*                      <div><a className="little-letter-M-White-sp" 
                                   href="#" onClick= {(e) => this.handleShowUpdate( e, 
                                                                                  this.state.show_id,
                                                                                  this.state.type,

                                                                                  this.state.user_fname,
                                                                                  this.state.user_lname,
                                                                                  this.state.user_email,

                                                                                  this.state.show_id,
                                                                                  this.state.show_name,
                                                                                  this.state.show_type,
                                                                                  this.state.show_url,
                                                                                  this.state.show_amount_people,
                                                                                  this.state.show_dressing_room,
                                                                                  this.state.show_length,
                                                                                  this.state.show_ticket_price,
                                                                                  this.state.show_rent)}>Edit</a>

                           </div>*/}

                        <div><a className="little-letter-M-White-sp" href="#" onClick= {this.handleHomePage}>Home</a>
                          </div>

                           
                   
          </div>
  </div>



<div className="top-line-sp"></div>








<div className ="text-mid-container-sp">

<h2 className= "text-center nornal4-letter-M-White-pp">Show Info</h2> 
  <div className ="info-container-sp">


          
              
              <div className ="info-column-sp little-letter-info-sp">
                <div className="flex-sp">
                    <p className = "p-sp">Name: </p>
                    <p className="p2-sp">{this.state.show_name}</p>       
                  </div>

                <div className="flex-sp">
                    <p className = "p-sp">Show type: </p>
                    <p className="p2-sp">{this.state.show_type}</p> 
                  </div>

                <div className="flex-sp">             
                    <p className = "p-sp">Number of performers: </p>
                    <p className="p2-sp">{this.state.show_amount_people}</p>
                  </div>

                <div className="flex-sp">
                    <p className = "p-sp">Needs a dressing room:</p>
                    <p className="p2-sp">{this.state.show_dressing_room}</p>
                  </div>

                <div className="flex-sp">
                    <p className = "p-sp">Show length:</p>
                    <p className="p2-sp">{this.state.show_length}hr</p>
                  </div>

                <div className="flex-sp">
                    <p className = "p-sp">Ticket price:</p>
                    <p className="p2-sp">{this.state.show_ticket_price}</p>
                  </div>

                 <div className="flex-sp">
                    <p className = "p-sp">lookingd to rent for: </p>
                    <p className="p2-sp">${this.state.show_rent}</p>
                  </div>

                <div className="flex-sp">
                    <p className = "p-sp">Webside: </p>
                    <p className="p2-sp">{this.state.venue_license}</p>
                  </div>


          </div>
       </div>
    </div>















<div className ="text2-time-container-sp">


      <div className="time5-little-letter-sp">
     
              <h4 className= "text-center nornal3-letter-M-White-pp">Days Preferred</h4>
              </div>

<div className="in-sp">

        <div className="time-little-letter-sp"> 
                <p>Monday:</p> <p className="time-little2-letter-sp">{this.state.monday}</p>
              </div>

        <div className="time-little-letter-sp">
                <p>Tuesday:</p> <p className="time-little2-letter-sp">{this.state.tuesday}</p>
              </div>

        <div className="time-little-letter-sp">
                <p>Wednesday:</p> <p className="time-little2-letter-sp">{this.state.wednesday}</p>
              </div>

        <div className="time-little-letter-sp">
                <p>Thursday:</p> <p className="time-little2-letter-sp">{this.state.thursday}</p>
              </div>

        <div className="time-little-letter-sp">
                <p>Friday:</p> <p className="time-little2-letter-sp">{this.state.friday}</p>
              </div>

        <div className="time-little-letter-sp">
                <p>Saturday:</p> <p className="time-little2-letter-sp">{this.state.saturday}</p>
              </div>
       
        <div className="time-little-letter-sp">
                <p>Sunday:</p> <p className="time-little2-letter-sp">{this.state.sunday}</p>
              </div>              
        
</div>
</div>





<div className ="text2-time-container-sp">



 <div className="time5-little-letter-sp">
     
              <h4 className= "text-center nornal3-letter-M-White-pp">Time Preferred</h4>
              </div>



   <div className="in-sp">
       <div className="time-little-letter-sp">    
           <p>Morning:</p> 
           <p className="time-little2-letter-sp">{this.state.morning}</p>
        </div>

        <div className="time-little-letter-sp">  
           <p >Late morning:</p> 
           <p className="time-little2-letter-sp">{this.state.late_morning}</p>
        </div>
           
        <div className="time-little-letter-sp">  
           <p>Early night:</p> 
           <p className="time-little2-letter-sp">{this.state.early_night}</p>
        </div>
           
        <div className="time-little-letter-sp">  
           <p>Late night:</p> 
           <p className="time-little2-letter-sp">{this.state.late_night}</p>
        </div>
    </div>
</div>



<div className ="text3-mid-container-sp">

<h4 className= "text-center nornal4-letter-M-White-pp">Locations Preferred</h4> 

  <div className ="info-container-sp">
          
              
              <div className ="info-column-sp little-letter-info-sp">
                <div className="flex-sp">
                    <p className = "p-sp">Berkeley: </p>
                    <p className="p3-sp">{this.state.berkeley}</p>       
                  </div>

                <div className="flex-sp">
                    <p className = "p-sp">Burlingame: </p>
                    <p className="p3-sp">{this.state.burlingame}</p> 
                  </div>

                <div className="flex-sp">             
                    <p className = "p-sp">Daly City: </p>
                    <p className="p3-sp">{this.state.daly_city}</p>
                  </div>

                <div className="flex-sp">
                    <p className = "p-sp">Dublin:</p>
                    <p className="p3-sp">{this.state.dublin}</p>
                  </div>

                <div className="flex-sp">
                    <p className = "p-sp">Emeryville:</p>
                    <p className="p3-sp">{this.state.emeryville}</p>
                  </div>

                <div className="flex-sp">
                    <p className = "p-sp">Palo Alto:</p>
                    <p className="p3-sp">{this.state.palo_alto}</p>
                  </div>

                 <div className="flex-sp">
                    <p className = "p-sp">San Francisco: </p>
                    <p className="p3-sp">{this.state.san_francisco}</p>
                  </div>

                <div className="flex-sp">
                    <p className = "p-sp">San Jose: </p>
                    <p className="p2-sp">{this.state.san_jose}</p>
                  </div>


                <div className="flex-sp">
                    <p className = "p-sp">Santa Clara: </p>
                    <p className="p3-sp">{this.state.santa_clara}</p>
                  </div>

                <div className="flex-sp">
                    <p className = "p-sp">Sunnyvale: </p>
                    <p className="p3-sp">{this.state.sunnyvale}</p>
                  </div>



          </div>
       </div>
    
</div>



{/*
<div className ="button-vp">
             
      <a className="big-letter-M-White-sp" 
             href="#" onClick={(e) => this.handleMatchPage(e, this.state.show_id, this.props.user_fname)}>Find
             Matches</a>
          
   </div>*/}





</div>




























 
    )       
  }

}
