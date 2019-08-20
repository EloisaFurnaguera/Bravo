class ProducerUserPage extends React.Component {

//     constructor(props) {
//         super(props);
 
//         this.state = {something:"",
//                       response:" "};
       
//     this.handleRegubmit = this.handleRegubmit.bind(this);
//     this.handleUserIdChange = this.handleUserIdChange.bind(this);

//     }


//     handleUserIdChange(e){  
//          console.log(e.target.value);
//          this.setState({something: e.target.value});

//     }


//     handleRegubmit(e){
//         e.preventDefault();


//         fetch("/get_info", 
//               {method: 'POST',
//               body: JSON.stringify(this.state),
//               headers:{'Content-Type': 'application/json'} 
//            // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

//                 })


//         .then(res1 => res1.json())
//         .then(res2 =>{
//           console.log('Success:', JSON.stringify(res2));

//         this.setState({response: res2});})

// }
        



    render(){
        return(

             <div>

                 <h1>PRODUCER PAGE</h1>

             </div>

 
          );       
    }

}