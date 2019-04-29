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
    }
    /*
    ////method that is executing until create the component 
    componentWillMount(){}
    componentDidMount(){}
    ///methods thas is executing in moment when component was created 
    componentWillReceiveProps(){}
    shouldComponentUpdate(){}
    componentWillUpdate(){}
    componentDidUpdate(){}
    ///method that is executing in moment when component is destroied
    componentWillUnmount(){}
    */
    componentWillMount() {
        console.log("element will be mount");
    }
    componentDidMount() {
        console.log("component was mount");
        this.clockLauncer();
    }

    componentWillUpdate() {
        console.log("component was updated");
    }
    componentWillUnmount() {
        clearInterval(this.state.diapazon);
    }

    clockLauncer() {
        let diapazon = setInterval(() => {
            console.log("Time was change !!");
            this.setState({
                currentTime: new Date().toLocaleString()
            });
        }, 1000);
        this.setState({ diapazon: diapazon });
    }
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(DigitalClock, { time: this.state.currentTime }),
            React.createElement(
                "p",
                null,
                "Clock will be remover  in  ",
                this.props.seconds,
                " seconds .."
            )
        );
    }
}

let seconds = 5;
let interval = setInterval(() => {
    if (seconds === 0) {
        ReactDOM.render(React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                "clock has been removed"
            )
        ), document.getElementById("root"));
        clearInterval(interval);
    } else {
        ReactDOM.render(React.createElement(Clock, { seconds: seconds }), document.getElementById("root"));
        seconds--;
    }
}, 1000);
