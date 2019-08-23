class TryStuff extends React.Component {

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


