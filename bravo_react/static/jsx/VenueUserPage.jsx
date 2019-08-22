class VenueUserPage extends React.Component {

    constructor(props) {
        super(props);
  
        this.state = {user_id:"",
                     venue_name:"",
                     venue_id:"",
                     monday:"",
                     tuesday:"",
                     wednesday:"",
                     thursday:"",
                     friday:"",
                     saturday:"",
                     sunday:"",
                     morning:"",
                     late_morning:"",
                     early_night:"",
                     late_night:""}  
   
         
         this.handleLogOutSubmit = this.handleLogOutSubmit.bind(this);  
    }
                      
      


    handleLogOutSubmit(e) {
      e.preventDefault();
      this.props.changePage("LogOut")
    };




    componentDidMount() {
        
        fetch("/venue_page", 
        {method: 'POST',
        body: JSON.stringify(this.state),
        headers:{'Content-Type': 'application/json'}
        }) 

        .then(res1 => res1.json())
        .then(res2 =>{
                      this.setState({
                                 user_id: res2.user_id,
                                 venue_name: res2.venue_name,
                                 venue_id: res2.venue_id,
                                 monday: res2.monday,
                                 tuesday: res2.tuesday,
                                 wednesday: res2.wednesday,
                                 thursday: res2.thursday,
                                 friday: res2.friday,
                                 saturday: res2.saturday,
                                 sunday: res2.sunday,
                                 morning: res2.morning,
                                 late_morning: res2.late_morning,
                                 early_night: res2.early_night,
                                 late_night: res2.late_night})

                       console.log('Success:', JSON.stringify(res2))
                    
                      });               
        
    }






    render(){
        return(

             <div>

                 <h1>VENUE PAGE</h1>
                 
                 <h1> Hello, {this.state.name}</h1>

                 <button  onClick= {this.handleLogOutSubmit}>Log Out</button>

             </div>

 
          );       
    }

}