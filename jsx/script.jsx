class HelloWorld extends React.Component{
    render(){
        return <h1>Hello World From Component !!</h1>
    }
}

ReactDOM.render(
    <HelloWorld/>,document.getElementById("root")
);