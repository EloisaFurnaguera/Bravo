
class BravoApp extends React.Component {
   constructor(props) {
    super(props);

 
    this.handleLogInSubmit = this.handleLogInSubmit.bind(this);
    this.handleSigInSubmit = this.handleSigInSubmit.bind(this);


    this.handleTrySubmit = this.handleTrySubmit.bind(this);

}




handleLogInSubmit(e) {
      e.preventDefault();
      this.props.changePage("LogIn")
    };




handleSigInSubmit(e) {
      e.preventDefault();

      this.props.changePage("UserRegisterForm")
    };




handleTrySubmit(e) {
      e.preventDefault();

      this.props.changePage("VenueUserForProducer")
    };







    render(){
        return(

            <div>

                <NavagationBarHome changePage={this.props.changePage} />

                    <div className = "bravo-page">  
                         <div className = "row bravo-big-row ">

                         </div>
                    </div>   
              </div>

        );
    }
}





















