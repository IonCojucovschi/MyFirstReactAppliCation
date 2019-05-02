class Content extends React.Component {

    alertOnSunmitting() {
        alert("You clicked submit button");
    }

    render() {
        return React.createElement(
            "form",
            { onSubmit: this.alertOnSunmitting.bind(this) },
            React.createElement("input", { type: "submit", value: "Submit Click" })
        );
    }
}

ReactDOM.render(React.createElement(Content, null), document.getElementById("root"));
