class TryStuff extends React.Component {
  constructor() {
    super();
    this.state = {
      venueInfo: []
    };
  }

  componentDidMount() {
    fetch("/venue_page",
          {method: "POST",
          headers:{'Content-Type': 'application/json'}
          })



      .then(res => res.json())
      .then(venueInfo => {
        this.setState({ venueInfo: venueInfo });
      });
  }
  

  render() {


    return (


    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign in</strong>
                </h3>
              </div>
              <MDBInput
                label="Your email"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              <p className="font-small blue-text d-flex justify-content-end pb-3">
                Forgot
                <a href="#!" className="blue-text ml-1">

                  Password?
                </a>
              </p>
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                >
                  Sign in
                </MDBBtn>
              </div>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                or Sign in with:
              </p>
              <div className="row my-3 d-flex justify-content-center">
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="z-depth-1a"
                >
                  <MDBIcon fab icon="google-plus-g" className="blue-text" />
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <a href="#!" className="blue-text ml-1">

                  Sign Up
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

    
  
}











{/*<div class="container">
    <div class="row">
        <div class="form_login">
            <form>
                 <h2 class="text-center">Login Page</h2>
                <br/>
                <div class="form-group">
                    <input type="email" class="form-control" id="userid" placeholder="User id">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" id="pwd" placeholder="Password">
                
                    </div>
                    <br/>
                   <div class="align-center_login">
                <button type="submit" class="btn btn-default" id="login">Login</button>
                    </div>
            </form>
        </div>
    </div>
</div>*/}
        








{/*          <form onSubmit= {this.handleLogInSubmit}>
            
          
              <input type="email" name="email"  
                       onChange={this.handleEmailChange} placeholder="Email" required /><br />    
    
              <input type="password" name="password"  
                    onChange={this.handlePassWordChange} placeholder="Password" required />*/}
          
  {/*            <div>
                <div onChange={this.handleTypeUserChange}>
                    <input type="radio" name="user_type" value="venue" /> venue
                    <input type="radio" name="user_type" value="producer"/> producer
                </div> 
              </div>
*/}
{/*
              <input type="submit" value="Log In" />*/}
      
    
   




{/*

<form onSubmit= {this.handleLogInSubmit}>
    <div className="form-group">
  
      <input type="email" className="form-control" 
              onChange={this.handleEmailChange} placeholder="Enter email" required /><br />   
   </div>
   <div className="form-group">
   
     <input type="password" className="form-control" 
           onChange={this.handleEmailChange} placeholder="Password" required /><br /> 
  </div>


  <div className="form-check">
      <input className="form-check-input" type="radio" name="user_type" value="venue" />
  <label className="form-check-label">Venue</label>
</div>

<div className="form-check" onChange={this.handleTypeUserChange}>
  <input className="form-check-input" type="radio" name="user_type" value="producer" />
  <label className="form-check-label">Producer </label>
</div>





  <button type="submit" className="btn btn-primary">Submit</button>
</form>
*/}








// <div >



//     <style>{"body { background-color: #FFAF00; }"}</style>
  
//         <NavagationBar changePage={this.props.changePage} />



// <div className="container">
//   <div className="row">
//     <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
//       <div className="card card-signin my-5">
//          <div className="card-body">





// <form onSubmit= {this.handleLogInSubmit}>
//     <div className="form-group">
  
//       <input type="email" className="form-control" 
//               onChange={this.handleEmailChange} placeholder="Enter email" required /><br />   
//    </div>
//    <div className="form-group">
   
//      <input type="password" className="form-control" 
//            onChange={this.handlePassWordChange} placeholder="Password" required /><br /> 
//   </div>


//   <div className="form-check" onChange={this.handleTypeUserChange}>
  
//       <input type="radio" name="user_type" value="venue" />
//   <label className="form-check-label">Venue</label>



//   <input type="radio" name="user_type" value="producer" />
//   <label className="form-check-label">Producer </label>
// </div>





//   <button type="submit" className="btn btn-primary">Submit</button>
// </form>






// </div>
// </div>
// </div>
// </div>
// </div>







// </div>

// _______________________________







   // <div className="d-flex justify-content-end">  
   //         <div className="p-2"> 
   //              <a className="big-letter-M-White" href="#" onClick= {this.handleLogOut}>Log Out</a>
   //         </div>
   //          <div className="p-2">                      
   //               <a className="big-letter-M-White" href="#" onClick= {this.handleShowRegister}>Add a Show</a>
   //          </div>
    
   //          <div className="p-2">                      
   //           <a className="big-letter-M-White" 
   //                         href="#" onClick= {(e) => this.handleUpdateUserInfo( e, 
   //                                                                              this.state.user_id,
   //                                                                              this.state.user_fname,
   //                                                                              this.state.user_lname,
   //                                                                              this.state.user_email 
   //                                                                                                   )}>Account</a>
   //          </div>





   //          <div className="p-2 big-letter-M-White">{this.state.user_fname} </div>


   //    </div>
            
 
   //    <div className="d-flex justify-content-center">

   //           <div>
   //               <h1>Your Shows:</h1>              

   //            {this.state.show_list.map(show =>
   //               <div key={show.show_id}> 
   //              <a className="big-letter-M-White" href="#" onClick={(e) => this.handleShowPage(e, show.show_id)}>{show.show_name}</a>
   //              </div>)}
   //           </div>
   //      </div>
    


