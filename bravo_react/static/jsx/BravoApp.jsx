
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

      this.props.changePage("VenueRegisterForm")
    };








    render(){
        return(

         <div className="container">

             <h1> Welcome to Bravo </h1>        
         
            <button  onClick= {this.handleSigInSubmit}>Sign in</button>
            <button  onClick= {this.handleLogInSubmit}>Login</button>



            <button  onClick= {this.handleTrySubmit}>Trying Component</button>


         </div>
        );
    }
}





















