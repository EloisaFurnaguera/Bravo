

class Base extends React.Component {
    constructor(props) {
        super(props);


    this.state = {
                  currentPage:"BravoApp",
                  id:"",
                  type:"",
                  user_fname:"",
                  user_lname:"",
                  user_email:"",

                  show_id:"",
                  show_name:"",
                  show_type:"",
                  show_url:"",
                  show_amount_people:"",
                  show_dressing_room:"",
                  show_length:"",
                  show_ticket_price:"",
                  show_rent:""}       


    this.changePage = this.changePage.bind(this);
    this.changePageUserUpdate = this.changePageUserUpdate.bind(this);
    this.changePageShowUpdate = this.changePageShowUpdate.bind(this);

    }



    changePage(newPage, id, type) {
        this.setState({currentPage: newPage,
                       id: id,
                       type: type}); 


    }



    changeState(state){
        this.setState(state);

    }




  changePageUserUpdate(newPage, id, type, user_fname, user_lname, user_email) {
        this.setState({currentPage: newPage,
                       id: id,
                       type:type,
                       user_fname:user_fname,
                       user_lname:user_lname,
                       user_email:user_email})                
    }




  changePageShowUpdate(newPage, 
                        id,
                        type,
                        user_fname,
                        user_lname,
                        user_email,

                        show_id,
                        show_name,
                        show_type,
                        show_url,
                        show_amount_people,
                        show_dressing_room,
                        show_length,
                        show_ticket_price,
                        show_rent)
  {
        this.setState({currentPage: newPage,
                       id: id,
                       type:type,
                       user_fname:user_fname,
                       user_lname:user_lname,
                       user_email:user_email, 

                       show_id:show_id,
                       show_name:show_name,
                       show_type:show_type,
                       show_url:show_url,
                       show_amount_people:show_amount_people,
                       show_dressing_room:show_dressing_room,
                       show_length:show_length,
                       show_ticket_price:show_ticket_price,
                       show_rent:show_rent})               
    }


render(){

  const  pages = {
               
 
         NavagationBarHome: <NavagationBarHome changePage={this.changePage} name={this.state} />, 
         BravoApp : <BravoApp changePage={this.changePage} name={this.state} />,

         MatchPage: <MatchPage changePage={this.changePage} 
                               changePageUserUpdate={this.changePageUserUpdate} 
                               id={this.state.id} 
                               type={this.state.type} 
                               user_fname={this.state.user_fname} />,
         
         LogOut: <LogOut changePage={this.changePage} name={this.state} />,
         LogIn: <LogIn changePage={this.changePage} name={this.state} />,

         UserRegisterForm: <UserRegisterForm changePage={this.changePage} name={this.state } />,   
         VenueRegisterForm: <VenueRegisterForm changePage={this.changePage} name={this.state} />, 
         ShowRegisterForm: <ShowRegisterForm changePage={this.changePage} name={this.state} />, 


         UserUpdateForm: <UserUpdateForm changePage={this.changePage} 
                                         changePageUserUpdate={this.changePageUserUpdate} 
                                          id={this.state.id}
                                          type={this.state.type}
                                          user_fname={this.state.user_fname}
                                          user_lname={this.state.user_lname}
                                          user_email={this.state.user_email}/>, 

         VenueUpdateForm: <VenueUpdateForm changePage={this.changePage} name={this.state} />,

         ShowUdateForm: <ShowUdateForm changePage={this.changePage} 
                                       changePageShowUpdate={this.changePageShowUpdate} 

                                       id={this.state.id}
                                       type={this.state.type}
                                       user_fname={this.state.user_fname}
                                       user_lname={this.state.user_lname}
                                       user_email={this.state.user_email} 

                                       show_id={this.state.show_id}
                                       show_name={this.state.show_name}
                                       show_type={this.state.show_type}
                                       show_url={this.state.show_url}
                                       show_amount_people={this.state.show_amount_people}
                                       show_dressing_room={this.state.show_dressing_room}
                                       show_length={this.state.show_length}
                                       show_ticket_price={this.state.show_ticket_price}
                                       show_rent={this.state.show_rent}/>, 


         ShowPage: <ShowPage changePage={this.changePage} 
                             changePageUserUpdate={this.changePageUserUpdate} 
                             changePageShowUpdate={this.changePageShowUpdate} 
                              id={this.state.id}
                              type={this.state.type}
                              user_fname={this.state.user_fname}
                              user_lname={this.state.user_lname}
                              user_email={this.state.user_email}/>,
         
         VenueUserPage: <VenueUserPage changePage={this.changePage} 
                                       changePageUserUpdate={this.changePageUserUpdate} 
                                       id={this.state.id} 
                                       user_fname={this.state.user_fname}/>,
                                                                                        
         ProducerPage: <ProducerPage changePage={this.changePage} 
                                     changePageUserUpdate={this.changePageUserUpdate} 
                                     id={this.state.id}
                                     type={this.state.type}
                                     user_fname={this.state.user_fname}
                                     user_lname={this.state.user_lname}
                                     user_email={this.state.user_email}/>, 

         TryStuff: <TryStuff changePage={this.changePage} name={this.state} />

         
         }

             

        return( 
   
               <div> 

               {pages[this.state.currentPage]}

               
               </div>
   

       )
    }
}








ReactDOM.render(<Base />, document.getElementById('root'));




