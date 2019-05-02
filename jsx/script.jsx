class Content extends React.Component{
    
 constructor(props){
     super(props);
     this.handleRadio=this.handleRadio.bind(this)
     this.state={
         radioGroup:{
             angular:false,
             react:true,
             ember:false
         }
     }
     this.helper()

 }

helper(){
    setInterval(()=>{
        console.log(this.state.radioGroup)
    },1000)
}

handleRadio(){
let object={};
object[event.target.value]=event.target.checked
this.setState({radioGroup:object})
}


 render(){
     return(
<form>
    <input 
        type="radio"
        value="angular"
        checked={this.state.radioGroup.angular}
        onChange={this.handleRadio}/>
<input 
        type="radio"
        value="react"
        checked={this.state.radioGroup.react}
        onChange={this.handleRadio}/>
<input 
        type="radio"
        value="ember"
        checked={this.state.radioGroup.ember}
        onChange={this.handleRadio}/>



</form>

        )
 }
}




ReactDOM.render(
    <Content />,
    document.getElementById("root")
)



