class NavagationBarHome extends React.Component {

    constructor(props) {
        super(props);

      this.handleLogIn = this.handleLogIn.bind(this)

      this.handleSingIn = this.handleSingIn.bind(this)

      this.handleTrying = this.handleTrying.bind(this)


      }                 
 



    handleLogIn(e) {
             e.preventDefault();
      this.props.changePage("LogIn")
    }


    handleSingIn(e) {
             e.preventDefault();
      this.props.changePage("UserRegisterForm")
    }



    handleTrying(e) {
             e.preventDefault();
      this.props.changePage("VenueUserPage")
    }







    render(){

        return(


 
           <div >
         
             <nav className="navbar justify-content-between navbar-expand-xl bg-dark"> 


             <div id="home-text">
             <span className="navbar-text"> BRAVO </span>
             </div>


              <ul className="nav">
               


{/*
                  <li className="nav-item">
                      <a className="nav-link" href="#" onClick= {this.handleTrying}>trying</a>
                  </li>
               */}
              
                  <li className="nav-item">
                      <a className="nav-link" href="#" onClick= {this.handleLogIn}>Login</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#" onClick= {this.handleSingIn}>Sign up</a>
                  </li>




               
               
            </ul>
             </nav> 

            </div>

          );
          
    }

}
