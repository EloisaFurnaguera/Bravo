

class Base extends React.Component {
    constructor(props) {
        super(props);


    this.state = {
                  currentPage: "BravoApp",
                  id: " "}              

    this.changePage = this.changePage.bind(this);

    }



    changePage(newPage, id) {
        this.setState({currentPage: newPage,
                       id: id });               
    }



    changeState(state){
        this.setState(state);

    }


    render(){



        const  pages = { 
               BravoApp : <BravoApp changePage={this.changePage} name={this.state} />,
               
               LogOut: <LogOut changePage={this.changePage} name={this.state} />,
               LogIn: <LogIn changePage={this.changePage} name={this.state} />,

               UserRegisterForm: <UserRegisterForm changePage={this.changePage} name={this.state.id } />,   
               VenueRegisterForm: <VenueRegisterForm changePage={this.changePage} name={this.state} />, 
               ShowRegisterForm: <ShowRegisterForm changePage={this.changePage} name={this.state} />, 


               VenueUpdateForm: <VenueUpdateForm changePage={this.changePage} name={this.state} />,
               UserUpdateForm: <UserUpdateForm changePage={this.changePage} name={this.state} />, 
               ShowUdateForm: <ShowUdateForm changePage={this.changePage} name={this.state.id} />, 

               ShowPage: <ShowPage changePage={this.changePage} show_id={this.state.id} />,
               VenueUserPage: <VenueUserPage changePage={this.changePage} name={this.state} />,
               ProducerPage: <ProducerPage changePage={this.changePage} name={this.state} />,



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