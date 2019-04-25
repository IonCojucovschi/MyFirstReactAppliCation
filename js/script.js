class HelloWorld extends React.Component {
    render() {
        let my = "My new row";
        return React.createElement(
            "h1",
            { title: this.props.title },
            "Hello World ",
            this.props.myName
        );
    }
}

ReactDOM.render(React.createElement(HelloWorld, { myName: "my name  is ....", title: "Some property wich is inheritedt by all child class" }), document.getElementById("root"));
