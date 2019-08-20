

class Base extends React.Component {
    constructor(props) {
        super(props);


    this.state = {currentPage: "BravoApp"}              

    this.changePage = this.changePage.bind(this);

    }




    changePage(newPage) {
        this.setState({currentPage: newPage});
        
         
    }

    changeState(state){
        this.setState(state);
    }


    render(){



        const  pages = { 
               BravoApp : <BravoApp changePage={this.changePage} name={this.state.name} />,
               LogIn: <LogIn changePage={this.changePage} />,
               RegisterForm: <RegisterForm changePage={this.changePage} name={this.state.name} />,
               VenueUserPage: <VenueUserPage changePage={this.changePage} name={this.state.name} />,
               ProducerUserPage: <ProducerUserPage changePage={this.changePage} name={this.state.name} />,



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