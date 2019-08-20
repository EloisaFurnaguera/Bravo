
class BravoApp extends React.Component {
   constructor(props) {
    super(props);
  
    this.handleLogInSubmit = this.handleLogInSubmit.bind(this);
    this.handleSigInSubmit = this.handleSigInSubmit.bind(this);

}

handleLogInSubmit(e) {
      e.preventDefault();

      this.props.changePage("LogIn")
    };


handleSigInSubmit(e) {
      e.preventDefault();

      this.props.changePage("RegisterForm")
    };




    render(){
        return(

         <div className="container">

             <h1> Welcome to Bravo </h1>
          
            <button  onClick= {this.handleLogInSubmit}>login</button>
            <button  onClick= {this.handleSigInSubmit}>Sign in</button>


         </div>
        );
    }
}







{/*// -----------------------

            // FROM https://react-bootstrap.github.io/components/navs/



            // <Nav activeKey="/" onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
            //     <Nav.Item>
            //         <Nav.Link href="/">Active</Nav.Link>
            //     </Nav.Item>

            //     <Nav.Item>
            //         <Nav.Link eventKey="LogIn">LogIn</Nav.Link>
            //     </Nav.Item>

            //     <Nav.Item>
            //         <Nav.Link eventKey="RegisterForm">Sign in</Nav.Link>
            //     </Nav.Item>

            //     <Nav.Item>
            //         <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
            //     </Nav.Item>
            // </Nav>



*/}







{/*// ----------------------------------

         
// FROM https://www.codingame.com/playgrounds/6517/react-router-tutorial

//             <Router>
//                 <div>
//                     <h2>Lets see</h2>
//                     <nav className="navbar navbar-expand-lg navbar-light bg-light">

//                     <ul className="navbar-nav mr-auto">

//                         <li><Link to={'/'} className="nav-link"> Home </Link></li>

//                         <li><Link to={'/login'} className="nav-link">Login</Link></li>

//                         <li><Link to={'/register'} className="nav-link">Sign in</Link></li>

//                     </ul>

//                     </nav>
//                         <hr />
//                         <Switch>
//                             <Route exact path='/' component={BravoApp} />

//                             <Route path='/login' component={LogIn} />

//                             <Route path='/register' component={RegisterForm} />
//                         </Switch>
//                     </div>
//              </Router>

*/}

      







// _____________________

// FROM  https://react-bootstrap.github.io/components/buttons/
          
   {/*         <div>
                <ButtonToolbar>
                        <Button variant="primary" size="lg">
                            Large button
                        </Button>
                        <Button variant="secondary" size="lg">
                            Large button
                        </Button>
            </ButtonToolbar>
            </div>


*/}













