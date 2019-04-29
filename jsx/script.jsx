const DigitalClock=function(props){
    return <div>{props.time}</div>
}


class Clock extends React.Component{
    constructor(props){
       super(props);
       this.state={
         currentTime:(new Date()).toLocaleString()  
       }
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
componentWillMount()
{
    console.log("element will be mount")
}
componentDidMount()
{
    console.log("component was mount")
    this.clockLauncer()

}

componentWillUpdate()
{
    console.log("component was updated")
}
componentWillUnmount()
{
    clearInterval(this.state.diapazon)
}


clockLauncer()
{
   let diapazon= setInterval(()=>{
        console.log("Time was change !!");
        this.setState({
            currentTime:(new Date()).toLocaleString()  
        });
    },1000);
    this.setState({diapazon:diapazon})
}
    render(){
        return (
        <div>
                <DigitalClock time={this.state.currentTime}/>
                <p>Clock will be remover  in  {this.props.seconds} seconds ..</p>
        </div>
            )
    }
}




let seconds=5;
let interval=setInterval(()=>{
    if(seconds===0)
    {
        ReactDOM.render(
            <div><p>clock has been removed</p></div>,document.getElementById("root")
        )
        clearInterval(interval)
    }else{
        ReactDOM.render(
            <Clock seconds={seconds}/>,document.getElementById("root")
        )
        seconds--
    }
},1000);


