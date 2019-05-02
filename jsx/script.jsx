class Content extends React.Component{
    
    constructor(props){
     super(props)
     this.clockHANDLER=this.clockHANDLER.bind(this)
     this.state={counter:0}
    }
    clockHANDLER(){
    console.log("button was clicked!!!!")
    this.setState({counter: ++this.state.counter})
    }
    render (){
        return(
            <div> 
                <Button handler={this.clockHANDLER}/>
                <Text  counter={this.state.counter}/>
            </div>
        )}
}

class Button extends React.Component{

    render (){
        return(
            <button onClick={this.props.handler}>
                click me!
            </button>
        )}
}

class Text extends React.Component{

    render (){
        return(
            <div >
                DNT click me! you click {this.props.counter} times
            </div>
        )}
}




ReactDOM.render(
    <Content />,
    document.getElementById("root")
)



