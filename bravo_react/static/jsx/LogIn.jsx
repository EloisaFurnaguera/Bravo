
class LogIn extends React.Component {

  constructor(props) {
    super(props);

    this.state = { email: " ",
                   password: " "};
                   // producer: false,
                   // venue: false};

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassWordChange = this.handlePassWordChange.bind(this);
    this.handleLogInSubmit = this.handleLogInSubmit.bind(this);



    }





    handleEmailChange(e) {
      
        this.setState({ email: e.target.value});
  
      
         };


     handlePassWordChange(e) {

        this.setState({ password: e.target.value});

      
         };




  


    handleLogInSubmit(e) {
         


          console.log ('IS THIS WORKING');

      e.preventDefault();


       
      
  };


 
    render(){
        return(



         <form onSubmit= {this.handleLogInSubmit}>
            <label>
            Email:
                <input type="email" name="email"  
                       onChange={this.handleEmailChange} required />
          </label>
    
          <label>
            Password:
            <input type="password" name="password"  
                    onChange={this.handlePassWordChange} required />
          </label>
   

{/*        <input type="radio" name="check" value="venue" required />Venue 
        <input type="radio" name="check" value="producer" required />Producer */}

        <input type="submit" value="Log In" />
    
        </form>

  
           




         
        )
    }
}






















// class LogIn extends React.Component {
//     constructor(props) {
//         super(props);
//             this.state = {email: ' ',
//                           password: ' '};
 
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//   }




//     handleChange(event) {

//       this.setState({ [evt.target.name]: evt.target.value });

      


//        // const email = event.target.email;
//        // const password = event.target.password;

//        // this.setState({email:event.target.email,
//        //                password: event.target.password });
      
//        // console.log(event.target.value)
//   }

//     handleSubmit() {
       
//         alert(this.state.email)
//         alert(this.state.password)    
//   }









//     render(){
//         return(




//          <form onSubmit={this.handleSubmit}>
//             <label>
//             Email:
//                 <input type="email" name="email" value= {this.state.email} 
//                        onChange={this.handleChange} required />
//           </label>
    
//           <label>
//             Password:
//             <input type="password" name="password" value= {this.state.password} 
//                     onChange={this.handleChange} required />
//           </label>
   

// {/*        <input type="radio" name="check" value="venue" required />Venue 
//         <input type="radio" name="check" value="producer" required />Producer */}

//         <input type="submit" value="Log In" />
    
//         </form>




//        );
//     }
// }







