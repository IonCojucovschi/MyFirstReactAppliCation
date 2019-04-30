class Button extends React.Component {
    clockHANDLER() {
        console.log("button was clicked!!!!");
    }

    render() {
        return React.createElement(
            "button",
            { onClick: this.clockHANDLER.bind(this) },
            "click me!"
        );
    }

}

ReactDOM.render(React.createElement(Button, null), document.getElementById("root"));
