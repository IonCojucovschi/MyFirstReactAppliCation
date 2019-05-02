class Content extends React.Component {

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
            "div",
            null,
            React.createElement(Button, { handler: this.clockHANDLER }),
            React.createElement(Text, { counter: this.state.counter })
        );
    }
}

class Button extends React.Component {

    render() {
        return React.createElement(
            "button",
            { onClick: this.props.handler },
            "click me!"
        );
    }
}

class Text extends React.Component {

    render() {
        return React.createElement(
            "div",
            null,
            "DNT click me! you click ",
            this.props.counter,
            " times"
        );
    }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById("root"));
