class HelloWorld extends React.Component{
    render(){
        let my="My new row";
        return (<h1 title={this.props.title} >Hello World {this.props.myName}</h1>)
    }
}


ReactDOM.render(
    <HelloWorld myName="my name  is ...." title="Some property wich is inheritedt by all child class"/>,document.getElementById("root")
);