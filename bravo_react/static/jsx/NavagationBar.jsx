class NavagationBar extends React.Component {

    constructor(props) {
        super(props);

      this.handleLogOut = this.handleLogOut.bind(this)
     

      }                 
 



    handleLogOut(e) {
             e.preventDefault();
      this.props.changePage("LogOut")
    }






    render(){

        return(


 
           <div >


         
             <nav className="navbar justify-content-between navbar-expand-xl bg-dark"> 


             <div id="home-text">
             <span className="navbar-text"> BRAVO </span>
             </div>


              <ul className="nav">
               
              
                  <li className="nav-item">
                      <a className="nav-link" href="#" onClick= {this.handleLogOut}>Log Out</a>
                  </li>

         

            </ul>
             </nav> 

            </div>

          );
          
    }

}