class Button extends React.Component {

    constructor(props) {
        super(props);
        this.clockHANDLER = this.clockHANDLER.bind(this);
        this.state = { counter: 0 };
    }

    clockHANDLER() {
        console.log("button was clicked!!!!");
        this.setState({ counter: ++this.state.counter });
    }
    render() {
        return React.createElement(
            "button",
            { onClick: this.clockHANDLER },
            "click me! you click ",
            this.state.counter,
            " times"
        );
    }

}

ReactDOM.render(React.createElement(Button, null), document.getElementById("root"));
