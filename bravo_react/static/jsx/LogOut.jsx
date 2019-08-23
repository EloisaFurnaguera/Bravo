class LogOut extends React.Component {

    constructor(props) {
        super(props);

        this.state = {user_id:this.props}
      }                 
 





    componentDidMount() {

        fetch("/logout", 
        {method: "POST",
        body: JSON.stringify("1"),
        headers:{"Content-Type": "application/json"}    
                  })

              .then(res1 => res1.json())
              .then(res2 =>{
              console.log("Success:", JSON.stringify(res2));

             })

          }












    render(){
        return(

             <div>

             <h1>BYE</h1>

            </div>

          );
          
    }

}
