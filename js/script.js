class HelloWorld extends React.Component {
    render() {
        return React.createElement(
            "h1",
            null,
            "Hello World From Component !!"
        );
    }
}

ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById("root"));
