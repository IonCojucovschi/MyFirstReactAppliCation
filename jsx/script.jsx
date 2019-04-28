const DigitalClock=function(props){
    return <div>{props.time}</div>
}


class Clock extends React.Component{
    constructor(props){
       super(props);
       this.state={
         currentTime:(new Date()).toLocaleString()  
       }
       this.clockLauncer()
    }

clockLauncer()
{
    setInterval(()=>{
        console.log("Time was change !!");
        this.setState({
            currentTime:(new Date()).toLocaleString()  
        });
    },1000);
}
    render(){
        return <DigitalClock time={this.state.currentTime}/>
    }
}


ReactDOM.render(
    <Clock/>,document.getElementById("root")
);