class BravoApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {demo: 'Test'}
        this.handleCLick = this.handleCLick.bind(this);
    }

    componentDidMount() {
        // this is where we make HTTP calls to our server 
        // ask for whatever info it needs to display
    }

    handleCLick(e) {
        console.log(e);
        console.log('hjkdhjfaldjs')
        this.setState({demo: "you done clicked me"})
    }

    render(){
        return(

         <div>
            <p>{this.state.demo}</p> 
             <button onClick={this.handleClick}> CLICK ME </button>
         </div>
        )
    }
}