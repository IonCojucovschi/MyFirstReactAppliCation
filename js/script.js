const DigitalClock = function (props) {
    return React.createElement(
        "div",
        null,
        props.time
    );
};

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date().toLocaleString()
        };
        this.clockLauncer();
    }

    clockLauncer() {
        setInterval(() => {
            console.log("Time was change !!");
            this.setState({
                currentTime: new Date().toLocaleString()
            });
        }, 1000);
    }
    render() {
        return React.createElement(DigitalClock, { time: this.state.currentTime });
    }
}

ReactDOM.render(React.createElement(Clock, null), document.getElementById("root"));
