

class Base extends React.Component {
    render(){
        return( 

       <div>     
       
       <BravoApp />
       <RegisterForm />
       {/*<LogIn />*/}
       
       </div>
   

       )
    }
}




ReactDOM.render(<Base />, document.getElementById('root'));