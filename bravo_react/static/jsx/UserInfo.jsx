class UserInfo extends React.Component {

    constructor(props) {
        super(props);
 
        this.state = {userId:"",
                      r:" "};



  
       
    this.handleRegubmit = this.handleRegubmit.bind(this);
    this.handleUserIdChange = this.handleUserIdChange.bind(this);

    }




    handleUserIdChange(e){  

         console.log(e.target.value);
         this.setState({userId: e.target.value});
 

    }



    handleRegubmit(e){
        e.preventDefault();


        fetch("/get_info", 
              {method: 'POST',
              body: JSON.stringify(this.state),
              headers:{'Content-Type': 'application/json'} 

              // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

                })


        .then(res1 => res1.json())
        .then(res2 =>{
          console.log('Success:', JSON.stringify(res2));

          this.setState({r: res2});})

}
        

 // {/*   
                     
 //  // // const loginData = new FormData(e.target);

 //      // fetch("/login", {method: 'POST', body: JSON.stringify(data)})

 //      // // // console.log(response);

 //      // // // status: 200 {}
 //      // // // status: 401 {}

 //      // // // if (respondse.status === 200) {
 //      // // //   this.props.changePage(0)
 //      // // // } else {
 //      // // //   this.setState()
 //      // // // }
 //      // this.props.changeStuff({name: 'whatever i got back'})
 //      // this.props.changePage("BravoApp")



 //                    */}



 



    render(){
        return(

             <div>

                <form onSubmit= {this.handleRegubmit}>

               
                    <label>
                        UserId
                        <input type="user_id" name="user_id" 
                               onChange={this.handleUserIdChange} required />                   
                    </label>       
                       
   
                    <input type="submit" value="user_id" />                              

            </form>


            
            <p> {this.state.r.user_lname} </p>

            </div>

          );
          
    }

}


