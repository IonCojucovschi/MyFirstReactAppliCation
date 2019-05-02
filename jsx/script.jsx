class Content extends React.Component{
    
    alertOnSunmitting()
    {
        alert("You clicked submit button")
    }

 render(){
     return(
         <form onSubmit={this.alertOnSunmitting.bind(this)}>
             <input type="submit" value="Submit Click"/>
         </form>
     )
 }
}




ReactDOM.render(
    <Content />,
    document.getElementById("root")
)



