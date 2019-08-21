

class Base extends React.Component {
    constructor(props) {
        super(props);


    this.state = {currentPage: "BravoApp",
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
               LogIn: <LogIn changePage={this.changePage} />,
               RegisterForm: <RegisterForm changePage={this.changePage} name={this.state.name} />,
               VenueUserPage: <VenueUserPage name={this.state.user_id} />,
               ProducerUserPage: <ProducerUserPage name={this.state.user_id} />,



               UserInfo: <UserInfo changePage={this.changePage} name={this.state.name} />
               }

             

        return( 
   
               <div> 

               {pages[this.state.currentPage]}

               
               </div>
   

       )
    }
}




ReactDOM.render(<Base />, document.getElementById('root'));