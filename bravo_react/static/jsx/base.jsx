

class Base extends React.Component {
    constructor(props) {
        super(props);


    this.state = {
                  currentPage: "BravoApp",
                  id: " ",
                  type: " "}              

    this.changePage = this.changePage.bind(this);

    }



    changePage(newPage, id, type) {
        this.setState({currentPage: newPage,
                       id: id,
                       type: type});               
    }



    changeState(state){
        this.setState(state);

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


               VenueUpdateForm: <VenueUpdateForm changePage={this.changePage} name={this.state} />,
               UserUpdateForm: <UserUpdateForm changePage={this.changePage} name={this.state} />, 
               ShowUdateForm: <ShowUdateForm changePage={this.changePage} name={this.state.id} />, 

               ShowPage: <ShowPage changePage={this.changePage} name={this.state} />,
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