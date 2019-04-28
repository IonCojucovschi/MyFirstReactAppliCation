class HelloWorld extends React.Component{
    getSomeUrl(){
        return "Https://google.com"
    }
    
    
    render(){
        let my="My new row";
        return (<h1 style={{backgroundColor:"#eeeeee"}} title={this.props.title} >Hello World {this.props.myName}  and url {this.getSomeUrl()}</h1>)
    }
}


ReactDOM.render(
    <HelloWorld myName="my name  is ...." title="Some property wich is inheritedt by all child class"/>,document.getElementById("root")
);