
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

      this.props.changePage("VenueUpdateForm")
    };









    render(){
        return(

       <div>   
       
          <NavagationBar changePage={this.props.changePage} />

        

              <div className="card bg-dark text-white">
                <img className="card-img" src="/static/img/kilyan-sockalingum-nW1n9eNHOsc-unsplash.jpg" alt="Card image" />
                <div className="card-img-overlay">
                  <h1 className="text-xl-center"></h1>
                  <p className="card-text"></p>
                  <p className="card-text"></p>
                </div>
              </div>
 

     </div>


        );
    }
}





















