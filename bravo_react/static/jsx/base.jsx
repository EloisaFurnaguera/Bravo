

class Base extends React.Component {
    constructor(props) {
        super(props);


    this.state = {
                  currentPage: "BravoApp",
                  user_id: " "}              

    this.changePage = this.changePage.bind(this);

    }



    changePage(newPage, user_id) {
        this.setState({currentPage: newPage,
                       user_id: user_id });               
    }



    changeState(state){
        this.setState(state);

    }


    render(){



        const  pages = { 
               BravoApp : <BravoApp changePage={this.changePage} name={this.state.name} />,
               LogOut: <LogOut changePage={this.changePage} name={this.state.name} />,
               LogIn: <LogIn changePage={this.changePage} name={this.state.name} />,
               UserRegisterForm: <UserRegisterForm changePage={this.changePage} name={this.state.user_id } />,   
               VenueRegisterForm: <VenueRegisterForm changePage={this.changePage} name={this.state.name} />, 
               UserUpdateForm: <UserUpdateForm changePage={this.changePage} name={this.state.name} />, 
               VenueUserPage: <VenueUserPage changePage={this.changePage} name={this.state.name} />,
               VenueUpdateForm: <VenueUpdateForm changePage={this.changePage} name={this.state.name} />,
               ProducerPage: <ProducerPage changePage={this.changePage} name={this.state.name} />,



               TryStuff: <TryStuff changePage={this.changePage} name={this.state.name} />
               }

             

        return( 
   
               <div> 

               {pages[this.state.currentPage]}

               
               </div>
   

       )
    }
}




ReactDOM.render(<Base />, document.getElementById('root'));