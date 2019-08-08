
class Homepage extends React.Component {
    render(){
        return(
        <div>
            <p>Welcome to the homepage.</p> 
            <a href="/venue"> Venue </a>
            
         </div>)
    }
}

ReactDOM.render(<Homepage />, document.getElementById('app'));