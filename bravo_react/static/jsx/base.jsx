

class Base extends React.Component {
    constructor(props) {
        super(props);


    this.state = {
                  currentPage:"BravoApp",
                  id:" ",
                  type:" ",
                  user_fname:"",
                  user_lname:" ",
                  user_email:" "}              

    this.changePage = this.changePage.bind(this);
    this.changePageUserUpdate = this.changePageUserUpdate.bind(this);

    }



    changePage(newPage, id, type) {
        this.setState({currentPage: newPage,
                       id: id,
                       type: type}); 

     console.log("vvvvv") 
      console.log(id)

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
      console.log("TTTTTTT") 
      console.log(user_fname) 
      console.log(id)                 
    }
 


    render(){

        const  pages = {
               
               NavagationBar: <NavagationBar changePage={this.changePage} name={this.state} />,
               NavagationBarHome: <NavagationBarHome changePage={this.changePage} name={this.state} />, 
               BravoApp : <BravoApp changePage={this.changePage} name={this.state} />,

               MatchPage: <MatchPage changePage={this.changePage} id={this.state.id} userType={this.state.type}/>,
               
               LogOut: <LogOut changePage={this.changePage} name={this.state} />,
               LogIn: <LogIn changePage={this.changePage} name={this.state} />,

               UserRegisterForm: <UserRegisterForm changePage={this.changePage} name={this.state.id } />,   
               VenueRegisterForm: <VenueRegisterForm changePage={this.changePage} name={this.state} />, 
               ShowRegisterForm: <ShowRegisterForm changePage={this.changePage} name={this.state} />, 


               UserUpdateForm: <UserUpdateForm changePage={this.changePage} hangePageUserUpdate={this.changePageUserUpdate} id={this.state.id}
                                                                                      type={this.state.type}
                                                                                      user_fname={this.state.user_fname}
                                                                                      user_lname={this.state.user_lname}
                                                                                      user_email={this.state.user_email}/>, 




  



               VenueUpdateForm: <VenueUpdateForm changePage={this.changePage} name={this.state} />,
               ShowUdateForm: <ShowUdateForm changePage={this.changePage} name={this.state.id} />, 

               ShowPage: <ShowPage changePage={this.changePage} name={this.state} />,
               VenueUserPage: <VenueUserPage changePage={this.changePage} name={this.state} />,


               ProducerPage: <ProducerPage changePage={this.changePage} changePageUserUpdate={this.changePageUserUpdate} id={this.state.id}/>,

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




